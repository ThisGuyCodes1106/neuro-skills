import './App.css'
import Nav from './components/Nav.jsx'
import Products from './components/Products.jsx'
import Footer from './components/Footer.jsx'

import Container from '@mui/material/Container';

function App() {

  return (
    <div>
      <Nav />
      <Container>
        <Products />
      </Container>
      <Footer />
    </div>
  )
}

export default App
