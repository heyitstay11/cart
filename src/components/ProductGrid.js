import { useEffect, useState } from 'react';
import Product from './Product';
const TCART_API = 'https://tcartapi.herokuapp.com/api';

const ProductGrid = () => {

    const [data,setData] = useState();
    const [loading,setLoading] = useState(true);

    const fetchProducts = async (url) => {
        setLoading(true);
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            // const newData = data.map((item) => {
            //     item.amount = 1;
            //     return item;
            // })
            //setData(value => newData);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false)   
        }
    }

    useEffect(() => {
        fetchProducts(TCART_API);
    }, [])

    if(loading){
        return <h1>Loading Please wait ...</h1>
    }
    
    return <div className="container">
        <h1>New Products</h1>
        <div className="grid">
       {/* {data.map((item) => {
           return <Product key={item.id} {...item}  />
       })} */}
        </div>
    </div>
}

export default ProductGrid