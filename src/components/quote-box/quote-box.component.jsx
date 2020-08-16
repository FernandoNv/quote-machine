import React from  'react';
import SocialIcons from '../social-icons/social-icons.component';
import Button from '../button/button.component';
import './quote-box.styles.scss';


const QuoteBox = ({text, author, colors, newQuote}) => {

    return(
        <div id="quote-box">
            <div className="item-flex">
                <i style={{ color: colors.secondaryColor }} className="fas fa-quote-left quote-icon"></i>
                <Button newQuote={newQuote} text="new-quote" colors={ colors } />
            </div>
            <div className="item-flex">
                <p id="text" style={{ color: colors.primaryColor }}>{ text }</p>
            </div>
            <div className="item-flex">
                <SocialIcons icons={["twitter", "tumblr"]} text={text} author={author} color={ colors.secondaryColor }/>
                <p id="author" style={{ color: colors.secondaryColor}} >{author ? author: 'unknown'}</p>
            </div>
        </div>
    )
};

export default QuoteBox;