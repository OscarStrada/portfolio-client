import React from 'react';
// import { gsap } from 'gsap';

export const Loader = () => {
  // let box = useRef();
  // let boxTwo = useRef();
  // let boxThree = useRef();

  // console.log(box.current, boxTwo.current, boxThree.current);

  // useEffect(() => {
  //   gsap.to(box.current, {
  //     duration: 1.5,
  //     delay: 0.5,
  //     height: 0,
  //     ease: 'expo.inOut',
  //   });

  //   gsap.to(boxTwo.current, {
  //     duration: 1.5,
  //     delay: 0.7,
  //     height: 0,
  //     ease: 'expo.inOut',
  //   });

  //   gsap.to(boxThree.current, {
  //     duration: 1.5,
  //     delay: 0.9,
  //     height: 0,
  //     ease: 'expo.inOut',
  //   });
  // }, []);

  return (
    <div className="container">
      <div className="box"></div>
      <div className="box two"></div>
      <div className="box three"></div>
    </div>
  );
};
