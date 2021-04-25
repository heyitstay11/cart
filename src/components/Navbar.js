import {Link} from 'react-router-dom';

const Navbar = () => {
    return <header className="navbar">
        <Link className="logo" to="/">Shopping App</Link>
        <nav>
            <ul>
                <li><Link className="link" to="/">Home</Link></li>
                <li><Link  className="link" to="/cart">Cart</Link></li>
            </ul>
        </nav>
    </header>
}

export default Navbar;