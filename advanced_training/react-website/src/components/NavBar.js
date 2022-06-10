import { Link} from 'react-router-dom'
import logo from '../images/logo.svg'

export default function NavBar() {
    return (
        <header className='title-container'>
            <img src={logo} alt="logo-pic"/>
            <nav className='nav-container'>
                <Link to="/">Home</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </header>
    )
}