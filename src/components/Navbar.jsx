import { Link, NavLink } from "react-router-dom"
import Logo from '../images/logo.png'
import { links } from "../data"
import {GoThreeBars} from 'react-icons/go'
import {MdOutlineClose} from'react-icons/md'

import './Navbar.css'
import { useState } from "react"
const Navbar = () => {
  const[isnavShowing,setIsNavShowing] = useState(false)
  return (
    <nav>
      <div className="container nav__container">
        <Link to='/' className="logo" onClick={()=>setIsNavShowing(false)}>
            <img src={Logo} alt="Nav logo" />
        </Link>
       <ul className={` nav__links ${isnavShowing? 'show-nav':'hide-nav'}`}>
       {links.map((item)=>(
            <li onClick={()=>setIsNavShowing(false)}>
                <NavLink to={item.path} className={({isActive})=>isActive?'active-nav':''}  >{item.name}</NavLink>
            </li>
        ))}
       </ul>
       <button onClick={()=>setIsNavShowing(!isnavShowing)} className="nav__toggle-btn">
            {isnavShowing? <MdOutlineClose/> :<GoThreeBars/>}
       </button>
      </div>
    </nav>
  )
}

export default Navbar
