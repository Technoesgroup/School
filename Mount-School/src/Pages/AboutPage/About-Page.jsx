import React from 'react'
import '../AboutPage/About-Page.css'
import { motion } from "framer-motion";
import Comp1 from '../../Component/About/AboutC1';
import Comp2 from '../../Component/About/AboutC2';
import Comp3 from '../../Component/About/AboutC3';
import Comp4 from '../../Component/About/AboutC4';
import Comp5 from '../../Component/About/AboutC5';
import Com7 from '../../Component/About/About_Management/AboutC7';
import Com9 from '../../Component/About/About_Our_Gallery/AboutC9';


function About({toggleForm}) {

  const fadeInUp = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="AboutPage-folder">
    <div className="About-content">
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
          <Comp4 />
        </motion.div>

        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Comp5 />
        </motion.div>

        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Com7 />
        </motion.div>

        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Com9 />
        </motion.div>
   
    </div>
    <button className="AboutPage-fixed-button" onClick={toggleForm}>
        ENQUIRE FOR ADMISSION
      </button>
  </div>
  )
}

export default About;