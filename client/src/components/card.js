import '../CSS/flashcards.css';

const FlipCard = (props) => {
    return (
        <div className='flip-card'>
            <div className='flip-card-inner'>
                <div className='flip-card-front'>
                    <p className='white-text'>Tutaj przod karty</p>
                </div>
                <div class='flip-card-back'>
                    <p className='white-text'>BACK OF THE CARD</p>
                </div>
            </div>
        </div>
    );
};

export default FlipCard;
