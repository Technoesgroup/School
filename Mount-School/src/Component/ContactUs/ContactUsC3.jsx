import React from 'react';
import '../../Styles/Contact-CSS/Contact3.css'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
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
        <div className="Contact-Us-Info">
          <h3>Contact Information</h3>
          <h4>Please fill the form and send us your details. We will get in touch with you shortly.</h4>
          <a href="">
          <p><LocalPhoneIcon  className='contact-Us-icon'/>+91 9771485809 , 9771485810</p>
          </a>
          <a href="mlzsbihta@gmail.com">
          <p><EmailIcon  className='contact-Us-icon' />mlzsbihta@gmail.com</p>
          </a>
         <a href="">
         <p><FmdGoodIcon  className='contact-Us-icon'/>Jinpura road, Bihta, Bihar 801103</p>
         </a>
         <a href="https://www.instagram.com/mlzsbihta/">
         <p><InstagramIcon  className='contact-Us-icon'/>
         Lets Connect  On Instagram</p>
         </a>
        <a href="https://www.facebook.com/mlzsbihta/">
        <p><FacebookIcon  className='contact-Us-icon'/>Follow Us On Facebook</p>
        </a>
          <a href="https://www.linkedin.com/company/mount-litera-zee-school-bihta/about/">
          <p><LinkedInIcon  className='contact-Us-icon'/>Connect Us On Linkdin</p>
          </a>

        <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509552!2d144.95373631531868!3d-37.81627977975148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d5592b7bc0629%3A0x1e934bdc4c3c600f!2sMOUNT%20LITERA%20ZEE%20SCHOOL%2C%20BIHTA!5e0!3m2!1sen!2sin!4v1672359475287!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
       ></iframe>
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