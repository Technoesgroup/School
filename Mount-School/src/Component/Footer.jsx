import React from 'react';
import '../Styles/Footer.css'; // CSS file for styling
import FooterImg from '../image/LogoMLZS.svg';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section first-section">
        <h3>News Letter</h3>
        <p>Subscribes us to get recent updates!</p>
        <div className="Contact-Form2">
          <input type="email" placeholder="Email address" />
          <button className='Send-btn'>Subscribes</button>
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
          <a href="tel:+919771485809"  className='phone-contact-link'>
        <PhoneIcon /> <p>+91 9771485809</p>
        </a>
        </div>
        <div className='font-front' >
        <a href="mailto:mlzsbihta@gmail.com" className='email-contact-link'>
        <EmailIcon /> <p>mlzsbihta@gmail.com</p> 
        </a>
        </div>
       <div  className='font-front'>
      <a href=""> <HomeIcon /> <p>Jinpura road, Bihta, Bihar 801103</p></a>
       </div>

        <h3 className='follow-us'>Follow us</h3>
        <div className="social-icons">
          <a href="https://www.instagram.com/mlzsbihta/"><InstagramIcon /></a>
          <a href="https://www.linkedin.com/company/mount-litera-zee-school-bihta/about/"><LinkedInIcon /></a>
          <a href="https://www.facebook.com/mlzsbihta/"><FacebookIcon /></a>
        </div>
      </div>

      <div className="footer-section">
        <img className='footer_img' src={FooterImg} alt="Footer Logo" />
      </div>

      {/* Bottom Line and Text */}
      <div className="footer-bottom">
      <hr className="footer-line" />
      <div className="footer-content">
      <p>© 2025 Mount Litera Zee School Bihta </p>
      <a href="#privacy">Privacy Policy</a>
      </div>
  </div>
    </footer>
  );
}

export default Footer;


