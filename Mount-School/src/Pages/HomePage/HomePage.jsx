import { useState } from "react";
import { motion } from "framer-motion";
import "../HomePage/HomePage.css";
import Comp1 from "../../Component/Home/Sliding-First-Page/HomeC1";
import Comp2 from "../../Component/Home/HomeC2";
import Comp3 from "../../Component/Home/HomeC3";
import Comp4 from "../../Component/Home/HomeC4";
import Comp5 from "../../Component/Home/HomeC5";
import Comp6 from "../../Component/Home/HomeC6";
import Comp7 from "../../Component/Home/HomeC7";
import Comp8 from "../../Component/Home/HomeC8";
import Comp9 from "../../Component/Home/HomeC9";
import Comp10 from "../../Component/Home/HomeC10";
import { useNavigate } from "react-router-dom";
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Home = ({ toggleForm }) => {
  const [showFullButton, setShowFullButton] = useState(false);

const  navigate =  useNavigate();


  const handleButtonClick = () => {
    setShowFullButton(true);
  }; 

  const  handlebtn =  () =>{
    navigate("/CBSE")
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="Component">
      <div className="HomeComponent">
        {/* Wrap each component with motion.div */}
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Comp1 />
        </motion.div>

        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Comp2 />
        </motion.div>

        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Comp3 />
        </motion.div>

        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Comp4 toggleForm={toggleForm} />
        </motion.div>

        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Comp5 />
        </motion.div>

        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Comp6 />
        </motion.div>

        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Comp7 />
        </motion.div>

        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Comp8 />
        </motion.div>

        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Comp9 />
        </motion.div>

        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Comp10 />
        </motion.div>
      </div>

      
        {/* Conditionally render the button based on showFullButton */}
        {!showFullButton ? (
          <button className="CBSEPAGE-fixed-button-left"  onClick={() => {
            handleButtonClick(); 
            handlebtn();
          }}>
          CBSE  {/* CBSE  <ArrowForwardIcon  className="HomePage-arrowforword" /> */}
          </button>
        ) : (
          <button className="CBSEPAGE-fixed-button-left-full" onClick={toggleForm}>
            CBSE MANDATORY DISCLOSURE
          </button>
        )}
      {/* </a> */}

      {/* Enquire Button */}
      <button className="fixed-button" onClick={toggleForm}>
        ENQUIRE FOR ADMISSION
      </button>
    </div>
  );
};

export default Home;


