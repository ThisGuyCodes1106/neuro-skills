import './App.css'
import { useState, useEffect } from 'react'
import Nav from './components/Nav.jsx'
import Products from './components/Products.jsx'
import Footer from './components/Footer.jsx'
import InfoSection from './components/InfoSection.jsx'

import Container from '@mui/material/Container';

export const ENDPOINT = 'http://localhost:3000';


function App() {

  const [products, setProducts] = useState([]);

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

  return (
    <div>
      <Nav />
      <Container>
        <InfoSection />
        <Products productsData={products} />
      </Container>
      <Footer />
    </div>
  )
}

export default App
