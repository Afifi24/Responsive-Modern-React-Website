import Image from '../images/values.jpg'
import SectionHead from './SectionHead'
import {GiCutDiamond} from 'react-icons/gi'
import { values } from '../data'
import Card from '../UI/Card'

const Values = () => {
  return (
   <section className='values'>
       <div className="container values__container">
        <div className="values__left">
          <div className="values__image">
               <img src={Image} alt="values_image" />
          </div>

        </div>
        <div className="values__right">
           <SectionHead icon={<GiCutDiamond/>} title='Values'/>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet aspernatur libero molestiae!</p>
           <div className="values__wraper">
            {values.map((value)=>{
              return(
                <Card className={'values__value'}>
                    <span>{value.icon}</span>
                    <h4>{value.title}</h4>
                    <small>{value.desc}</small>

                </Card>
              )
            })}
           </div>
        </div>
       </div>
   </section>
  )
}

export default Values
