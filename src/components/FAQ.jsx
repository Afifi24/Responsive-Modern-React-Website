import { AiOutlinePlus } from "react-icons/ai"
import { AiOutlineMinus } from "react-icons/ai"
import { useState } from "react"
export const FAQ = ({faq}) => {
    const [isAnswerShowing,setIsAnswerShowing] = useState(false)
    const TGGle = ()=>{
        setIsAnswerShowing(!isAnswerShowing)
    }
  return (
    <article className="faq" onClick={TGGle}>
        <div>
         <h4>{faq.question}</h4>
         <button className="faq__icon" >
         {isAnswerShowing ? <AiOutlineMinus/>:<AiOutlinePlus/>}
            </button>
        </div>
        {isAnswerShowing && <p>{faq.answer}</p>}
    </article>
  )
}
