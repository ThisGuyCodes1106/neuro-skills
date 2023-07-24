import ProductCard from "./ProductCard";
import PropTypes from 'prop-types';


import { Grid, Typography } from '@mui/material';

function Products(props) {

  Products.propTypes = {
    productsData: PropTypes.arrayOf(PropTypes.object).isRequired
  }

  const { productsData } = props;

  return (
    <div>
      <Grid container spacing={2}>
        {productsData.map((product, index) => <ProductCard skill={product} key={index} />)}
      </Grid>
    </div>
  );
}

export default Products;
