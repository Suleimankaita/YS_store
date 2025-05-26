import React from 'react'
import theames from "../hooks/theame"
const Section_1 = () => {
  const {all}=theames()
  return (
    <main style={all} className='Investment_sec1'>

      <div style={all} className="invest_content_1">

        <div className="strss" style={all}>


        <div className="pH1" style={all}>

        <h2>Discover the Benifits of investing in <br /> Our Ecomerce Platform Today!</h2>

       &nbsp;&nbsp; <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat  blanditiis cumque incidunt omnis harum officiis!</p>

        <div className="kwq" style={all}>
          <div className="lw1" style={all}>

          <h3>Growth</h3>
          <span>Maximize your returns with <br /> startegic investments</span>
          
          </div>
          
          <div className="lw1" style={all}>

          <h3>connection</h3>
          <span>Engage with investors throgth video calls</span>
          </div>
        </div>
          
        </div>

         {/* <div className="btn_feature2 soss" >
        <button>Join</button>
        <button>Learn More</button>
      </div> */}
        </div>

      </div>
      <div className="invest_content_2" style={all}>
        <div className="strss" style={all}>

        <div className="sp_w1"></div>
        </div>
      </div>
    </main>
  )
}

export default Section_1


