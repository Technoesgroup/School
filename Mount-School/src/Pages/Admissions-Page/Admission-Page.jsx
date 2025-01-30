import React from 'react'
import '../Admissions-Page/Admission-Page.css';
import { motion } from "framer-motion";
import Comp1 from '../../Component/Admissions/AdmissionsC1';
import Comp2 from '../../Component/Admissions/AdmissionsC2';
import Comp3 from  '../../Component/Admissions/AdmissionsC3';
import Comp4 from '../../Component/Admissions/AdmissionsC4';
import Comp5 from '../../Component/Admissions/AdmissionsC5';
import Comp6 from '../../Component/Admissions/AdmissionsC6';



function Admission({toggleForm}) {

  const fadeInUp = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };


  return (
    <div className="folder-page">
    <div className="Admission-content">
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
          <Comp6 />
        </motion.div>
    </div>

    <button className="fixed-button" onClick={toggleForm}>
        ENQUIRE FOR ADMISSION
      </button>

  </div>
  )
}

export default Admission;