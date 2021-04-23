import st from '../st.png'
const Product = () => {
    return  <article className="card">
        <img src={st} alt="itempic" height="180" />
        <div className="item">
        <div className="info">
            <h3>Name</h3>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="button-container">
            <p>Price: $120</p>  
            <button>ADD</button>
        </div>
        </div>
</article>
}
export default Product;