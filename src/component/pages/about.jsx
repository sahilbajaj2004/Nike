import React from 'react'
function about() {
  return (
    <div>
      <div className="about-container">
        <h1 className="about-title">About Nike Store</h1>
        <p className="about-text">
          Welcome to our Nike Store! We are passionate about delivering the latest and greatest Nike footwear and apparel to athletes and fans everywhere. Our mission is to inspire and innovate, helping you achieve your best—on the field, in the gym, or on the street.
        </p>
        <div className="about-features">
          <div className="about-feature">
            <h3>Authentic Products</h3>
            <p>We guarantee 100% authentic Nike merchandise, sourced directly from official channels.</p>
          </div>
          <div className="about-feature">
            <h3>Fast Shipping</h3>
            <p>Enjoy quick and reliable delivery, so you can start your journey with Nike sooner.</p>
          </div>
          <div className="about-feature">
            <h3>Customer Support</h3>
            <p>Our team is here to help you with any questions or concerns, ensuring a smooth shopping experience.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default about
