import { FaCrown } from 'react-icons/fa'
import SectionHead from './SectionHead'
import { programs } from '../data'
import Card from '../UI/Card'
import { Link } from 'react-router-dom'
import { AiFillCaretRight } from 'react-icons/ai'

const Programs = () => {
    return (
        <section className='programs'>
            <div className="container programs__container">
                <SectionHead title='OUR SOULUTIONS' icon={<FaCrown />} />
                <div className="programs__wrapper">
                    {
                        programs.map(({ id, title, info, path, image }) => {
                            return (
                                <Card className='programs__programs' key={id}>
                                    <img src={image} alt="Eathen" />
                                    <h4>{title}</h4>
                                    <small>{info}</small>
                                    <div className='card-btn btn-container'>
                                        <Link to={path} className="btn sm">Learn More <AiFillCaretRight /> </Link>
                                    </div>
                                </Card>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Programs