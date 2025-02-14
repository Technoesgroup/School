import "../../Styles/Download-CSS/DownloadC3.css";
import useScrollToSection from "../Hook/CustomHook";
import image1 from '../../image/Marks.png';
import image2 from '../../image/Gro.png';
import image3 from '../../image/tttt.png';

const DocumentSection = () => {

  useScrollToSection();

  const sections = [
    {
      id:"Sample-paper-section",
      title: "Sample Paper X/XII",
      description: "The CBSE Board has released Sample Paper X/XII...",
      image: image1,
      buttonText: "Click here",
      link: "https://cbseacademic.nic.in/sqp_classx_2024-25.html",
    },
    {
      id:"CBSE-Paper-section",
      title: "CBSE Circular",
      description: "Stay updated with the latest notifications...",
      image:image2,
      buttonText: "Click here",
      link: "https://cbseacademic.nic.in/circulars.html",
    },
    {
      id:"Book-list-section",
      title: "Book List",
      description: "Ensure you have all the recommended textbooks...",
      image: image3,
      buttonText: "Download",
      link: "/PDF/MLZS_Litera Gear Composition_G1 to G10_AY 2024-25-Revised_21_03_24.pdf", // ✅ Rename karke simple path rakho
    },
  ];
  
  function SectionCard({ id, title, description, image, buttonText, reverse, link }) {
    return (
      <div id={id} className={`Downloads-section-card ${reverse ? "Downloads-reverse" : ""}`}>
        <div className="Downloads-text-content">
          <h2>{title}</h2>
          <p>{description}</p>
  
          {id === "Book-list-section" ? (
            <button className="Downloads-download-btn" onClick={() => {
              const linkElement = document.createElement("a");
              linkElement.href = link;
              linkElement.download = "MLZS_Litera Gear Composition_G1 to G10_AY 2024-25-Revised_21_03_24.pdf"; // ✅ Rename karke simple naam rakho
              document.body.appendChild(linkElement);
              linkElement.click();
              document.body.removeChild(linkElement);
            }}>
              {buttonText}
            </button>
          ) : (
            <button className="Downloads-download-btn" onClick={() => window.open(link, "_blank")}>
              {buttonText}
            </button>
          )}
        </div>
  
        <section className="Downloads-IMAGE-SECTION-Contains">
          <img src={image} alt={title} className="Downloads-section-image" />
          <div className="Downloads-corner-border"></div>
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
    link={sec.link} 
  />
))}

  </div>
  );
};

export default DocumentSection;