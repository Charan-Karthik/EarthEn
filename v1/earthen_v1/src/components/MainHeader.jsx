import { Link } from 'react-router-dom'
import '../pages/home/home.css'
import Logo from '../images/earthenImages/WhiteLogo.png'
// import PlanetEarth from '../images/earthenImages/PlanetEarth.png'

import video from '../images/earthenImages/video2.mp4'



const MainHeader = () => {
  return (
    <header className="main__header">
      <video src={video} id="myVideo"   autoPlay loop ></video>
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>WELCOME TO THE <span className='spanColors'>FUTURE</span> OF <span className='spanColors'>ENERGY</span></h4>
          <img src={Logo} className="bgMainLogo" alt="Main Logo" />
          <p>Carbon Negative, Climate Positive Energy</p>
          <h1>Enabling Renewable Energy 24/7 Carbon-Free Earth</h1>
          <div className='btn-conatainer'>
            <Link to='/' className='btn lg'>LEARN MORE</Link>
          </div>
        </div>
        {/* <div className='main__header-right'>
          <img  src={PlanetEarth} className="main__header-earth" />
          <div className="main__header-image">
          <img src={ImageLogo} alt="Main Header Image Logo" />
          <p>Carbon Negative, Climate Positive Energy #FutureEnergy</p>
          </div>
        </div>  */}
      </div>

    </header>
  )
}

export default MainHeader









