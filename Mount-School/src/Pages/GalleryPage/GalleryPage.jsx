import React from 'react'
import '../GalleryPage/GalleryPage.css';
import { motion } from "framer-motion";
import Comp1 from '../../Component/Gallery/GalleryC1';
import Comp2 from '../../Component/Gallery/GalleryC2';
import Comp3 from  '../../Component/Gallery/GalleryC3';
import Comp4 from  '../../Component/Gallery/GalleryC4';


function GalleryPage({toggleForm}) {

  const fadeInUp = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };


  return (
    <div className="folder-page">
    <div className="Gallery-content">
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
    </div>

    <button className="Gallery-fixed-button" onClick={toggleForm}>
        ENQUIRE FOR ADMISSION
    </button>

  </div>
  )
}

export default GalleryPage;