import React from 'react';
import './Background.css';
import paperBg from '../assets/crumpled-paper-bg.png';

import mouseImg from '../assets/doodle-imgs/mouse.png';
import spidermanImg from '../assets/doodle-imgs/spiderman.png';
import computerImg from '../assets/doodle-imgs/computer.png';
import courageImg from '../assets/doodle-imgs/courage-dog.png';
import semiconductorImg from '../assets/doodle-imgs/semiconductor1.png';

import certificateImg from '../assets/doodle-imgs/certificate.png';
import minionsImg from '../assets/doodle-imgs/minions.png';
import birdsImg from '../assets/doodle-imgs/birds.png';
import luffyImg from '../assets/doodle-imgs/luffy1.png';


const Background = () => {
  return (
    <div className="background-container" style={{ backgroundImage: `url(${paperBg})` }}>
      
      <div className="paper-grid"></div>

      {/* Replace doodles with images */}
      <div className="doodle doodle-circle">
        <img src={mouseImg} alt="" />
      </div>

      <div className="doodle doodle-circle-2">
        <img src={mouseImg} alt="" />
      </div>

      <div className="doodle doodle-cross">
        <img src={spidermanImg} alt="" />
      </div>

      <div className="doodle doodle-cross-2">
        <img src={spidermanImg} alt="" />
      </div>

      <div className="doodle doodle-star">
        <img src={computerImg} alt="" />
      </div>

      <div className="doodle doodle-star-2">
        <img src={computerImg} alt="" />
      </div>

      <div className="doodle doodle-zigzag">
        <img src={courageImg} alt="" />
      </div>

      <div className="doodle doodle-arrow">
        <img src={semiconductorImg} alt="" />
      </div>
<div className="doodle doodle-extra-1">
  <img src={certificateImg} alt="" />
</div>

<div className="doodle doodle-extra-2">
  <img src={minionsImg} alt="" />
</div>

<div className="doodle doodle-extra-3">
  <img src={birdsImg} alt="" />
</div>

<div className="doodle doodle-extra-4">
  <img src={luffyImg} alt="" />
</div>
      <div className="paper-overlay"></div>
    </div>
  );
};

export default Background;