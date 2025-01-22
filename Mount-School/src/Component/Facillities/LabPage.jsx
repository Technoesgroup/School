import React from "react";
import "../../Styles/Facillities-CSS/LabPage.css";
import Header from "./Header";
import image1 from '../../image/Rectangle 23973.png';
import image2 from '../../image/Rectangle 23974.png';
import image3 from '../../image/Rectangle 23975.png';
import image4 from '../../image/Rectangle 23976.png';
import image5 from '../../image/Rectangle 23977.png';
import image6 from '../../image/Rectangle 23978.png';
import image7 from '../../image/Rectangle 239781.png';
import image8 from '../../image/Rectangle 23816.png';
import image9 from '../../image/Rectangle 239782.png';   
import image10 from '../../image/Rectangle 239783.png';  
import image11 from '../../image/fixed-height sec-.png';   
import image12 from '../../image/Rectangle 239784.png';  


const labs = [
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
    return (
        <div className="labs-page">
          <Header />
          <div className="labs-container">
            {labs.map((lab, index) => (
              <div
                key={index}
                className={`lab-card ${index % 2 === 1 ? "lab-card-right" : ""}`}
              >
                <img src={lab.image} alt={`${lab.title} Image`} />
                <div>
                  <h2>{lab.title}</h2>
                  <p>{lab.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
}

export default LabsPage;
