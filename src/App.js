import Navbar from "./components/Navbar";
import ProductGrid from "./components/ProductGrid";
import Cart from "./components/Cart";
import {Route, Switch , Redirect} from 'react-router-dom';
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
        <Switch>
          <Route exact path='/' component={ProductGrid} />
          <Route exact path='/cart' component={Cart} />
          <Redirect to='/' />
        </Switch>
        <Footer />
    </div>
  );
}

export default App;
