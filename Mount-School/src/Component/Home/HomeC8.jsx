import React, { useRef } from "react";
import "../../Styles/Home-CSS/HomeC8.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import imageParents1 from "../../image/Untitled design.png";
import imageParents2 from "../../image/Untitled design (1).png";
import imageParents3 from "../../image/WhatsApp Image 2025-01-18 at 17.06.11_ec006aeb.jpg";
import imageParents4 from "../../image/Untitled design (3).png";
import imageParents5 from "../../image/WhatsApp Image 2025-01-20 at 17.43.12_1ddb4dda.jpg";
import imageParents6 from "../../image/Toow2.png";
import imageParents7 from "../../image/WhatsApp Image 2025-01-20 at 17.43.11_aa2e7139.jpg";
import imageParents8 from "../../image/WhatsApp Image 2025-01-20 at 17.43.12_33ec7cb8.jpg";
import imageParents9 from "../../image/Toow.png";

const Home8 = () => {
  const cardsContainerRef = useRef(null);

  const scrollLeft = () => {
    if (cardsContainerRef.current) {
      cardsContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (cardsContainerRef.current) {
      cardsContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const cardsData = [
    {
      icon: imageParents1,
      description:
        "I’ve noticed a profound change in my child’s behaviour, becoming more considerate and socially aware. The school’s focus on empathy and teaching students to understand and respect others.",
      title: "Mr. Milind Mahipal",
      father_of: "F/O: Saumya Mahipal, Class-VIIA",
    },
    {
      icon: imageParents2,
      title: "Mr. Chandan Singh",
      description:
        "I feel so supported by Mount Litera Zee School in my role as a parent. The school maintains an open line of communication, and the parent-teacher meetings are always insightful.",
      father_of: "F/O: Prachit Singh ,Class-IA",
    },
    {
      icon: imageParents3,
      title: "Mr. Avinash Kumar",
      description:
        "As a parent, I always prioritize the safety of my child, and Mount Litera Zee School, Bihta has exceeded my expectations. The campus is secure, and the staff are attentive and caring.",
      father_of: "F/O: Harshita Kumari ,Class-IB",
    },
    {
      icon: imageParents4,
      title: "Sunil Kumar Sinha",
      description:
        "The community outreach programs at MLZS, Bihta have made a lasting impact on my child. Through volunteering, environmental initiatives, social projects, my child has learned the importance of giving back to society.",
      father_of: "F/O: Trisha Kumari ,Class-III & Tanishka Kumari ,Class-VII",
    },
    {
      icon: imageParents5,
      title: "Mr. Rajendra Kumar",
      description:
        "My three children have gained confidence in speaking in front of an audience. The school has truly helped my child become more articulate, confident, and able to express themselves clearly.",
      father_of: "F/O: Sristi ,Class-VII-A, Sakshi ,Class-VA & Surbhi ,Class-Sr.Kg",
    },
    {
      icon: imageParents6,
      title: "Mr. Sonu Kunal",
      description:
        "My child now navigates social situations with more maturity, and I’m grateful for the school’s emphasis on emotional well-being alongside academics.",
      father_of: "F/O: Sanidhya Kunal ,Class-VII-A & Shaurya Kunal ,Class-I-B",
    },
    {
      icon: imageParents7,
      title: "Mr. Shyam Jee",
      description:
        "My child loves the hands-on approach to learning, and I can see that their curiosity and love for learning have grown immensely. The school's blend of traditional methods with modern teaching strategies.",
      father_of: "F/O: Ananya, ,Class-IIIA",
    },
    {
      icon: imageParents8,
      title: "Mr. Dhiraj Singh",
      description:
        "The opportunities for my children to engage in creative activities like painting, music have been incredible. Mount Litera Zee School places a strong emphasis on nurturing creative expression.",
      father_of: "F/O: Chhavi Singh ,Class-XA & Naman Singh ,Class-IV",
    },
    {
      icon: imageParents9,
      title: "Mr. Sanmay Bharadwaj",
      description:
        "I’m thrilled with how Mount Litera Zee School focuses on well-rounded development. They provide not only rigorous academics but also foster physical fitness, artistic expression, and character building.",
      father_of: "F/O: Aarambh Bharadwaj ,Class II-A",
    },
  ];

  return (
    <div className="Home-section">
      <div className="leader-header_C3">
        <h1 className="text_About_C8">
          <span className="black-text_C8">Parent's</span>{" "}
          <span className="blue-text_C8">Testimonials</span>
        </h1>
      </div>
      <div
        className="Home-section__cards infinite-scroll"
        ref={cardsContainerRef}
      >
        {cardsData.map((card, index) => (
          <div key={index} className="Home-section__card infinite-scroll">
            <div className="Home-White-Circle">
              <img className="oldman-Img-Icon" src={card.icon} alt="H" />
            </div>
            <p className="Home-section__card-description">{card.description}</p>
            <h2 className="Home-section__card-title">{card.title}</h2>
            <p className="Home-section__card-des-father">{card.father_of}</p>
          </div>
        ))}
      </div>
      <div className="ICon-left-right">
        <div className="white-left-icon" onClick={scrollLeft}>
          <KeyboardArrowLeftIcon />
        </div>
        <div className="white-right-icon" onClick={scrollRight}>
          <ChevronRightIcon />
        </div>
      </div>
    </div>
  );
};

export default Home8;

