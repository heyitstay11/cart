import { useEffect, useState } from "react";
import { useGlobalContext } from "../context";

const Product = ({id, name, imgLink, description, price, amount }) => {
    let item = {id, name, imgLink, description, price, amount };
   
    const {addItem} = useGlobalContext();
    const [alert, setAlert] = useState(false);
    // const [readMore, setReadMore] = useState(0.5 - Math.random() >= 0 ? true : false); Randomize
    const [readMore, setReadMore] = useState(false);


   useEffect(() => {
        let timeout = setTimeout(() => {
            setAlert(false);
        }, 1200);
        return () => clearTimeout(timeout);
   }, [alert]);
    return  <article className="card">
        <img src={imgLink} alt={name} height="180" />
        <div className="item">
        <div className="info">
            <h3>{name}</h3>
            <p className="showP">{ readMore ? description : `${description.substring(0, 40)} ...`}
            &nbsp;
                <button className='show' onClick={() => setReadMore(readMore => !readMore)}>
                    {readMore ? 'Show Less' : 'Show More'}
                </button>
            </p>
        </div>
        <div className="button-container">
            <p >Price: ₹&nbsp;{price.toLocaleString()}</p>  
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