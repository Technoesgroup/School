import React from 'react'
import '../CareersPage/CareersPage.css';
import { motion } from "framer-motion";
import Comp1 from '../../Component/Careers/CareeersCom_1';
import Comp2 from '../../Component/Careers/CareersCom_2';
import Comp3 from  '../../Component/Careers/CareersCom_3';


function CareersPage({toggleForm}) {

  const fadeInUp = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };


  return (
    <div className="folder-page">
    <div className="Careers-content">
    <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Comp1 />
        </motion.div>

        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Comp2 />
        </motion.div>

        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Comp3 />
        </motion.div>
    </div>
    <button className="Careers-fixed-button" onClick={toggleForm}>
        ENQUIRE FOR ADMISSION
      </button>
  </div>
  )
}

export default CareersPage;