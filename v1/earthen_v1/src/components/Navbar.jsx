import { useState } from 'react'
import Logo from '../images/earthenImages/EarthenOG.png'
import './navbar.css'
import { Link, NavLink } from 'react-router-dom'
import { links } from '../data'
import { TbWindmill } from 'react-icons/tb'
import { MdOutlineClose } from 'react-icons/md'
import pin from '../images/earthenImages/pin.png'

const Navbar = () => {
    const [isNavShowing, setIsNavShowing] = useState(false)


    return (
        <nav>
            <div className="container nav__container">
                <Link to='/' className='logo' onClick={() => setIsNavShowing(false)}>
                    <img src={Logo} alt="EarthEn Logo" />
                </Link>
                <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
                    {
                        links.map(({ name, path }, index) => {
                            return (
                                <li key={index}>
                                    <NavLink to={path} className={({ isActive }) => isActive ? 'active-nav' : ''}>
                                        {name}
                                    </NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
                <Link className='nav__toggle-btn rotating' onClick={() => setIsNavShowing(!isNavShowing)}>
                    
                    {
                        isNavShowing ? <MdOutlineClose /> : <TbWindmill />
                    }
                </Link>
            </div>
        </nav>
    )
}

export default Navbar