import {FaCrown} from 'react-icons/fa'
import Card from '../UI/Card'
import {AiFillCaretRight} from 'react-icons/ai'

import SectionHead from './SectionHead'
import { programs } from '../data'
import { Link } from 'react-router-dom'
export const Programs = () => {
  return (
    <section className="programs">
        <div className="container programs__container">
            <SectionHead icon={<FaCrown/>} title='Programs'/>
        
        <div className="programs__wrapper">
            {programs.map((program)=>{
                return(
                   <Card className='programs__program'>
                    <span>{program.icon}</span>
                    <h4>{program.title}</h4>
                    <small>{program.info}</small>
                    <Link className='btn sm' to={program.path}>Learn More <AiFillCaretRight/></Link>
                   </Card>
                )
            })}
        </div>
        </div>
    </section>
  )
}
