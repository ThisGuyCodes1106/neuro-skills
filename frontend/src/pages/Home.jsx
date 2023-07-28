import '../App.css'
import { useState, useEffect } from 'react'
import Nav from '../components/Nav.jsx'
import Products from '../components/Products.jsx'
import Footer from '../components/Footer.jsx'
import InfoSection from '../components/InfoSection.jsx'

import Container from '@mui/material/Container';

function Home({ products, addToBasket }) {

  return (
    <div>
      <Container>
        <InfoSection />
        <Products productsData={products} addToBasket={addToBasket} />
      </Container>
      <Footer />
    </div>
  )
}

export default Home