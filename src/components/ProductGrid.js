import {useHomeContext } from '../homeContext';
import Product from './Product';
import Masonry from 'react-masonry-css';

const ProductGrid = () => {
    const { loading, products } = useHomeContext();
    const breakpointColumnsObj = {
        default: 3,
        1000: 2,
        580: 1
      };

    if(loading){
        return <h1>Loading Please wait ...</h1>
    }
    
    return  <div className="container">
            <h1>New Products</h1>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {products.map((item) => {
                     return <Product key={item.id} {...item}  />
                })}
            </Masonry>
            </div>
}

export default ProductGrid