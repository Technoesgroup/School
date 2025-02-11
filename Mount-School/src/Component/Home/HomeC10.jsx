import React from "react";
import "../../Styles/Home-CSS/HomeC10.css";
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import WifiCalling3OutlinedIcon from '@mui/icons-material/WifiCalling3Outlined';

const HomeC10 = () => {
  return (
    <div className="HomeC10-contact-container">
      {/* Left Section */}
      <div className="HomeC10-form-section">
        <h2  id="get_in_touch">
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
          <button type="HomeC10-submit-btn">SEND</button>
        </form>
        <div className="HomeC10-contact-info">
          <div>
            <span className="get-in-touch-phn"> <WifiCalling3OutlinedIcon />PHONE</span>
            <p>+91 9771485809</p>
          </div>
          <div>
            <span  className="get-in-touch-phn"><DraftsOutlinedIcon /> EMAIL</span>
            <p>mlzsbihta@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="map-section">
  <iframe
    title="Google Map"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509552!2d144.95373631531868!3d-37.81627977975148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d5592b7bc0629%3A0x1e934bdc4c3c600f!2sMOUNT%20LITERA%20ZEE%20SCHOOL%2C%20BIHTA!5e0!3m2!1sen!2sin!4v1672359475287!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: "0" }}
    allowFullScreen=""
    loading="lazy"
  ></iframe>
  <div className="map-section-corner-border_1"></div>
  <div className="map-section-corner-border_2"></div>
</div>

    </div>
  );
};

export default HomeC10;
