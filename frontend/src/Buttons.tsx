import './Buttons.css';
import menu from './assets/buttons/menu.svg';
import like from './assets/buttons/like.svg';
import forward from './assets/buttons/forward.svg';

const Buttons: React.FC = () => {
    return (
        <div className="buttons">
            <button className="button">
                <img src={menu} alt="view menu" />
            </button>
            <button className="button">
                <img src={like} alt="like" />
            </button>   
            <button className="button">
                <img src={forward} alt="share" />
            </button>
        </div>
    );
}

export default Buttons;