//This component loads tf js model and infrences video stream from it 
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
    const webcam = await tf.data.webcam(videoRef.current);
    
    while (true) {
      let img = await webcam.capture();
      img = img.toFloat().div(tf.scalar(255));
      //console.log(img.print());
      // img = tf.browser.fromPixels({data:img,width:224,height:224});
      img = tf.cast(img, 'float32');
      img = tf.expandDims(img);

      
      //console.log(img);
      //let arr = Float32Array.from([[[[1,2,3],[1,2,1]]]]);
      //arr = tf.tensor4d(arr, [1, 224, 224, 3], 'float32');
      // console.log(await img.array());
      // img.print();
      // console.log(model);
      //const result = await model.predict(arr);
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
