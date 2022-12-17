import './home.css'
import MainHeader from '../../components/MainHeader'
import { Programs } from '../../components/Programs'
import Values from '../../components/Values'
import FAQs from '../../components/FAQs'
import {Testemonials} from '../../components/Testemonials'
import { Footer } from '../../components/Footer'
export default function Home() {
  return (
    <div>

    <MainHeader/>
    <Programs/>
    <Values/>
    <FAQs/>
    <Testemonials/>
    <Footer/>
    </div>
  )
}
