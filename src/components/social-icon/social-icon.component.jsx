import React from 'react';
import './social-icon.styles.scss';

const SocialIcon = ({ text, author, name, social, color }) => (
    <a style={{ backgroundColor: color }} href={`https://twitter.com/intent/tweet?hashtags=quotes&text="${text}" ${author}`} id={name === 'twitter' ? "tweet-quote" : ""} className="share-icon" target="_blanket">
        <i className={`fab fa-${name} social-icon`}></i>
    </a>
);

export default SocialIcon;