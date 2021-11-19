import germanflag from '../graphics/flag.png';
import '../CSS/dropdown.css';
import { Link } from 'react-router-dom';
const FlagDropdown = () => {
    return (
        <>
            <div className='flag-dropdown-box'>
                <div className='flag-dropdown'>
                    <button className='link'>
                        <img src={germanflag} alt={'Menu'} style={{ height: '30px' }} />{' '}
                    </button>
                    <div className='flag-dropdown-content'>
                        <Link to='/gramma' className='flag-button'>
                            GRAMMA
                        </Link>
                        <Link to='/culture' className='flag-button'>
                            CULTURE
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FlagDropdown;
