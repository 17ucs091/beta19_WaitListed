import React, { useState, useEffect, useRef } from 'react';
import * as tf from '@tensorflow/tfjs';

let model;

const Camera = () => {
  // const [proctorAi, setProctorAi] = useState(null);
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
        model = await tf.loadGraphModel('/models/model.json');
        // console.log(model);
        // setProctorAi(model);
        setCameraStream(stream);
        videoRef.current.srcObject = stream;

        predictFrame();
      } catch (err) {
        console.log(err);
      }
    }

    enableStream();
  }, []);

  const predictFrame = async () => {
    const webcam = await tf.data.webcam(null, {
      resizeWidth: 224,
      resizeHeight: 224
    });
    while (true) {
      let img = await webcam.capture();
      img = tf.cast(img, 'DT_FLOAT');
      img = tf.expandDims(img);

      // img = await img.array();
      // console.log(img);
      // img = tf.tensor4d(img, [1, 224, 224, 3], 'float32');
      // console.log(await img.array());
      // img.print();
      // console.log(model);
      const result = await model.predict(img);
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
