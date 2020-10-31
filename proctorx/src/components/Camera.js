import React, { useState, useEffect, useRef } from 'react';
import * as tf from '@tensorflow/tfjs';

const Camera = () => {
  const [proctorAi, setProctorAi] = useState(null);
  const [cameraStream, setCameraStream] = useState(null);
  const videoRef = useRef(null);

  useEffect(() => {
    async function enableStream() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: 'user'
          },
          audio: false
        });
        const model = await tf.loadGraphModel('/models/model.json');
        await setProctorAi(model);
        await setCameraStream(stream);
        videoRef.current.srcObject = stream;
      } catch (err) {
        console.log(err);
      }
    }

    enableStream();
  }, []);

  return (
    <div>
      <video
        className="position"
        autoPlay
        playsInline
        muted
        ref={videoRef}
        width="600"
        height="500"
      />
    </div>
  );
};

export default Camera;
