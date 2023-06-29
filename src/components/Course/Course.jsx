import React from "react";
import "./style.css";

export const Course = ({ className }) => {
  return (
    <div className={`course ${className}`}>
      <div className="interactive-features">Interactive Features</div>
      <p className="lorem">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
      </p>
    </div>
  );
};