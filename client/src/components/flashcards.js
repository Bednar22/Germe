import '../CSS/flashcards.css';
import FlipCard from './card';
import FlagDropdown from './flagDropdown';
const Flashcards = () => {
    return (
        <>
            <FlagDropdown></FlagDropdown>
            <div className='card-box'>
                <FlipCard></FlipCard>
                <button className='card-button'>NEXT</button>
            </div>
        </>
    );
};

export default Flashcards;
