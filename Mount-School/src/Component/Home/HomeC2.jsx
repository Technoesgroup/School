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
    <div className="About-container" ref={containerRef}>
      <div className="leader-header_About">
        <h1>
          <span className="black-text_About">WELCOME TO</span> 
          <span className="blue-text_About"> MOUNT LITERA ZEE SCHOOL </span>
        </h1>
      </div>
      <p className='About-container-paragraph'>
      Mount litera Zee School, Bihta was established in 2016, part of the leading education organization 
      in India-Zee Learn Ltd. [Education Arm of Essel Group]. Mount Litera Zee School provides promising 
      education to the future generation allowing them to travel around their true unique potential. 
      Mount litera zee School Bihta is currently the best school for kids in Bihta as we try and create an
       educational institution which synthesizes human values with the highest quality of teaching- learning
        using the modern technology-driven tools for preparing a well- groomed all-round personality for our 
        society.
      </p>

      <div className="stats-container">
        <div className="stat">
          <div className="stat-value">{stats.skilledStaff}+</div>
          <div className="stat-title">Highly Skilled Staff</div>
          <div className="stat-description">
            Dedicated professionals creating a nurturing learning environment.
          </div>
        </div>
        <div className="stat">
          <div className="stat-value">{stats.teacherStudentRatio}:1</div>
          <div className="stat-title">Student Teacher Ratio</div>
          <div className="stat-description">
            Ensuring Every Child Thrives with Focused Guidance and Support.
          </div>
        </div>
        <div className="stat">
          <div className="stat-value">{stats.alumniCount.toLocaleString()}</div>
          <div className="stat-title">Alumni Across Globe</div>
          <div className="stat-description">
            A Global Network of Successful Alumni Inspiring Future Generations
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default AboutUs;

