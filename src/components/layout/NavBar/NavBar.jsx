// import {ShoppingCartTwoToneIcon} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./NavBar.css"



export default function NavBar() {
    return (
    <div>
        <ul className="navList">
            <h1 className='logo'>Mi Tienda <span className='spanLogo'>Online</span></h1>
            <li className='lista'>Productos</li>
            <li className='lista'>Sobre Nosotros</li>
            <li className='lista'>Contacto</li>
            <div>
            <span className='spanCart'>3</span> <h3  className='cart'><ShoppingCartIcon fontSize='large' color='action'/></h3>
            </div>
        </ul>
        
    </div>
    )
}

