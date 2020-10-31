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
        console.log(model);
        await setProctorAi(model);
        await setCameraStream(stream);
        videoRef.current.srcObject = stream;

        predictFrame();
      } catch (err) {
        console.log(err);
      }
    }

    enableStream();
  }, []);

  const predictFrame = async () => {
    const webcam = await tf.data.webcam(null,{resizeWidth:224,resizeHeight:224});
    while(true){
      const img = await webcam.capture();
      const result = await proctorAi.classify(img);
      console.log(result);
      img.dispose();
      await tf.nextFrame();
    }
  };

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
