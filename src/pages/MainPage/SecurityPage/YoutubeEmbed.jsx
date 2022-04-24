import React from "react";
import PropTypes from "prop-types";


const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <iframe 
     className="iframe-video-res"
      width="500"
      height="445"
      src={'https://www.youtube.com/embed/tgbNymZ7vqY'}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen={true}
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string
};

export default YoutubeEmbed;
