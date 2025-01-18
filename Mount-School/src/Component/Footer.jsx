import React from 'react';
import '../Styles/Footer.css'; // CSS file for styling

import FooterImg from '../image/LogoMLZS.svg';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section first-section">
        <h3>Contact Us</h3>
        <p>Have Questions? We're Here to Help – Reach Out to Us Today!</p>
        <div className="Contact-Form2">
          <input type="email" placeholder="Email address" />
          <button className='Send-btn'>SEND MESSAGE</button>
        </div>
      </div>

      <div className="footer-section section-Quick">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#about">About Us</a></li>
          <li><a href="#news">News/Events</a></li>
          <li><a href="#admissions">Admissions</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#careers">Careers</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Contact Information</h3>
        <div className='font-front'>
        <PhoneIcon /> <p>+1 (123) 567 9620</p>
        </div>
        <div className='font-front' >
        <EmailIcon /> <p> email@example.com</p>
        </div>
       <div  className='font-front'>
       <HomeIcon /> <p> #HM1, 123, Sector 59, NY</p>
       </div>

        <h3 className='follow-us'>Follow us</h3>
        <div className="social-icons">
          <a href="#"><PinterestIcon /></a>
          <a href="#"><InstagramIcon /></a>
          <a href="#"><TwitterIcon /></a>
          <a href="#"><LinkedInIcon /></a>
          <a href="#"><FacebookIcon /></a>
        </div>
      </div>

      <div className="footer-section">
        <img className='footer_img' src={FooterImg} alt="Footer Logo" />
      </div>

      {/* Bottom Line and Text */}
      <div className="footer-bottom">
      <hr className="footer-line" />
      <div className="footer-content">
      <p>© 2024 Company Name. All rights reserved.</p>
      <a href="#privacy">Privacy Policy</a>
      </div>
  </div>
    </footer>
  );
}

export default Footer;


