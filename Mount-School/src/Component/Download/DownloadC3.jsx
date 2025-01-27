import "../../Styles/Download-CSS/DownloadC3.css";
import useScrollToSection from "../Hook/CustomHook";
import image1 from '../../image/Marks.png';
import image2 from '../../image/Gro.png';
import image3 from '../../image/tttt.png';
import image4 from '../../image/Calender.png';

const DocumentSection = () => {

  useScrollToSection();

    const sections = [
      {
        id:"Sample-paper-section",
        title: "Sample Paper X",
        description:
          "The CBSE Board has released Sample Paper X to help students understand the exam pattern and marking scheme. We encourage all students to download and practice this paper for better preparation.",
        image: image1, // Replace with the actual path
        buttonText: "Download PDF",
        pdf: "/pdfs/CBSE_Holidays.pdf",
      },
      {
        id:"CBSE-Paper-section",
        title: "CBSE Circular",
        description:
          "Stay updated with the latest notifications, guidelines, and announcements from the CBSE Board. This circular contains crucial information regarding academic schedules, examination patterns, and other key updates for the academic year.",
        image:image2, // Replace with the actual path
        buttonText: "Download PDF",
        pdf: "/pdfs/CBSE_Holidays.pdf",
      },
      {
        id:"Book-list-section",
        title: "Book List",
        description:
          "Ensure you have all the recommended textbooks and reference materials for the upcoming academic session. This comprehensive list is curated as per the CBSE curriculum and includes all the required books for every grade and subject. ",
        image: image3, // Replace with the actual path
        buttonText: "Download PDF",
        pdf: "/pdfs/CBSE_Holidays.pdf",
      },
      {
        id:"Holiday-section",
        title: "Holiday List",
        description:
          "Plan your year ahead with the comprehensive holiday calendar! The list includes all scheduled holidays, vacations, and special observances for the academic session, ensuring you stay informed and prepared.",
        image:image4, // Replace with the actual path
        buttonText: "Download PDF",
        pdf: "/pdfs/CBSE_Holidays.pdf",
      },
    ];

   


   function SectionCard({ id, title, description, image, buttonText, reverse }) {
    return (
      <div id={id} className={`Downloads-section-card ${reverse ? "Downloads-reverse" : ""}`}>
        <div className="Downloads-text-content">
          <h2>{title}</h2>
          <p>{description}</p>
          <a href='' download>
          <button className="Downloads-download-btn">{buttonText}</button>
        </a>
        </div>
       <section  className="Downloads-IMAGE-SECTION-Contains">
       <img src={image} alt={title} className="Downloads-section-image" />
       <div  className="Downloads-corner-border"></div>
       </section>
      </div>
    );
  }

  return (
    <div className="Downloads-app-container">
    {sections.map((sec, index) => (
      <SectionCard
        key={index}
        id={sec.id}
        title={sec.title}
        description={sec.description}
        image={sec.image}
        buttonText={sec.buttonText}
        reverse={index % 2 === 1} // Alternate layout
      />
    ))}
  </div>
  );
};

export default DocumentSection;