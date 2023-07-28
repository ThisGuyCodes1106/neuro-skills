import './App.css'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx'
import Nav from './components/Nav'
import CheckoutPage from './pages/CheckoutPage.jsx'
import BasketPage from './pages/BasketPage.jsx'

export const ENDPOINT = 'http://localhost:3000';


function App() {

  const [products, setProducts] = useState([]);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    async function getAllProducts() {
      try {
        const response = await fetch(`${ENDPOINT}/api/products`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    getAllProducts();
  }, []);


  const addToBasket = (product) => {

    let basketItem = {...product, quantity: 1, total: product.price}

    if (basket.length > 0) {
      let itemFound = false
      const updatedBasket = basket.map(item => {
        if (item.id === basketItem.id) {
          itemFound =true
          return { ...item, quantity: item.quantity + 1, total: (item.quantity + 1) * item.price}
        }
        return item
      })

      if (!itemFound) {
        updatedBasket.push(basketItem)
      }

      setBasket(updatedBasket)
    } else {
      setBasket([basketItem])
    }
  }


  return (
    <div>
      <Nav basket={basket} />
      <Routes>
        <Route path='/' element={<Home products={products} addToBasket={addToBasket} />} />
        <Route path='/basket' element={<BasketPage basket={basket} />} />
        <Route path='/checkout' element={<CheckoutPage />} />
      </Routes>
    </div>
  )
}

export default App
