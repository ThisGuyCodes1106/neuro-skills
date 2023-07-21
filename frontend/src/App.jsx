import './App.css'
import { useState, useEffect } from 'react'
import Nav from './components/Nav.jsx'
import Products from './components/Products.jsx'
import Footer from './components/Footer.jsx'

import Container from '@mui/material/Container';


function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getAllProducts() {
      try {
        const response = await fetch('http://localhost:3000/api/products');
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

  return (
    <div>
      <Nav />
      <Container>
        <Products productsData={products} />
      </Container>
      <Footer />
    </div>
  )
}

export default App
