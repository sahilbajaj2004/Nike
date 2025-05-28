import React from 'react'

function Location() {
  return (
    <div className="location-container">
      <h2 className="location-heading">Our Store Location</h2>
      <div className="location-address">
        Sonia Vihar<br />
        Delhi,<br />
        India 110004
      </div>
      <div className="location-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d27989.815463390973!2d77.25700645!3d28.727705599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1748420717814!5m2!1sen!2sin"
          width="100%"
          height="320px"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Store Location"
        />
      </div>
    </div>
  )
}

export default Location