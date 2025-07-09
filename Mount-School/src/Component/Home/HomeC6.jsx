import React from "react";
import "../../Styles/Home-CSS/HomeC6.css"; // Add custom styles here
import leaderImg from '../../image/Rectangle 23856.png';
// import quotsImg from '../../image/left-quote 1 (Traced).png';


const MessageComponent = () => {
  return (
    <div className="HomeC6-leader-message-container">
    <h2 className="HomeC6-title">MESSAGE  FROM  OUR  LEADER</h2>
    <div className="HomeC6-content">
      <img
        loading="lazy"
        src={leaderImg} // Replace with the actual image path
        alt="Leader"
        className="HomeC6-leader-image"
      />
      <div className="HomeC6-text-section">
        <h4 className="HomeC6-italicContent">
          "If our school is the canvas, then our parents are the brushstrokes;
          together, we shall paint the masterpiece of our children's future."
        </h4>
        <p>
        Education is not merely about creating scholars, but about nurturing compassionate, responsible,
         and thoughtful individuals. At Mount Litera Zee School, Bihta, we are dedicated to
         provide a nurturing environment where children grow not only academically but also personally and socially.
        </p>
        <p>
        Our teachers, highly qualified and driven by a passion for imparting knowledge, 
        strive to bring out the best in every student. With a blend of traditional and modern teaching practices, we 
        ensure that our students gain a well-rounded education that prepares them for the complexities of the world.
        </p>
        <p>
        We hold that the involvement of parents in their child’s educational journey is 
        of utmost importance. Parents are, indeed, the first GURU in every child’s life. 
        For this reason, we foster a relationship based on mutual respect and open communication, 
        ensuring that parents, teachers, and the administration work hand in hand for the betterment of each student.
        </p>
        <p>
      At Mount Litera Zee School, Bihta, we take great pride in cultivating a 
      culture of learning where students are encouraged to explore their interests in a variety of fields 
      while also developing strong character. Values such as integrity, perseverance, civic consciousness, 
      and the ability to delay gratification are at the core of our teaching. Through extracurricular activities, 
      a focus on 
      communication skills, and initiatives to foster cultural understanding, we ensure our students grow into well-rounded, responsible citizens.
      </p>
      <p>
      Mount Litera Zee School, Bihta is more than just a school — it is a place where students are inspired to take 
      on challenges that stretch their limits. We do so with unshakable confidence in the abilities of both
       our teachers and students. The management and staff are wholeheartedly committed to ensuring that every 
       student's educational experience is both exciting and transformative.
      </p>
        <h3 className="HomeC6-leader-name">Mr. Navin Kumar</h3>
        <h3 className="HomeC6-leader-position">Chairman</h3>
        <h3 className="HomeC6-school-name">Mount Litera Zee School, Bihta</h3>
      </div>
    </div>
  
  </div>
  );
};

export default MessageComponent;