// import React, { Link } from 'react'
import Logo from '../images/earthenImages/WhiteLogo.png'
import { links } from "../data"
const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer__container">
                <div className="footer_section-1">
                    <img src={Logo} alt="" />
                    <p>Enabling renewable energy 24/7 for a carbon-free world</p>
                </div>
                <div className="footer__section-2">
                    <h3>NAVIGATION</h3>
                    {
                        links.map(({ name, path }, index) => {
                            return (
                                <div className='container footer__links' key={index}>
                                    <a href={path}> {name} </a>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="footer__section-3">
                    <h3>GET IN TOUCH</h3>
                    <a href="/">United States</a>
                    <br />
                    <a href="/">ask@earthen.info</a>

                </div>

            </div>
            <p>Copyright© 2022 EarthEn. All rights reserved.</p>
        </div>
    )
}

export default Footer