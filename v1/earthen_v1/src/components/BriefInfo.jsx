import { Link } from 'react-router-dom'
import windmillImg from '../images/earthenImages/windmill2.webp'
import { AiFillCaretRight } from 'react-icons/ai'

const BriefInfo = () => {
    return (
        <div className="brief__container">
            <div className="section__left">
                <h5>WHAT WE DO</h5>
                <br />
                <h2> We are Enabling Renewable Energy 24/7</h2>
                <p>
                    EarthEn is using carbon dioxide based technology to provide flexible energy storage for 24/7 power increasing grid resiliency & enabling a fully-renewable grid.
                    Our innovative technology will store the excess solar & wind electricity and deliver it to customers anywhere, anytime, for however long you need at the lowest price.
                    If you're in need of energy storage, and are looking at battery technology as a potential supplier.
                    Look no further - as we blow them out of the water across every dimension.
                    Don't believe us? Contact us to learn more about how we do it.
                </p>
                <div className='btn-container'>
                    <Link className="btn sm center">Learn More <AiFillCaretRight /> </Link>
                </div>
            </div>
            <div className='section__right'>
                <div className="section__right-image">
                    <img src={windmillImg} alt="Windmill in the ocean" />
                </div>
            </div>
        </div>
    )
}

export default BriefInfo