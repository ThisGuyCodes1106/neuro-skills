import '../App.css'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Basket from '../components/Basket.jsx'
import Container from '@mui/material/Container';

function BasketPage({basket}) {

  return (
    <div>
      <Nav />
      <br />
      <Container>
        <Basket basket={basket} />
      </Container>
      <Footer />
    </div>
  )
}

export default BasketPage