import React from "react";
import "./Accum.css";

const Accum = ({ images }) => {
  return (
    <div className="accum-container">
      <h3>Accumulated Images</h3>
      <div className="image-box-container">
        {images.map((image) => (
          <div key={image.id} className="image-box">
            <img src={image.src} alt={`Image ${image.id}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accum;
