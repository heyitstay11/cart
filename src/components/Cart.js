import CartItem from './CartItem';
import {Link} from 'react-router-dom';
import { useGlobalContext } from '../context';

const Cart = () => {
    const {cart, total, clearCart} = useGlobalContext();

if(cart.length === 0){
    return <div className="container">
        <h1>Your Cart</h1>
        <div className="cart">
          <h2>Cart is Empty</h2>
          <Link to='/' className="link">Explore</Link>
        </div>
    </div>
}
return <div className="container">
        <h1>Your Cart</h1>
        <div className="cart">
        <div className="total-container">
                <div >Total</div>
                <div >₹{total.toLocaleString()}</div>
            </div>
            { cart.map((item) => {
                return <CartItem key={item.id} {...item} />
            })}
            <div className="clear-container">
                <button className="clear" onClick={clearCart}>
                    Clear Cart
                </button>
            </div>
        </div>
    </div>
}
 export default Cart;