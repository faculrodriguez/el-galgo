import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <Link to="/" >
                <img src="./img/favicon.png" alt="" />
            </Link>

            <p> El Galgo. Todos los derechos reservados. </p>
        </footer>
    )
}

export default Footer 