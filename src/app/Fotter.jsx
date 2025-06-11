import React,{ useState } from 'react'
import { FaWhatsapp,FaFacebook,FaTwitter,FaInstagram } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Theamess from '../hooks/theame'
import logo from "../assets/img/logo1.png"
const Fotter = () => {

    const {all}=Theamess()

    return (
    <footer style={all}>
        <div className="subs" style={all}>
            <div className="hi" style={all}>

            <h1>Subscribes to update</h1>
            <p>stay informed with our latest news offers </p>
            </div>
                    <div className="sas" style={all}>

            <div className="emails" style={all}>
            <input type="text" placeholder=' Your Email Here' style={all} /> 
            {/* <span>By Subscribing you accept our Privacy Policy</span> */}

            <button>Subscribe</button>
            </div>
            <span>By Subscribing you accept our Privacy Policy</span>
            </div>

        </div>
        <div className="fotter_con" style={all}>
            <img src={logo} alt="" width={"100px"} height={"100px"} style={{borderRadius:"50%"}} />
            <div className="los">
                <h2>Quick Links</h2>
                <p>About Us</p>
                <p>Conatact Us</p>
                <p>FaQ </p>
                <p>Blogs</p>
                <p>Supports</p>
            </div>
            <div className="los">
                <h2>Resources</h2>
                <p>Helps center</p>
                <p>Community</p>
                <p>Careers</p>
                <p>Press</p>
                <p>Events</p>
            </div>
            <div className="los">
                <h2>Company</h2>
                <p>Our Story</p>
                <p>Our mission</p>
                <p>Vision</p>
                <p>Values</p>
                <p>LeaderShip</p>
            </div>
            <div className="los">
                <h2>Legal</h2>
                <p>Privacy Policy</p>
                <p>Term of Use</p>
                <p>Cokkie Policy</p>
                <p>Sitemap</p>
                <p>Feedback</p>
            </div>
            <div className="los">
                <h2>Connect</h2>
                <p>Follow Us</p>
                <p>Join Our Commuinity</p>
                <p>Share Your story</p>
                <p>Stay updated</p>
                <p>Get involved</p>
            </div>
        </div>
        <div className="all_copys" style={all}>

        <div className="copy" style={all}>
            <ul style={all}>

            <li>  <Link style={all} to={'/'}>&copy;YS Store ,All rights reserved </Link></li>
            <li><Link style={all} to={'/'}>Privacy </Link></li>
            <li><Link style={all} to={'/'}>Term of Services</Link></li>
            <li><Link style={all} to={'/'}>Cokkie settings</Link></li>
            </ul>
        </div>
        <div style={all} className="socials">
           <ul style={all}>
            <li><Link to={'/'}><FaFacebook style={{color:"rgb(10, 52, 237)"}} className='soc'/></Link></li>
            <li><Link to={"/"}><FaTwitter style={{color:" skyblue"}} className='soc'/></Link></li>
            <li><Link to={"/"}><FaInstagram style={{  color:"tomato"}} className='soc'/></Link></li>
            <li><Link to={"/"}><FaWhatsapp style={{color:"lightgreen"}} className='soc'/></Link></li>
            </ul>
        </div>
        </div>
        <br />
        <br />
        <br />
    </footer>
  )
}

export default Fotter