import express from 'express';
import { google } from 'googleapis';

const router = express.Router();

const oauth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URI
);

if (process.env.REFRESH_TOKEN) {
    oauth2Client.setCredentials({
        refresh_token: process.env.REFRESH_TOKEN
    });
} else {
    console.warn('No refresh token found. Please obtain a refresh token.');
}

router.get('/auth/google', (req, res) => {
    const url = oauth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: ['https://www.googleapis.com/auth/calendar.readonly'],
    });
    res.redirect(url);
});

router.get('/auth/google/redirect', async (req, res) => {
    const { tokens } = await oauth2Client.getToken(req.query.code);
    oauth2Client.setCredentials(tokens);
    res.redirect('/');
});

router.get('/auth/google/calendar', (req, res) => {
    const calendar = google.calendar({ version: 'v3', auth: oauth2Client });
    calendar.events.list({
        calendarId: 'primary',
        timeMin: new Date().toISOString(),
        maxResults: 10,
        singleEvents: true,
        orderBy: 'startTime',
    }, (err, result) => {
        if (err) return console.log('The API returned an error: ' + err);
        const events = result.data.items;
        if (events.length) {
            console.log('Upcoming 10 events:');
            events.map((event, i) => {
                const start = event.start.dateTime || event.start.date;
                console.log(`${start} - ${event.summary}`);
            });
        } else {
            console.log('No upcoming events found.');
        }
    });
    res.json(calendar);
});

export default router;