import React, { useState, useEffect } from 'react';
import SpeechRecognition, {
  useSpeechRecognition
} from 'react-speech-recognition';
import MicIcon from '@material-ui/icons/Mic';
import MicOffIcon from '@material-ui/icons/MicOff';

const Voice = ({ violations, logSpeechViolations }) => {
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    if (transcript.length > 10) {
      logSpeechViolations([
        ...violations,
        'Violation : Speaking not allowed during exam'
      ]);
    }
  }, [transcript]);

  return (
    <div>
      {isListening ? (
        <MicIcon
          fontSize="large"
          onClick={() => {
            setIsListening(false);
            SpeechRecognition.stopListening();
            resetTranscript();
          }}
        />
      ) : (
        <MicOffIcon
          fontSize="large"
          onClick={() => {
            setIsListening(true);
            SpeechRecognition.startListening({ continuous: true });
          }}
        />
      )}
      {/* <p>{transcript}</p> */}
    </div>
  );
};

export default Voice;
