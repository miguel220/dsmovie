import {ReactComponent as StarFull} from 'assets/img/stars-full.svg';
import {ReactComponent as StarHalf} from 'assets/img/stars-half.svg';
import {ReactComponent as StarEmpty} from 'assets/img/stars-empty.svg';
import './styles.css';

function MovieStars() {
    return (
        <div className="dsmovie-stars-container">
            <StarFull />
            <StarFull />
            <StarFull />
            <StarHalf />
            <StarEmpty />
        </div>
    );
}

export default MovieStars;