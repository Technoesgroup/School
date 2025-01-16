import React from "react";
import "../../Styles/Home-CSS/HomeC10.css";

const HomeC10 = () => {
  return (
    <div className="contact-container">
      {/* Left Section */}
      <div className="form-section">
        <h2>
          Get in <span className="highlight">Touch</span>
        </h2>
        <p>
          Have questions? Submit your inquiry and let us guide you toward <br /> the
          perfect educational journey for your child.
        </p>
        <form>
          <input type="text" placeholder="Name *" required />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Phone number *" required />
          <textarea placeholder="Your Message" rows="4"></textarea>
          <br></br>
          <button type="submit-btn">SEND</button>
        </form>
        <div className="contact-info">
          <div>
            <span>📞 PHONE</span>
            <p>03 5432 1234</p>
          </div>
          <div>
            <span>📠 FAX</span>
            <p>03 5432 1234</p>
          </div>
          <div>
            <span>📧 EMAIL</span>
            <p>info@mlzsc.com.au</p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="map-section">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.869607768694!2d84.88386581540766!3d25.619808118999873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e310d5395a4eb%3A0x607cd44dc90dce8!2sMount%20Litera%20Zee%20School%2C%20Bihta!5e0!3m2!1sen!2sin!4v1677666726334!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default HomeC10;
