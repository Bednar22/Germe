import React, { useState } from 'react';
import '../CSS/flashcards.css';

const CategoriesButton = ({ handleClick, clicked, category, iconName }) => {
    const [buttonClicked, setButtonClicked] = useState(clicked);
    const buttonColor = buttonClicked ? 'modal-button-clicked' : 'modal-button-def';

    const categoriesButtonHandler = () => {
        setButtonClicked(!buttonClicked);
        handleClick(category);
    };

    return (
        <>
            <button onClick={() => categoriesButtonHandler()} className={buttonColor}>
                <span style={{ marginRight: '0.25rem' }} className='material-icons'>
                    {iconName}
                </span>
                <span> {category}</span>
            </button>
        </>
    );
};

export default CategoriesButton;
