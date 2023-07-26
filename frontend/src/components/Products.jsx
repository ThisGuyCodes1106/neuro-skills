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
      <Grid container spacing={2}>
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
