import React from 'react'
import img from "../assets/Suleiman.JPG"
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Section_5_ins = () => {

    const team=[
        {
            id:0,
            name:"suleiman yusuf kaita",
            rank:"CEO",
            facebookUri:"",
            LinkdinUri:"linkedin.com/in/suleiman-yusuf-kaita-92437a345",
            spaceXUri:"",
            img,
            description:`Pationate about creating innovative investment \t oppotunities for our users and plartners`

        },
        {
            id:1,
            name:"abdulmumini yusuf kaita",
            rank:"CTO",
            facebookUri:"",
            LinkdinUri:"linkedin.com/in/suleiman-yusuf-kaita-92437a345",
            spaceXUri:"",
            img,
            description:"Experts solutions that enhance user exprience and engagement"

        },
        {
            id:2,
            name:"abdulkadir yusuf kaita",
            rank:"CFO",
            facebookUri:"",
            LinkdinUri:"linkedin.com/in/suleiman-yusuf-kaita-92437a345",
            spaceXUri:"",
            img,
            description:"ensuring financial stability and growth for our investment iniatives"

        },
    ]

    const divs=(
        <div className='div_cons'>
            {team.map(res=>(
                <main className='Teams' key={res?.id}>
                    <img src={res.img} alt={res?.name} width={"150px"} height={"150px"} />
                    <br />
                    <h3>{res?.name}</h3>
                    <p>{res?.rank}</p>
                    <span>{res?.description}</span>
                    <div className="Icons">

                    <Link to={`${res?.FaTwitter}`} className="icon_X">
                        <FaTwitter/>
                    </Link>
                        <Link target='_blank' className="icon_X" to={`https://${res?.LinkdinUri}`}>
                        <FaLinkedin/>
                        </Link>
                    <Link to={res?.ins} className="icon_ins">
                        <FaInstagram/>
                    </Link>
                    </div>
                </main>

            ))}
        </div>
    )
    return (
    <article className='section_5_ins'>
      <div className="nots">

      <h4>Invest</h4>
      <h2>Our  Team</h2>
      <p>Meet the experts driving our investment platform forward</p>
      
      </div>
      <br />
      <br />
        {divs}
    </article>
  )
}

export default Section_5_ins
