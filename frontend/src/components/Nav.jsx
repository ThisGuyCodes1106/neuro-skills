import { Link } from 'react-router-dom'

function Nav() {

    return (
      <nav>
        <img src="src\assets\images\logo\logo-no-background.svg" alt="" />
        <ul>
          <li>
            <Link to='/basket'>Basket</Link>
          </li>
        </ul>
      </nav>
    )
  }
  
  export default Nav