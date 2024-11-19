import React from "react";
import "./CCTV.css";

const CCTV = ({ cameras }) => {
  return (
    <div className="cctv-container">
      {cameras.map((camera) => (
        <div key={camera.id} 
        className={`cctv-box ${camera.id === 2 ? "special" : ""}`}>
            <div className="cctv_id">
                Cam {camera.id}
            </div>
        </div>
      ))}
    </div>
  );
};

export default CCTV;
