import './home.css'
import MainHeader from '../../components/MainHeader'
import Programs from '../../components/Programs'
import BriefInfo from '../../components/BriefInfo'
import Banner from '../../components/Banner'
import AboutSection from  '../../components/AboutSection'

const Home = () => {
  return (
    <>
      <MainHeader />
      <BriefInfo/>
      <AboutSection/>
      <Programs/>
      <Banner/> 
    </>
  )
}

export default Home