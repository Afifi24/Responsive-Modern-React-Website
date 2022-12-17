import SectionHead from "./SectionHead"
import {ImQuotesLeft} from 'react-icons/im'
import { useState } from "react"
import Card from "../UI/Card"
import {IoIosArrowDropleftCircle} from 'react-icons/io'
import {IoIosArrowDroprightCircle} from 'react-icons/io'
import { testimonials } from "../data"
export const Testemonials = () => {
  const [index,setIndex] = useState(0)
  const {name,quote,avatar,job} = testimonials[index]
  const NextTestimonial =()=>{
    setIndex(index+1)
    if(index>=testimonials.length - 1){
     setIndex(0)
    }

  }
  const PrevTestimonial =()=>{
    setIndex(index-1)
    if(index<=0){
      setIndex(testimonials.length - 1)
    }


  }

  return (
   <section className="testimonials">
    <div className="container testimonials__container">
      <SectionHead icon={<ImQuotesLeft/>} title='Testimaonials' className='testimonial__head'/>
        <Card className='testimonials'>
            <div className="testimonial__avatar">
              <img src={avatar} alt={name} />
            </div>
            <p className="testimonils__quote">
              {quote}
            </p>
            <h5>{name}</h5>
            <small className="testimonial__title">{job}</small>
        </Card>
        <div className="testimonails__btn-container">
          <div className="testimonails__btn" onClick={PrevTestimonial}><IoIosArrowDropleftCircle/></div>
          <div className="testimonails__btn" onClick={NextTestimonial}><IoIosArrowDroprightCircle/></div>
        </div>
    </div>
   </section>
  )
}
