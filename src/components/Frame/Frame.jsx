import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Frame = ({
  className,
  frame = "https://generation-sessions.s3.amazonaws.com/3ac815ab615013592205d4b8886c8269/img/frame-20-3.svg",
  frameClassName,
}) => {
  return (
    <div className={`frame ${className}`}>
      <div className="div-2">
        <div className="div-3">
          <img
            className="lolla"
            alt="Lolla"
            src="https://generation-sessions.s3.amazonaws.com/3ac815ab615013592205d4b8886c8269/img/lolla-1-3@2x.png"
          />
          <div className="div-4">
            <div className="div-4">
              <div className="lolla-smith">Lolla Smith</div>
              <div className="microsoft">Microsoft</div>
            </div>
            <img className={`img ${frameClassName}`} alt="Frame" src={frame} />
          </div>
        </div>
        <p className="p">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make
        </p>
      </div>
    </div>
  );
};

Frame.propTypes = {
  frame: PropTypes.string,
};
