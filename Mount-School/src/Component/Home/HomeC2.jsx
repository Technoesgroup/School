import React, { useState, useEffect, useRef } from 'react';
import '../../Styles/Home-CSS/HomeC2.css';
import { useNavigate } from 'react-router-dom';

function AboutUs() {

  const navigate = useNavigate();

  const handleApllybtn = ()=>{
    navigate("/contact-us")
  }
  const [stats, setStats] = useState({
    skilledStaff: 0,
    teacherStudentRatio: 0,
    alumniCount: 0,
  });

  const containerRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          incrementNumbers();
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  const incrementNumbers = () => {
    const duration = 2000; // Total time for the animation in ms
    const steps = 100; // Number of updates during the animation

    const skilledStaffTarget = 200;
    const teacherStudentRatioTarget = 9;
    const alumniCountTarget = 2000;

    const incrementStep = (start, end, key) => {
      const increment = (end - start) / steps;
      let current = start;
      let stepCount = 0;

      const interval = setInterval(() => {
        stepCount++;
        current += increment;
        setStats((prevStats) => ({
          ...prevStats,
          [key]: stepCount === steps ? end : Math.round(current),
        }));

        if (stepCount === steps) clearInterval(interval);
      }, duration / steps);
    };

    incrementStep(0, skilledStaffTarget, 'skilledStaff');
    incrementStep(0, teacherStudentRatioTarget, 'teacherStudentRatio');
    incrementStep(0, alumniCountTarget, 'alumniCount');
  };

  return (
    <>
   <div className="header-Admission">
   <div  className='h3-admission-header'>
   <h3><span className='h3-open-admission'>ADMISSIONS OPEN FOR 2025-2026 </span> <span><button  className='Apply-btn' onClick={handleApllybtn}>APPLY NOW</button></span></h3>
   </div>
   <div className='h3-admission-header'>
   <h3><span  className='h3-open-admission'>ADMISSIONS OPEN FOR 2025-2026 </span> <span><button  className='Apply-btn' onClick={handleApllybtn}>APPLY NOW</button></span></h3>
  </div>
    </div>
    <div className="HomeC2-About-container" 
    ref={containerRef}>
      <div className="HomeC2-leader-header_About">
        <h1  className="tttt">
        Welcome to Mount Litera Zee School, Bihta
        </h1>
      </div>
      <p className='About-container-paragraph'>
      Mount Litera Zee School, Bihta was established in 2016 with a desire to create a 
      transformative educational environment where students are empowered to realize their full potential. Our school is a beacon of innovative learning, where academic excellence and personal growth go hand in hand. We are committed to providing a space where curiosity thrives, creativity is nurtured, and critical thinking is developed.
      </p>
      <p className='About-container-paragraph'>
      We recognize that each child is a unique individual with  own strengths, passions, and potential. Our educational philosophy is centered on personalized learning that fosters intellectual, emotional, and social development. We blend a robust academic curriculum with a wide range of co-curricular activities to ensure our students grow holistically, preparing them for the future in all its complexity.
      </p>
      <p className='About-container-paragraph'>
      Our approach to teaching is dynamic and forward-thinking, utilizing diverse pedagogies to cater to different learning styles. From hands-on projects and Enquiry-based exploration to the integration of modern technology, we engage students in meaningful and interactive learning experiences. This ensures that our students are not only prepared for academic success but also equipped with the skills to excel in the real world.
      </p>
      <p className='About-container-paragraph'>
      The school has a well developed infra, including smart classrooms, well-equipped science laboratories, Atal Tinkering Lab, a comprehensive library and many more—all designed to support an enriching learning experience. In addition to academic excellence, we encourage participation in a wide variety of extracurricular activities that develop leadership, creativity, and teamwork.
      </p>
      <p  className='About-container-paragraph'>
      At Mount Litera Zee School, Bihta, we do more than teach—we inspire and mentor. Our dedication to each child’s growth is at the heart of everything we do, and we remain steadfast in our mission to shape the leaders and innovators of tomorrow.
      </p>
      </div>
    </>
  );
}

export default AboutUs;

