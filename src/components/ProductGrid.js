import {useHomeContext } from '../homeContext';
import Product from './Product';

const ProductGrid = () => {
    const { loading, products } = useHomeContext();

    if(loading){
        return <h1>Loading Please wait ...</h1>
    }
    
    return  <div className="container">
            <h1>New Products</h1>
                <div className="grid">
                    {products.map((item) => {
                        return <Product key={item.id} {...item}  />
                    })}
                </div>
            </div>
}

export default ProductGrid