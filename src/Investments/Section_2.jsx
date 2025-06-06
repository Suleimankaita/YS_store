import React from 'react'
import Theamess from '../hooks/theame'
import { BiArrowToRight } from 'react-icons/bi'
import BS from "../assets/img/charts.jpg"
import inves from "../assets/img/invest.jpg"
import {Link} from "react-router-dom"
import com from "../assets/img/community.jpg"
const Section_2 = () => {
    const obj=[
        {
            id:0,
            img:inves,
            body:"Explore diverse portfolio options tailored \n to your investment goal",
            title:"Our expert management team ensures your investments are \n in capable hands",
            buttons:"Learn More",
            uri:"/Investment%20center/connections"


        },
        {
            id:1,
            img:com,
            body:"Join a community of investors and \n\r share insights effortlessly ",
            title:"Connect with fellow investors through video calls and \n screen sharing",
            buttons:"Sign Up",
            uri:"/Investment%20center/connections"

        },
        {
            id:2,
            img:BS,
            body:"Benefit from personalized strategies \n designed investment experts ",
            title:"Our team crafts tailored strategies to help you achive your \n financial goals",
            buttons:"Get Started",
            uri:"/Investment%20center/connections"
        }
    ]

    const showsObj=(
        obj.map(res=>(
            <div key={res.id} className="ms_in">
                <div className="img_ho">

                <img src={res.img}  width={"100%"} height={"250px"} />
                </div>
                <h3>{res.body}</h3>
                <h4>{res.title}</h4>
                <div>
                <Link to={res.uri}>
                <button className="lss">{res.buttons} <BiArrowToRight/></button>
                </Link>
                </div>
            </div>
        ))
    )
    const {all}=Theamess()
  return (
    <section style={all} className='section_2_investment'>

              <h2 className='max_s'>Maxmize your earnings with our high ROI <br /> invesment oppotunity </h2>
    <br /><br /><br />
        <div className="mx_ins">
        <br />
        {showsObj}
        </div>
    </section>
  )
}

export default Section_2
