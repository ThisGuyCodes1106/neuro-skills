import ProductCard from "./ProductCard";
import productData from "../assets/mockData/productData.json"


import { Grid, Typography, Button } from '@mui/material';

async function testEvent() {
  fetch('http://localhost:3000/test')
      .then((response) => response.text())
      .then((data) => (console.log(data)))
      .catch((error) => console.error('Error fetching data:', error));
}

function Products() {

  return (
    <div>
      <Typography variant="h1" marginY={2} sx={{
        borderBottom: "2px solid lightgrey",
        marginBottom: "2rem",
        paddingBottom: "2rem",
      }}>Upgrade Your Mind, Unleash Your Potential!</Typography>
      <Button onClick={testEvent}>TEST</Button>
      <Grid container spacing={2}>
        {productData.map((skill) => console.log(skill))}
        {productData.map((product, index) => <ProductCard skill={product} key={index} />)}
      </Grid>
    </div>
  );
}

export default Products;
