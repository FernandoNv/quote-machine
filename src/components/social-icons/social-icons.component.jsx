import React from 'react';
import SocialIcon from '../social-icon/social-icon.component';
import './social-icons.styles.scss';

const SocialIcons = ({ icons, text, author, color }) => (
    <div className="share-icons">
        {
            icons.map( (name, index) => <SocialIcon text={text} author={author} name={name} key={index} color={color} /> )
        }
    </div>
);

export default SocialIcons;