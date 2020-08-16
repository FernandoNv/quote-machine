import React from 'react';
import './button.styles.scss';

const Button = ({ text, newQuote, colors }) => (
    <button style={{ backgroundColor: colors.secondaryColor }} onClick={newQuote} id="new-quote" className="btn">{text}</button>
);

export default Button;