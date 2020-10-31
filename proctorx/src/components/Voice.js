import React, { useState } from 'react';
import SpeechRecognition, {
  useSpeechRecognition
} from 'react-speech-recognition';
import MicIcon from '@material-ui/icons/Mic';
import MicOffIcon from '@material-ui/icons/MicOff';

const Voice = () => {
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [isListening, setIsListening] = useState(false);

  return (
    <div>
      {isListening ? (
        <MicIcon
          fontSize="large"
          onClick={() => {
            setIsListening(false);
            SpeechRecognition.stopListening();
          }}
        />
      ) : (
        <MicOffIcon
          fontSize="large"
          onClick={() => {
            setIsListening(true);
            SpeechRecognition.startListening();
          }}
        />
      )}
      <p>{transcript}</p>
    </div>
  );
};

export default Voice;
