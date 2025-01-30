import React from 'react'
import '../CBSE-page/CBSE-page.css';
import { motion } from "framer-motion";
import Comp1 from '../../Component/CBSE/CBSEC1';
import Comp2 from '../../Component/CBSE/CBSEC2';
import Comp3 from  '../../Component/CBSE/CBSEC3';

function CBSE({toggleForm}) {

  const fadeInUp = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="folder-page">
    <div className="CBSE-content">
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

    <button className="CBSE-fixed-button" onClick={toggleForm}>
        ENQUIRE FOR ADMISSION
      </button>

  </div>
  )
}

export default CBSE;