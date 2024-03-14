import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'
import ProductList from './component/ProductList';
import Checkout from './component/Checkout';
import ProductDetail from './component/ProductDetail';
import { CartContext } from './component/CartContext';

function App() {

  const [cartItems, setCartItems ] = useState([]);

  return (
    <BrowserRouter>

      <CartContext.Provider value={{cartItems, setCartItems}}>
      
        {/* <a href="/checkout">購物車</a> */}

        <Link to ="/">首頁</Link>
        <Link to ="/checkout">購物車</Link>

        <Routes>
          <Route path="/" element = {<ProductList/>} />
          <Route path="/checkout" element = {<Checkout/>} />

          <Route path="/product" element = {<ProductDetail/>} >
            <Route path = ":id" element = {<ProductDetail/>} />

          </Route>

          <Route path="*" element = {<p>網址錯誤</p>} />
        </Routes>

      </CartContext.Provider>
    </BrowserRouter>
  );
}

export default App;
