"use client";

import dynamic from "next/dynamic";
import { Component } from "react";
// import ReactPlayer from "react-player";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

class VideoPresentation extends Component {
  render() {
    return (
      <div className="player-wrapper mt-20">
        <ReactPlayer
          className="react-player fixed-bottom mx-auto"
          url="/rentacal_presentation.mp4"
          width="80%"
          height="80%"
          controls={true}
        />
      </div>
    );
  }
}

export default VideoPresentation;
