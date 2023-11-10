import React from 'react';
import './Feature.css';

import importIcon1 from '../../assets/icon-chat.png';
import importIcon2 from '../../assets/icon-money.png';
import importIcon3 from '../../assets/icon-security.png';

export const icon1 = importIcon1;
export const icon2 = importIcon2;
export const icon3 = importIcon3;

export function Feature({ id, icon, alt, title, text }) {
    return (
        <div id={id} className="feature-item">
            <img src={icon} alt={alt} className="feature-icon" />
            <h3 className="feature-item-title">{title}</h3>
            <p>{text}</p>
        </div>
    );
}
