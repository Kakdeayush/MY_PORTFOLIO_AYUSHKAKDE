import React from 'react';
import './Background.css';
import paperBg from '../assets/crumpled-paper-bg.png';

// import your images
import circleImg from '../assets/luffy.png';
import crossImg from '../assets/computer.png';
import starImg from '../assets/birds.png';
import zigzagImg from '../assets/robot1.png';
import arrowImg from '../assets/semiconductor1.png';

import laptopImg from '../assets/certificate.png';
import cloudImg from '../assets/cloud.png';
import aiImg from '../assets/boy.png';
import dbImg from '../assets/mouse.png';


const Background = () => {
  return (
    <div className="background-container" style={{ backgroundImage: `url(${paperBg})` }}>
      
      <div className="paper-grid"></div>

      {/* Replace doodles with images */}
      <div className="doodle doodle-circle">
        <img src={circleImg} alt="" />
      </div>

      <div className="doodle doodle-circle-2">
        <img src={circleImg} alt="" />
      </div>

      <div className="doodle doodle-cross">
        <img src={crossImg} alt="" />
      </div>

      <div className="doodle doodle-cross-2">
        <img src={crossImg} alt="" />
      </div>

      <div className="doodle doodle-star">
        <img src={starImg} alt="" />
      </div>

      <div className="doodle doodle-star-2">
        <img src={starImg} alt="" />
      </div>

      <div className="doodle doodle-zigzag">
        <img src={zigzagImg} alt="" />
      </div>

      <div className="doodle doodle-arrow">
        <img src={arrowImg} alt="" />
      </div>
<div className="doodle doodle-extra-1">
  <img src={laptopImg} alt="" />
</div>

<div className="doodle doodle-extra-2">
  <img src={cloudImg} alt="" />
</div>

<div className="doodle doodle-extra-3">
  <img src={aiImg} alt="" />
</div>

<div className="doodle doodle-extra-4">
  <img src={dbImg} alt="" />
</div>
      <div className="paper-overlay"></div>
    </div>
  );
};

export default Background;