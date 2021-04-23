import Product from './Product';
let arr = [1,2,3,4,5,6,7];
const ProductGrid = () => {
    return <div className="container">
        <h1>New Products</h1>
        <div className="grid">
       {arr.map((item) => {
           return <Product />
       })}
        </div>
    </div>
}

export default ProductGrid