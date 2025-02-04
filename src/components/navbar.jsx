import {Link} from 'react-router-dom'

export default function Navbar (){


    return(
        <div className="navbar">
            <ul>
                <li className="nav-item">
                    <Link to='/' className='nav-link'>Home</Link>
                </li>
                <li className="nav-item">
                    <Link to='/menu' className='nav-link'>Menu</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/reservation' className='nav-link'>Resrvation</Link>
                </li>
                <li className="nav-item">
                    <Link to='/contact' className='nav-link' >Contact</Link>
                </li>
                <li className="nav-item">
                    <Link to='/about'className='nav-link'>About</Link>
                </li>
                
            </ul>
        </div>
    )
} 