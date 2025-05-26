import React from 'react';
import { BiHomeAlt,BiCategoryAlt,BiPhone,BiDoorOpen,BiCaretRight,BiCog,BiSolidUniversalAccess} from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import img from "../assets/img/h.jpg"
import Theamess from '../hooks/theame';

const Nav = ({ref_nav}) => {

  const {all}=Theamess()

  return (
    <>
    <br />
    <br />
    <div style={all} className="pops">
    <img src={img} alt="" width={"50px"} height={"50px"} />
    <h3>Suleiman yusuf kaita</h3>
    </div>
        <div style={all} className="navs_all">
    
        <ol style={all}>
    
         <NavLink style={all} to="/"> <li><BiHomeAlt/> Home</li></NavLink>
         <NavLink style={all} to={"All categories"}> <li><BiCategoryAlt/> All Categories</li></NavLink>
             <NavLink style={all} to={"Investment center"}> <li className="cas"><BiSolidUniversalAccess/>Investment center</li> </NavLink>
             <NavLink style={all} to={"Investment center"}> <li className="cas"><BiSolidUniversalAccess/>Delivery</li> </NavLink>
             <NavLink style={all} to={"Investment center"}> <li className="cas"><BiSolidUniversalAccess/>History</li> </NavLink>
             <NavLink style={all} to={"Investment center"}> <li className="cas"><BiSolidUniversalAccess/>Notification</li> </NavLink>
    
        </ol>
        <ol style={all}>
    
              <li><BiCog/> Settings</li>
              <li className="cas"><BiDoorOpen/> Logout</li> 
    
        </ol>
        </div>
        </>
  )
}

export default Nav