import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollToSection = (offset = 210) => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", ""); // Remove the # from hash
      const element = document.getElementById(id); // Find the element by ID
      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  }, [location, offset]);
};

export default useScrollToSection;