import React  from 'react';  
import '../ContactUs-Page/ContactUsPage.css';
import Comp1  from  '../../Component/ContactUs/ContactUsC1';
import Comp2 from '../../Component/ContactUs/ContactUsC2';
import Comp3 from '../../Component/ContactUs/ContactUsC3';
function ContactUs(){
return (
    <div className="Contact-content">
      <Comp1 /> 
      <Comp2 />
      <Comp3 />
    </div>
  
)
}

export default ContactUs ;