import data from '../data';
import Product from './Product';

const ProductGrid = () => {
    
    return <div className="container">
        <h1>New Products</h1>
        <div className="grid">
       {data.map((item) => {
           return <Product key={item.id} {...item}  />
       })}
        </div>
    </div>
}

export default ProductGrid