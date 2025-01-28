import React from 'react';
import '../../Styles/Contact-CSS/Contact3.css'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import FmdGoodIcon from '@mui/icons-material/FmdGood';

const ContactForm = () => {
  return (
    <div className="Contact-Box">
      <h2 className="contact-heading">Get In Touch With Us</h2>
      <p className="contact-subheading">
        Visit Us or get in touch with us to discuss more on giving your child the
        best and a deserving future
      </p>
      <div className="contact-wrapper">
        <div className="Contact-Info">
          <h3>Contact Information</h3>
          <h4>Please fill the form and send us your details. We will get in touch with you shortly.</h4>
          <p><LocalPhoneIcon /> +91 9876543210</p>
          <p><EmailIcon />mlzsbihta@gmail.com</p>
          <p><FmdGoodIcon /> Jhapura Road, Bihia, Patna, 802103</p>
        </div>
        <div class="background-container">
       <div class="circle circle1"></div>
        <div class="circle circle2"></div>
          </div>
        <div className="contact-form">
          <form>
            <div className="ConatctUs-form-row">
              <input type="text" placeholder="First Name" required />
              <input type="text" placeholder="Last Name" required />
            </div>
            <div className="ConatctUs-form-row">
              <input type="email" placeholder="Email" required />
              <input type="tel" placeholder="Phone Number" required />
            </div>
            <textarea placeholder="Write your message..." required></textarea>
            <button type="submit" className="ContactUs-send-button">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;