import { useEffect, useState } from "react";
import { useGlobalContext } from "../context";

const Product = ({id, name, img, description, price, amount }) => {
    let item = {id, name, img, description, price, amount };
   const {addItem} = useGlobalContext();
   const [alert, setAlert] = useState(false);
   useEffect(() => {
        let timeout = setTimeout(() => {
            setAlert(false);
        }, 1200);
        return () => clearTimeout(timeout);
   }, [alert]);
    return  <article className="card">
        <img src={process.env.PUBLIC_URL + img} alt={name} height="180" />
        <div className="item">
        <div className="info">
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
        <div className="button-container">
            <p>Price: ₹{price.toLocaleString()}</p>  
            <button onClick={() => {
                addItem(item);
                setAlert(true);
            }}>ADD</button>
            { alert && <p className='alert'>Item Added</p>}
        </div>
        </div>
</article>
}

export default Product;