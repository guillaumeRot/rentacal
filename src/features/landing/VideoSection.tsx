"use client";

import { Component } from "react";

class VideoSection extends Component {
  render() {
    return (
      <div>
        <div className="custom-screen pt-20">
          <div className="h-fit flex items-center justify-center">
            <video
              autoPlay
              loop
              muted
              className="relative object-cover w-full max-w-[80vw] max-h-[80vh] aspect-video"
              style={{
                objectFit: "cover",
              }}
              controls
            >
              <source src="/rentacal_presentation.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoSection;
