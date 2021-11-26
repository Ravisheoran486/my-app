import React from "react";
import { useEffect, useRef } from "react";
import WaveSurfer from "wavesurfer.js";

// var wavesurfer = WaveSurfer.create({
//   container: "#wave",
//   waveColor: "violet",
//   progressColor: "purple",
// });

// wavesurfer.on("ready", function () {
//   wavesurfer.play();
// });

// const wavesurfer = useRef(null);

// useEffect(() => {
//   WaveSurfer.create({
//     container: wavesurfer.current,
//     waveColor: "violet",
//     progressColor: "purple",
//   });
// }, []);
// // wavesurfer.current.load(url);

// wavesurfer.current.on("ready", function () {
//   // https://wavesurfer-js.org/docs/methods.html
//   wavesurfer.current.setVolume(0.5);
//   wavesurfer.current.play();
// });
// return <div ref={waveformRef} />;

function Audio({ link }) {
//   const wavesurfer = useRef(null);

//   useEffect(() => {
//     wavesurfer.current = WaveSurfer.create({
//       container: wavesurfer.current,
//       waveColor: "violet",
//       progressColor: "purple",
//     });
//     wavesurfer.current.on("ready", function () {
//         // https://wavesurfer-js.org/docs/methods.html
//         wavesurfer.current.setVolume(0.5);
//         wavesurfer.current.play();
//       });
//       console.log(link);
//       wavesurfer.current.load(link);
//     // return () => wavesurfer.current.destroy();
//   }, []);
  // wavesurfer.current.load(url);


  return (
      <div>
          <audio src={link} controls={true} />
      </div>
  )
  // return <div ref={wavesurfer}> </div>;
}

export default Audio;
