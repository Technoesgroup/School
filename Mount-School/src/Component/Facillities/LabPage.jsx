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
    description: "Our Mathematics Laboratory transforms abstract concepts into tangible realities. Through interactive models and digital tools, students engage directly with mathematical principles, deepening their understanding and sparking new insights. This facility ensures that mathematical exploration is not confined to theory but is experienced firsthand, making the subject both accessible and exciting.",
    image:image4,
  }, 
  
  {
    title: "Computer Laboratory",
    description: "Equipped with the latest technology and software, our Computer Laboratory serves as a hub for digital learning with the collection of 50+ advanced systems. From coding to graphic design, from data analysis to digital research, students have the tools they need to excel in the digital age. This facility is the foundation of our commitment to preparing students for a tech-driven future.",
    image: image5,
  },

   {
    title: "Dance Studio",
    description: "Our Dance Studio is a dedicated space where movement and expression come alive. With professional-grade flooring, mirrors, and ample space, students are free to explore various dance forms, building both discipline and creativity. This facility allows students to express themselves artistically while nurturing physical fitness and coordination.",
    image: image6,
  }, 

   {
    title: "Library",
    description: "The Library at Mount Litera Zee School Bihta is nothing short of a treasure trove of knowledge with a collection of 5000+ books of all aspects. A serene and inspiring space, it is stocked with a vast collection of books, journals, and resources across all subjects. Here, students find not only academic texts but a world of literature that nurtures their imagination and broadens their horizons. It is a sanctuary for learning and intellectual growth.",
    image: image7,
  },
  {
    title: 'Clubs',
    description: "We take immense pride in our diverse range of Clubs, each dedicated to fostering particular talents and passions. Whether in Science, Literary, Art & Craft, Drama, Cuisine & Sports, our clubs provide students with the opportunity to engage deeply with their interests, develop leadership skills, and collaborate with peers in creative endeavours. These clubs are an extension of the classroom, where practical learning and personal growth flourish.",
    image: image8,
  },
  {
    title: "Sports and Open Gym",
    description: "Physical wellness is integral to our philosophy, and our Open Gym and sports facilities are second to none. Students can engage in a variety of outdoor sports—football, basketball, cricket—while our gymnasium provides the perfect environment for fitness training. Our sprawling fields and well-maintained courts ensure that every student has ample opportunity to stay active, build teamwork, and develop discipline.",
    image: image9,
  },

  {
    title: 'Art and Craft Room',
    description: "The Art and Craft Room is a space where creativity flows freely. With a wide array of materials, from paints and brushes to clay and sculpture tools, students are encouraged to explore their artistic talents. This room is more than just a place for art; it is a sanctuary for self-expression, fostering an appreciation for aesthetics and encouraging the cultivation of fine motor skills.",
    image: image10,
  },
  {
    title: "Small Classrooms",
    description: "Our Smart Classrooms are equipped with the latest in interactive technology, transforming the way education is delivered. With projectors, interactive whiteboards, and digital tools, every lesson becomes an engaging experience. Technology integrates seamlessly with traditional teaching, making learning dynamic, engaging, and highly effective.",
    image: image11,
  },
  {
    title: "Music Room",
    description: "The Music Room is a dedicated space for cultivating the musical talents of our students. Equipped with a variety of instruments, from keyboards and guitars to percussion and stringed instruments, it provides the ideal environment for students to explore and master the art of music. It is here that students can not only hone their musical skills but also develop discipline, creativity, and emotional expression through sound.",
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
      <Header />
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
