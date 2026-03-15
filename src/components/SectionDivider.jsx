import React from 'react';
import './SectionDivider.css';

const SectionDivider = () => {
    return (
        <div className="section-divider-container flex-center">
            <div className="divider-line"></div>
            <div className="divider-icon sticker">⭐</div>
            <div className="divider-line"></div>
        </div>
    );
};

export default SectionDivider;
