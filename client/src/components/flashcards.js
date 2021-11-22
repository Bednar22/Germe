import React, { useState } from 'react';
import '../CSS/flashcards.css';
import FlipCard from './card';
import FlagDropdown from './flagDropdown';
import Categories from './categoriesModal';
const Flashcards = () => {
    const [showCategories, setShowCaregories] = useState(false);

    return (
        <>
            <FlagDropdown></FlagDropdown>
            <div className='card-box'>
                <FlipCard></FlipCard>
                <div className='under'>
                    <Categories
                        showCategories={showCategories}
                        handleClose={() => setShowCaregories(false)}
                    ></Categories>
                    <button className='under-buttons' onClick={() => setShowCaregories(true)}>
                        CATEGORIES
                    </button>
                    <button className='under-buttons'>NEXT</button>
                </div>
            </div>
        </>
    );
};

export default Flashcards;
