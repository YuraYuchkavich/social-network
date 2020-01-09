import React, { Component } from "react";
import PropTypes from "prop-types";
import SpeechRecognition from "react-speech-recognition";

const propTypes = {
  // Props injected by SpeechRecognition
  transcript: PropTypes.string,
  resetTranscript: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool,
  startListening:PropTypes.func,
  stopListening:PropTypes.func,
  
};

const Dictaphone = ({
  transcript,
  resetTranscript,
  browserSupportsSpeechRecognition,
  startListening,
  stopListening,
  search, 
}) => {
  if (!browserSupportsSpeechRecognition) {
    return null;
  }
  search(transcript);
  return (
    <div>
      <button onMouseDown = {startListening} onMouseUp = {stopListening}>Reset</button>
    </div>
  );
};

Dictaphone.propTypes = propTypes;

let options = {
  autoStart:false
}
export default SpeechRecognition(options)(Dictaphone);