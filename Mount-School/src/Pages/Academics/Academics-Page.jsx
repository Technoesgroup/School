import React from "react";
import { motion } from "framer-motion";
import "../Academics/Academics-Page.css";
import Comp1 from "../../Component/Academics/AcademicsC1";
import Comp2 from "../../Component/Academics/AcademicsC2";
import Comp3 from "../../Component/Academics/AcademicsC3";
import Comp4 from "../../Component/Academics/AcademicsC4";
import Comp5 from "../../Component/Academics/AcademicsC5";
import Comp6 from "../../Component/Academics/AcademicsC6";
import Comp7 from "../../Component/Academics/AcademicsC7";
import Comp8 from "../../Component/Academics/AcademicsC8";
import Comp9 from "../../Component/Academics/AcademicsC9";
import Comp10 from "../../Component/Academics/AcademicsC10";
import Comp11 from "../../Component/Academics/AcademicsC11";
import Comp12 from "../../Component/Academics/AcademicsC12";
import Comp13 from "../../Component/Academics/AcademicsC13";
import Comp14 from "../../Component/Academics/AcademicsC14";
import Comp15 from "../../Component/Academics/AcademicsC15";
import Comp16 from "../../Component/Academics/AcademicsC16";
import Comp17 from "../../Component/Academics/AcademicsC17";

function Academics({toggleForm}) {
  // Motion settings for smooth scroll animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="folder-page">
      <div className="Academics-page">
        {/* Apply animations to each component */}
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

        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Comp10 />
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
          <Comp11 />
        </motion.div>

        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Comp12 />
        </motion.div>

        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Comp13 />
        </motion.div>

        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Comp15 />
        </motion.div>
            
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Comp16 />
        </motion.div>

                
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Comp17 />
        </motion.div>

        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Comp14 />
        </motion.div>
   
      </div>
      <button className="Academics-fixed-button" onClick={toggleForm}>
        ENQUIRE FOR ADMISSION
      </button>
    </div>
  );
}

export default Academics;
