import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { useState } from 'react'
import { Link as LinkScroll } from 'react-scroll'


const NavBar = () => {

    const logo = "/img/logo-00.png"

    const [click, setClick] = useState(false)

    const closeMenu = () => setClick(false)

    return (
        <header id="/">
            <LinkScroll to="/" className='logo'>
                <img src={logo} alt='logo' />
                <div className='logo-texto'>
                    <h2>excel.arq</h2>
                    <h3>Excel aplicado a la Arquitectura</h3>
                </div>
            </LinkScroll>
            <div className="nav-cart-container">
                <nav>
                    <ul>
                        <li className='nav-item'>
                            <LinkScroll to="/" spy={true} smooth={true} offset={0} duration={500} onClick={closeMenu}>Inicio</LinkScroll>
                        </li>
                        <li className='nav-item'>
                            <div className="dropdown">
                                <LinkScroll to="talleres" spy={true} smooth={true} offset={-134} duration={500} onClick={closeMenu}>Talleres</LinkScroll>
                                <div className="dropdown-content">
                                    <LinkScroll to="1" spy={true} smooth={true} offset={-90} duration={500} onClick={closeMenu}>Básico</LinkScroll>
                                    <LinkScroll to="2" spy={true} smooth={true} offset={-90} duration={500} onClick={closeMenu}>Intermedio</LinkScroll>
                                    <LinkScroll to="3" spy={true} smooth={true} offset={-90} duration={500} onClick={closeMenu}>Avanzado</LinkScroll>
                                </div>
                            </div>
                        </li>
                        <li className='nav-item'>
                            <LinkScroll to="detrasde" spy={true} smooth={true} offset={-50} duration={500} onClick={closeMenu}>Detras de...</LinkScroll>
                        </li>
                        <li className='nav-item'>
                            <LinkScroll to="contactame" spy={true} smooth={true} offset={-90} duration={500} onClick={closeMenu}>Contactame</LinkScroll>
                        </li>
                    </ul>
                </nav>
                <CartWidget />
            </div>

        </header>
    )
}

export default NavBar