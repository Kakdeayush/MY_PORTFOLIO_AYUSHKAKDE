import React from 'react';
import './Background.css';
import paperBg from '../assets/crumpled-paper-bg.png';

const Background = () => {
  return (
    <div className="background-container" style={{ backgroundImage: `url(${paperBg})` }}>
      {/* Grid overlay for sketchbook texture */}
      <div className="paper-grid"></div>

      {/* Subtle floating sketchbook doodles */}
      <div className="doodle doodle-circle"></div>
      <div className="doodle doodle-circle-2"></div>
      <div className="doodle doodle-cross"></div>
      <div className="doodle doodle-cross-2"></div>
      <div className="doodle doodle-star"></div>
      <div className="doodle doodle-star-2"></div>
      <div className="doodle doodle-zigzag"></div>
      <div className="doodle doodle-arrow"></div>

      <div className="paper-overlay"></div>
    </div>
  );
};

export default Background;
