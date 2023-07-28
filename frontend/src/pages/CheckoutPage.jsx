import '../App.css'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Basket from '../components/Basket.jsx'
import Checkout from '../components/Checkout.jsx'
import Container from '@mui/material/Container';

function CheckoutPage() {

  return (
    <div>
      <br />
      <Container>
        <Checkout />
      </Container>
      <Footer />
    </div>
  )
}

export default CheckoutPage