import './App.css';
import React from 'react';
import CCTV from './CCTV';
import Accum from './Accum';

class App extends React.Component {
  state = {
    cameras: [
      { id: 1, videoSrc: "videos/cam4_cut.mp4" },
      { id: 2, videoSrc: "videos/cam4_cut.mp4"},
      { id: 3, videoSrc: "/videos/cam4_cut.mp4"},
      { id: 4, videoSrc: "/videos/cam6_cut.mp4"},
      { id: 5, videoSrc: "/videos/cam6_cut.mp4"},
      { id: 6, videoSrc: "/videos/cam6_cut.mp4"},
    ],
    images: [
      { id: 1, src: "https://via.placeholder.com/150", description: "Image 1" },
      { id: 2, src: "https://via.placeholder.com/150", description: "Image 2" },
      { id: 3, src: "https://via.placeholder.com/150", description: "Image 3" },
      { id: 4, src: "https://via.placeholder.com/150", description: "Image 3" }
    ],
    playing: false
  };

  handlePlayPause = () => {
    const videos = document.querySelectorAll("video"); // 모든 <video> 태그 선택
    if (this.state.playing) {
      videos.forEach((video) => video.pause()); // 모든 동영상 정지
    } else {
      videos.forEach((video) => video.play()); // 모든 동영상 재생
    }
    this.setState((prevState) => ({ playing: !prevState.playing })); // 상태 토글
  };

  render() {
    const { cameras , images, playing } = this.state;
    return (
      <div>
        <div className="Title">
          [DipLab] 종합 관제 센터<br />
          재난 안전 상황실 모니터
          <button className="play-pause-button" onClick={this.handlePlayPause}>
            {playing ? "Pause All" : "Play All"}
          </button>
        </div>
        
        <div className="GridContainer">
          
          <div className="GridBox video">
            <h4>Video Feed</h4>    
          </div>

          <div className="GridBox target">
            {/*
            <img 
              src="ID9.jpg" 
              alt="Target" 
              className="target-image" 
            />
            */}
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
