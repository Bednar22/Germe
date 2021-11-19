import React from 'react';
import germany_graphic from '../graphics/germany_graphic.png';
import '../App.css';
import { Link } from 'react-router-dom';
const Homepage = () => {
    return (
        <>
            <div className='menu'>
                <Link className='menu-button' to='flashcards'>
                    FLASHCARDS
                </Link>
                <Link className='menu-button' to='gramma'>
                    GRAMMA
                </Link>
                <Link className='menu-button' to='culture'>
                    CULTURE
                </Link>
                <Link className='menu-button' to='about'>
                    ABOUT
                </Link>
            </div>
            <div>
                <img className='german-graphic' alt={'German graphic'} src={germany_graphic}></img>
            </div>
        </>
    );
};

export default Homepage;
