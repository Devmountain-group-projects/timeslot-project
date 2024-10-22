import dotenv from "dotenv";
dotenv.config();

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get the current directory of this file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define the photo path where images will be saved
const photoPath = path.join(__dirname, "../../public/photos");

// Ensure the photos directory exists, create it if it doesn't
if (!fs.existsSync(photoPath)) {
  fs.mkdirSync(photoPath, { recursive: true });
}

export const test = async (req, res) => {
  console.log("TESTING");
  return res.send({
    message: "Test successful",
    success: true,
  });
};

export const update = async (req, res) => {
  const db = req.app.get("db");
  const { field, input } = req.body;
  if (req.session.userId) {
    switch (field) {
      case "name": {
        console.log(input);
        console.log(req.session.userId);
        db.user.update(
          {
            name: input,
          },
          { where: { user_id: req.session.userId } }
        );
        return res.send({
          message: "Name updated",
          success: true,
        });
      }
      case "email": {
        console.log(input);
        db.user.update(
          {
            email: input,
          },
          { where: { user_id: req.session.userId } }
        );
        return res.send({
          message: "Email updated",
          success: true,
        });
      }
      case "phone": {
        console.log(input);
        db.user.update(
          {
            phone: input,
          },
          { where: { user_id: req.session.userId } }
        );
        return res.send({
          message: "Phone updated",
          success: true,
        });
      }
      case "about": {
        console.log(input);
        console.log(req.session.businessId);
        db.business.update(
          {
            description: input,
          },
          { where: { business_id: req.session.businessId } }
        );
        return res.send({
          message: "About updated",
          success: true,
        });
      }
      case "businessName": {
        console.log(input);
        console.log(req.session.userId);
        db.business.update(
          {
            business_name: input,
          },
          { where: { business_id: req.session.businessId } }
        );
        return res.send({
          message: "Business Name updated",
          success: true,
        });
      }
      case "address1": {
        console.log(input);
        db.business.update(
          {
            address_line1: input,
          },
          { where: { business_id: req.session.businessId } }
        );
        return res.send({
          message: "Address Line 1 updated",
          success: true,
        });
      }
      case "address2": {
        console.log(input);
        db.business.update(
          {
            address_line2: input,
          },
          { where: { business_id: req.session.businessId } }
        );
        return res.send({
          message: "Address Line 2 updated",
          success: true,
        });
      }
      case "city": {
        console.log(input);
        db.business.update(
          {
            city: input,
          },
          { where: { business_id: req.session.businessId } }
        );
        return res.send({
          message: "City updated",
          success: true,
        });
      }
      case "state": {
        console.log(input);
        console.log(req.session.userId);
        db.business.update(
          {
            state: input,
          },
          { where: { business_id: req.session.businessId } }
        );
        return res.send({
          message: "State updated",
          success: true,
        });
      }
      case "zip": {
        console.log(input);
        db.business.update(
          {
            zip_code: input,
          },
          { where: { business_id: req.session.businessId } }
        );
        return res.send({
          message: "Zip updated",
          success: true,
        });
      }
      case "businessPhone": {
        console.log(input);
        db.business.update(
          {
            phone: input,
          },
          { where: { business_id: req.session.businessId } }
        );
        return res.send({
          message: "Business Phone updated",
          success: true,
        });
      }
      case "website": {
        console.log(input);
        db.business.update(
          {
            website: input,
          },
          { where: { business_id: req.session.businessId } }
        );
        return res.send({
          message: "Website updated",
          success: true,
        });
      }
      case "photo": {
        console.log(input);
        db.user.update(
          {
            profile_picture: input,
          },
          { where: { user_id: req.session.userId } }
        );
        return res.send({
          message: "photo updated",
          success: true,
        });
      }
      default: {
        return res.send({
          message: "Hit Default",
          success: false,
        });
      }
    }
  } else {
    return res.send({
      message: "User not signed in",
      success: false,
    });
  }
};

export const updatePhoto = async (req, res) => {
  const db = req.app.get("db");
  let photoUrl = null;
  // Handle the photo if it's uploaded
  console.log("req.files: ", req.files);
  console.log("req.data.image: ", req.files.image);
  if (req.files && req.files.image) {
    const photo = req.files.image;
    const photoFileName = `${Date.now()}_${req.files.image.name}`;
    const fullPath = path.join(photoPath, photoFileName);

    console.log("Saving photo to:", fullPath);

    try {
      // Write the file to the specified directory
      fs.writeFileSync(fullPath, photo.data);
      photoUrl = `http://localhost:5539/photos/${photoFileName}`; // Construct the photo URL
      console.log("Photo saved at:", photoUrl);
    } catch (err) {
      console.error("Error saving client photo:", err);
      return res.status(500).send({
        message: "Error saving client photo",
        success: false,
        error: err.message,
      });
    }

    // Handle updated photos
    let photos = [];
    if (req.files) {
      let reqPhotos = req.files.image;

      if (!(reqPhotos instanceof Array)) {
        reqPhotos = [reqPhotos];
      }

      reqPhotos.forEach((file, index) => {
        fs.writeFile(photoPath + "/" + file.name, file.data, () => {});

        photos.push({
          src: `http://localhost:5539/photos/${file.name}`,
          clientImage: {
            imageType: index === 0 ? "profile" : "banner", // First image is profile, second is banner
          },
        });
      });

      if (photoUrl) {
        await db.image.create({
          src: photoUrl,
          user_id: req.session.userId,
          imageType: "profile",
        });

        if (photoUrl) {
          // Optionally, store the image in an image table for further tracking
          // await db.image.destroy({ where: { user_id: req.session.userId } });
          await db.image.create({
            src: photoUrl,
            user_id: req.session.userId,
            imageType: "profile",
          });
        }

        console.log(photoUrl);
        db.user.update(
          {
            profile_picture: photoUrl,
          },
          { where: { user_id: req.session.userId } }
        );
      }
    }
  }

  return res.send({
    message: "Hit updatePhoto",
    success: true,
  });
};

export const getPhoto = async (req, res) => {
  const db = req.app.get("db");
  const userImages = await db.image.findAll({ where: { image_id: 15 } });
  // const userImages = await db.image_user.findAll({ where: { user_id: req.session.userId } })
  console.log(userImages);
  console.log(userImages);

  if (
    !(
      (await db.image.findOne({
        where: {
          src: `http://localhost:5539/src/assets/images/placeholderavatar.png`,
        },
      })) === false
    )
  ) {
    console.log("Create placeholder Avater");
    await db.image.create({
      src: `http://localhost:5539/src/assets/images/placeholderavatar.png`,
      imageType: "profile",
    });
  }

  return res.send({
    message: "Got photos",
    success: true,
    photos: userImages,
  });
};
