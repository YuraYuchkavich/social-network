import React, { Component } from "react";
import PropTypes from "prop-types";
import SpeechRecognition from "react-speech-recognition";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './search.css';

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
  
 let callApi = () =>{
   stopListening();
   search(transcript)
 }
  return (
    <div>
      <button className="btn btn-secondary Speech" onMouseDown = {startListening} onMouseUp = {() =>callApi()}><FontAwesomeIcon icon={faMicrophone} /></button>
    </div>
  );
};

Dictaphone.propTypes = propTypes;

let options = {
  autoStart:false
}
export default SpeechRecognition(options)(Dictaphone);