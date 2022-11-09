import { Link } from 'react-router-dom'
import '../pages/home/home.css'
import ImageLogo from '../images/earthenImages/WhiteLogo.png'

const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>WELCOME TO THE <span className='spanColors'>FUTURE</span> OF <span className='spanColors'>ENERGY</span></h4>
          <p style={{ background: "white", padding: "0 1rem", borderRadius: "0  75px 0 75px", maxWidth: "100px;" }}>#FutureEnergy</p>
          <h1>Enabling Renewable Energy 24/7</h1>
          <h1>Carbon-Free Earth</h1>
          <Link to='/' className='btn lg'>LEARN MORE</Link>
        </div>
        {/* <div className='main__header-right'>
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={ImageLogo} alt="Main Header Image Logo" />
          </div>
        </div> */}
      </div>

    </header>
  )
}

export default MainHeader





