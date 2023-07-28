import ProductCard from "./ProductCard";
import PropTypes from 'prop-types';


import { Grid, Typography } from '@mui/material';

function Products({ productsData, addToBasket }) {

  Products.propTypes = {
    productsData: PropTypes.arrayOf(PropTypes.object).isRequired,
    addToBasket: PropTypes.func.isRequired
  }

  return (
    <div>
      <h1 className="cyberpunk info-header">Our products</h1>
      <Grid container spacing={4}>
        {productsData.map((product, index) => (
          <ProductCard
            skill={product}
            key={index}
            onBuyButtonClick={() => addToBasket(product)}
          />
        ))}
      </Grid>
    </div>
  );
}

export default Products;
