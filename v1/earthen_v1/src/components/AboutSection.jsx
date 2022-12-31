import bgImage from '../images/earthenImages/watermill.webp'
import Card from '../UI/Card'
import { Link } from 'react-router-dom'
import { AiFillCaretRight } from 'react-icons/ai'
import { abouts } from '../data'
// import {useState} from 'react'

const AboutSection = () => {

  return (
    <div className='about__section'>
      <div className='about__section-left'>
        <img src={bgImage} alt="" />

      </div>
      <div className={'about__section-right'}>
        {abouts.filter(orderNumber => orderNumber.order === 1).slice().map(({ order, title, content, className }) => {
          return (
            <Card className={className} key={order}>
              <h4>{title}</h4>
              <small>{content}</small>
              <br />
              <div className='btn-container'>
                <Link className="btn sm center about-btn">Learn More <AiFillCaretRight /> </Link>
              </div>
            </Card>
          )
        })
        }
      </div>
    </div>
  )
}

export default AboutSection