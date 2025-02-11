import React, { useEffect, useRef } from "react";
import "../../Styles/Facillities-CSS/LabPage.css";
import Header from "./Header";
import image1 from '../../image/ATL.jpg';
import image2 from '../../image/Chemlab.jpg';
import image3 from '../../image/Biolab.jpg';
import image4 from '../../image/MathLab.jpg';
import image5 from '../../image/ComputerLab.jpg';
import image6 from '../../image/Dance.jpg';
import image7 from '../../image/Library.jpg';
import image8 from '../../image/Rectangle 23816.png';
import image9 from '../../image/Sports.jpg';   
import image10 from '../../image/ART.svg';  
import image11 from '../../image/SmartClass.jpg';   
import image12 from '../../image/MusicLAB.jpg';  


const sections= [
  {
    title: "Physics Laboratory",
    description: "Our Physics Laboratory is fully equipped with cutting-edge apparatus and instruments, allowing students to explore the fundamental laws of nature. With every experiment conducted, we ignite curiosity and foster a deep understanding of the physical world, ensuring that our students become not only learners but innovators in the realm of science.",
    image: image1, // Replace with actual image paths
  },
  {
    title: "Chemistry Laboratory",
    description: "In our Chemistry Laboratory, students experiment with chemicals, reactions, and compounds, bringing the abstract world of chemistry to life. The lab is outfitted with the finest reagents, glassware, and safety equipment, enabling students to delve into chemical processes with both precision and safety, shaping the scientists of tomorrow.",
    image: image2,
  },
  {
    title: "Biology Laboratory",
    description: "The Biology Laboratory at MLZS Bihta is an immersive space for the exploration of life in all its complexity. With top-tier microscopes, specimens, and models, students can observe the intricate details of cells, organs, and ecosystems, fueling a passion for biological sciences. Our lab is designed to provide a hands-on, in-depth understanding of the life sciences.",
    image: image3,
  },
  {
    title: "Mathmatics Laboratory",
    description: "The Biology Laboratory at MLZS Bihta is an immersive space for the exploration of life in all its complexity. With top-tier microscopes, specimens, and models, students can observe the intricate details of cells, organs, and ecosystems, fueling a passion for biological sciences. Our lab is designed to provide a hands-on, in-depth understanding of the life sciences.",
    image:image4,
  }, 
  
  {
    title: "Computer Laboratory",
    description: "The Biology Laboratory at MLZS Bihta is an immersive space for the exploration of life in all its complexity. With top-tier microscopes, specimens, and models, students can observe the intricate details of cells, organs, and ecosystems, fueling a passion for biological sciences. Our lab is designed to provide a hands-on, in-depth understanding of the life sciences.",
    image: image5,
  },

   {
    title: "Dance Studio",
    description: "The Biology Laboratory at MLZS Bihta is an immersive space for the exploration of life in all its complexity. With top-tier microscopes, specimens, and models, students can observe the intricate details of cells, organs, and ecosystems, fueling a passion for biological sciences. Our lab is designed to provide a hands-on, in-depth understanding of the life sciences.",
    image: image6,
  }, 

   {
    title: "Library",
    description: "The Biology Laboratory at MLZS Bihta is an immersive space for the exploration of life in all its complexity. With top-tier microscopes, specimens, and models, students can observe the intricate details of cells, organs, and ecosystems, fueling a passion for biological sciences. Our lab is designed to provide a hands-on, in-depth understanding of the life sciences.",
    image: image7,
  },
  {
    title: 'Clubs',
    description: "The Biology Laboratory at MLZS Bihta is an immersive space for the exploration of life in all its complexity. With top-tier microscopes, specimens, and models, students can observe the intricate details of cells, organs, and ecosystems, fueling a passion for biological sciences. Our lab is designed to provide a hands-on, in-depth understanding of the life sciences.",
    image: image8,
  },
  {
    title: "Sports and Open Gym",
    description: "The Biology Laboratory at MLZS Bihta is an immersive space for the exploration of life in all its complexity. With top-tier microscopes, specimens, and models, students can observe the intricate details of cells, organs, and ecosystems, fueling a passion for biological sciences. Our lab is designed to provide a hands-on, in-depth understanding of the life sciences.",
    image: image9,
  },

  {
    title: 'Art and Craft Room',
    description: "The Biology Laboratory at MLZS Bihta is an immersive space for the exploration of life in all its complexity. With top-tier microscopes, specimens, and models, students can observe the intricate details of cells, organs, and ecosystems, fueling a passion for biological sciences. Our lab is designed to provide a hands-on, in-depth understanding of the life sciences.",
    image: image10,
  },
  {
    title: "Small Classrooms",
    description: "The Biology Laboratory at MLZS Bihta is an immersive space for the exploration of life in all its complexity. With top-tier microscopes, specimens, and models, students can observe the intricate details of cells, organs, and ecosystems, fueling a passion for biological sciences. Our lab is designed to provide a hands-on, in-depth understanding of the life sciences.",
    image: image11,
  },
  {
    title: "Music Room",
    description: "The Biology Laboratory at MLZS Bihta is an immersive space for the exploration of life in all its complexity. With top-tier microscopes, specimens, and models, students can observe the intricate details of cells, organs, and ecosystems, fueling a passion for biological sciences. Our lab is designed to provide a hands-on, in-depth understanding of the life sciences.",
    image: image12,
  },
];

function LabsPage() {
  const labRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("Facilities-show");
          }
        });
      },
      { threshold: 0.2 } // Adjust threshold as needed
    );

    labRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      labRefs.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  function SectionCard({ title, description, image }) {
    return (
      <div className="LabPage-section-card">
        <div className="LabPage-text-content">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
       <section  className="CBSE-IMAGE-SECTION-Contains">
       <img src={image} alt={title} className="LabPage-section-image" />
       </section>
      </div>
    );
  }
  
  return (
    <div className="LabPage-app-container">
      {sections.map((sec, index) => (
        <SectionCard
          key={index}
          id={sec.id}
          title={sec.title}
          description={sec.description}
          image={sec.image}
          buttonText={sec.buttonText}
        />
      ))}
    </div>
  );
}
export default LabsPage;
