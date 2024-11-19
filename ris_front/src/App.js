import './App.css';
import React from 'react';
import CCTV from './CCTV';
import Accum from './Accum';

class App extends React.Component {
  state = {
    cameras: [
      { id: 1, message: "No data" },
      { id: 2, message: "No data" },
      { id: 3, message: "No data" },
      { id: 4, message: "No data" },
      { id: 5, message: "No data" },
      { id: 6, message: "No data" },
    ],
    images: [
      { id: 1, src: "https://via.placeholder.com/150", description: "Image 1" },
      { id: 2, src: "https://via.placeholder.com/150", description: "Image 2" },
      { id: 3, src: "https://via.placeholder.com/150", description: "Image 3" },
      { id: 4, src: "https://via.placeholder.com/150", description: "Image 3" }
    ],
  };


  render() {
    const { cameras , images } = this.state;
    return (
      <div>
        <div className="Title">
          [DipLab] 종합 관제 센터<br />
          재난 안전 상황실 모니터
        </div>
        
        <div className="GridContainer">
          
          <div className="GridBox video">
            <h4>Video Feed</h4>    
          </div>

          <div className="GridBox target">
            {/* img 넣기 */ }
            <h4>Target Information</h4>
            <p>Target ID: 12345</p>
            <p>Status: Tracking Active</p>
          </div>

        </div>

        <CCTV cameras={cameras} />
        <Accum images={images} />
      </div>
    );
  }
}

export default App;
