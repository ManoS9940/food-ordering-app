import Food from './Components/Food';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Login from './Components/Login';
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Register from './Components/Register';
import Cart from './Components/Cart';
import {useState} from 'react'


function App() {

  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (food) => {
    setCartItems([...cartItems, food]);
    
  };

  const handleRemoveFromCart = (food) => {
    setCartItems(cartItems.filter(item => item.item_name !== food.item_name));
  };

  return (
    <div className="container-fluid">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Food addToCart={handleAddToCart} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/cart' element={<Cart cartItems={cartItems} removeFromCart={handleRemoveFromCart} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
