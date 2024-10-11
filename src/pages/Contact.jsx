import React from 'react'
import ContactForm from '../components/Contact/ContactForm'
import ContactInfo from '../components/Contact/ContactInfo'
import Subscribe from '../components/Home/Subscribe'

const Contact = () => {
    return (
        <div>
            <ContactForm />
            <ContactInfo />
            <Subscribe />
        </div>
    )
}

export default Contact