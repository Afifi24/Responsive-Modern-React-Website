import './contact.css'

import HeaderImage from '../../images/header_bg_2.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import Header from '../../components/Header'

export default function Contact() {
  return (
    <>
    <Header title='Get In Touch' image={HeaderImage}>
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis culpa eaque quae maxime quaerat nam hic, commodi sequi?
    </Header>
    <section className="contact">
      <div className="container contact__container">
        <div className="contact__wrapper">
          <a href="mailto:afifi71brahim@gmail.com" target='_blank'><MdEmail/></a>
          <a href="http:// facebook.com" target='_blank'><BsMessenger/></a>
          <a href="https:/wa.me/+212614350974" target='_blank'><IoLogoWhatsapp/></a>
        </div>
      </div>
    </section>
    </>
  )
}
