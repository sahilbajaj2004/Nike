import React from 'react'
import '../../App.css'

function Contact() {
  return (
    <div className="location-container">
      <h2 className="location-heading">Contact Us</h2>
      <div className="location-address">
        Have questions or need help? Reach out to us!
        <br /><br />
        <strong>Email:</strong> support@nike.com<br />
        <strong>Phone:</strong> +1 234 567 8901<br />
        <strong>Address:</strong> 123 Nike Street, Downtown City, Country 12345
      </div>
      <form className="contact-form">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="4" required />

        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default Contact