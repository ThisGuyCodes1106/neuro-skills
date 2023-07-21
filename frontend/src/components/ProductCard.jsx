import {Paper, Grid, Typography, Box, Rating, Button} from '@mui/material';
import DownloadingIcon from '@mui/icons-material/Downloading';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';

function ProductCard(props) {

    const { name, shortDescription, price, rating, downloadTime, image } = props.skill

    return (
        <Grid item xs={12} sm={6} md={4} sx={{height: "100%"}}>
            <Paper elevation={3} sx={{minHeight: '350px', position: 'relative'}}>
                <img src={image} alt="" className='card-img' />
                <Box paddingX={1}>
                    <Typography variant='h5'>{name}</Typography>
                    <Typography variant='body2' paddingBottom={2}>{shortDescription}</Typography>
                    <Rating name="read-only" size='small' precision={0.5} value={rating} readOnly />
                    <Box sx={{
                        display: "flex",
                        alignItems: "center",
                        paddingBottom: 1
                    }}>
                        <DownloadingIcon sx={{width: 17}} />
                        <Typography variant='overline' component="p" marginLeft={0.5}>{downloadTime}</Typography>
                    </Box>
                    <Box sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: 'space-between',
                        paddingBottom: 1
                    }}>
                        <Typography variant='body2' paddingBottom={2}>£{price}</Typography>
                        <Button variant="outlined" endIcon={<LocalAtmIcon />} sx={{
                            position: 'absolute',
                            bottom: 8,
                            right: 8
                        }}>BUY</Button>
                    </Box>
                </Box>
            </Paper>
        </Grid>
    )
  }
  
  export default ProductCard