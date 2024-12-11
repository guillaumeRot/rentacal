"use client";

import dynamic from "next/dynamic";
import { Component } from "react";
import { Section } from "./Section";
// import ReactPlayer from "react-player";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

class VideoPresentation extends Component {
  render() {
    return (
      <Section className="player-wrapper mt-10 rounded-3xl	">
        <ReactPlayer
          className="react-player fixed-bottom mx-auto rounded-3xl overflow-hidden	"
          url="/rentacal_presentation.mp4"
          width="90%"
          height="90%"
          controls={true}
        />
      </Section>
    );
  }
}

export default VideoPresentation;
