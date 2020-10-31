import React, { useState, useEffect, useRef } from 'react';
import * as tf from '@tensorflow/tfjs';

const Camera = () => {
  const [proctorAi, setProctorAi] = useState(null);
  const [stream, setStream] = useState(null);
  const videoElement = useRef(null);

  useEffect(() => {
    async function loadCam() {
      try {
        const cameraStream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: 'user'
          },
          audio: false
        });

        const model = await tf.loadGraphModel('/models/model.json');
        await setProctorAi(model);
        await setStream(cameraStream);
        videoElement.current.src = cameraStream;
      } catch (err) {
        console.log(err);
      }
    }

    loadCam();
  }, []);

  return (
    <div>
      <video
        className="position"
        autoPlay
        playsInline
        muted
        ref={videoElement}
        width="600"
        height="500"
      />
    </div>
  );
};

export default Camera;
