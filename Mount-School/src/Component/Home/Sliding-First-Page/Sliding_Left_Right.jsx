import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "../../../Styles/Home-CSS/Sliding-Page-CSS/Sliding_Left_Right.css";

const CustomPrevArrow = ({ onClick }) => {
  return (
    <div onClick={onClick} className="custom-prev-arrow">
      <ArrowBackIosIcon className="arrow-icon" />
    </div>
  );
};

const CustomNextArrow = ({ onClick }) => {
  return (
    <div onClick={onClick} className="custom-next-arrow">
      <ArrowForwardIosIcon className="arrow-icon" />
    </div>
  );
};

export { CustomNextArrow, CustomPrevArrow };
