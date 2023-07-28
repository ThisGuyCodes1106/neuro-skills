import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';
import { Link } from 'react-router-dom'

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

export default function Basket({basket}) {

    const TAX_RATE = 0.70;

    let subtotal = 0

    basket.forEach(line => {
       subtotal += line.total
    })

    let invoiceTaxes = TAX_RATE * subtotal
    let invoiceTotal = subtotal + invoiceTaxes

    function postOrder(order) {

      fetch('http://localhost:3000/api/order', {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(order)
      }
    )}

    const handleProceedToCheckout = () => {
      postOrder(basket)
    }

    return (
      <div>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="spanning table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={3}>
                Details
              </TableCell>
              <TableCell align="right">Price</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Desc</TableCell>
              <TableCell align="right">Copies</TableCell>
              <TableCell align="right">Unit Price</TableCell>
              <TableCell align="right">Sum</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {basket.map((row) => (
              <TableRow key={row.name}>
                <TableCell>{row.name}</TableCell>
                <TableCell align="right">{row.quantity}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">{ccyFormat(row.total)}</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell rowSpan={3} />
              <TableCell colSpan={2}>Subtotal</TableCell>
              <TableCell align="right">{ccyFormat(subtotal)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Tax</TableCell>
              <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
              <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2} sx={{fontWeight: 'bold'}}>Total</TableCell>
              <TableCell align="right" sx={{fontWeight: 'bold'}}>£{ccyFormat(invoiceTotal)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <br />
      <Link to={'/checkout'} style={{textDecoration: 'none'}}>
        <Button onClick={handleProceedToCheckout} variant="contained" color='success' sx={{marginLeft: 'auto', display: 'block'}}>Proceed to checkout</Button>
      </Link>
      </div>
    );
  }