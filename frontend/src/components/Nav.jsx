import { Link } from 'react-router-dom'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

function Nav({ basket }) {

  return (
    <nav className='navbar cyber-razor-bottom'>
      <Link to={'/'} style={{textDecoration: 'none'}}>
        <div className='logo-section'>
          <img className='nav-logo' src="src\assets\images\logo\date-logo.svg" alt="" />
          <h1 className="nav-title">NeuroSkills</h1>
        </div>
      </Link>
      <ul>
        <li>
          <Link to='/basket'>
            <IconButton aria-label="cart" fontSize='large' color='white'>
              <StyledBadge badgeContent={basket.length} color="secondary">
                <ShoppingCartIcon style={{ color: 'white', fontSize: '2rem' }} />
              </StyledBadge>
            </IconButton>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav