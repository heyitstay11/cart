import {Link} from 'react-router-dom';
import {useGlobalContext} from '../context';
const Navbar = () => {
    const {amount} = useGlobalContext();
    return <header className="navbar">
        <Link className="logo" to="/">tCart</Link>
        <nav>
            <ul>
                <li><Link className="link" to="/">Home</Link></li>
                <li><Link  className="link" to="/cart">Cart</Link><span className="amount-total">{amount}</span></li>
            </ul>
        </nav>
    </header>
}

export default Navbar;