import React, { useState, useEffect } from 'react';
import '../CSS/flashcards.css';
import '../CSS/dropdown.css';
import CategoriesButton from './categoriesButton';
// Categories: animals, feelings, IT, house, car, tools, czasowniki,  czas przeszły, rośliny,

const Categories = ({ handleClose, showCategories, children }) => {
    const showHideClassName = showCategories ? 'modal display-block' : 'modal display-none';
    const [usedCategories, setUsedCategories] = useState([]);
    const [categories, setCategories] = useState([{}]);

    //Funtion to manage category usage
    const handleClick = (category) => {
        let tempArray = usedCategories;
        const index = tempArray.indexOf(category);
        if (index < 0) {
            tempArray.push(category);
        } else {
            tempArray.splice(index, 1);
        }
        setUsedCategories(tempArray);
    };

    useEffect(() => {}, []);

    return (
        <>
            <div className={showHideClassName}>
                <section className='modal-main'>
                    <div className='modal-row close-button'>
                        <button className='material-icons' style={{ fontSize: '28px' }} onClick={handleClose}>
                            close
                        </button>
                    </div>
                    <div className='modal-row'>
                        <CategoriesButton
                            handleClick={handleClick}
                            clicked={true}
                            iconName={'pets'}
                            category={'ANIMALS'}
                        ></CategoriesButton>
                        <CategoriesButton
                            handleClick={handleClick}
                            clicked={false}
                            iconName={'mood'}
                            category={'FEELINGS'}
                        ></CategoriesButton>
                        <CategoriesButton clicked={true} iconName={'pets'} category={'ANIMALS'}></CategoriesButton>
                    </div>
                    <div className='modal-row'>
                        <CategoriesButton clicked={false} iconName={'pets'} category={'ANIMALS'}></CategoriesButton>
                        <CategoriesButton clicked={false} iconName={'mood'} category={'FEELINGS'}></CategoriesButton>
                        <CategoriesButton clicked={false} iconName={'pets'} category={'ANIMALS'}></CategoriesButton>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Categories;
