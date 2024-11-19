import React from "react";
import "./CCTV.css";

const CCTV = ({ cameras }) => {
  return (
    <div className="cctv-container">
      {cameras.map((camera) => (
        <div 
          key={camera.id} 
          className={`cctv-box ${camera.id === 2 ? "special" : ""}`}
        >
          <div className="cctv_id">Cam {camera.id}</div>
          <p>{camera.message}</p>
          
          {/*<video width="100%" height="auto" autoPlay muted loop controls> */}
          <video width="100%" height="auto" controls muted>
          
            <source src={camera.videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ))}
    </div>
  );
};

export default CCTV;



// import React from "react";
// import "./CCTV.css";

// const CCTV = ({ cameras }) => {
//   return (
//     <div className="cctv-container">
//       {cameras.map((camera) => (
//         <div key={camera.id} 
//         className={`cctv-box ${camera.id === 2 ? "special" : ""}`}>
//             <div className="cctv_id">
//                 Cam {camera.id}
//             </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CCTV;

