import React from 'react'
import Theamess from '../../hooks/theame'
const Section_2 = () => {

    const {all}=Theamess()

  return (
    <section style={all} className='section_2'>
        <br /><br />
        <div style={all} className="section_2_content">

        <h1>Empower</h1>
        <br />
        <h2>Creating Your Own Online Shopping<br /> Company Expriance</h2>
        <br />
            <p>Our Platforms Allowes you to easily set up own shop and showcase your unique<br /> products manage your business effortlessly while reducing a wider audiance online.</p>
        </div>
        
        <div style={all} className="contentss">
            <div className="content1" >
                <h1>Explore</h1>
                <p>Explore our platform and discover the tools you need to succeed in the digital marketplace.</p>
            </div>
            <div className="content2">
                <h1>Shop</h1>
                <p>Shop from a wide range of products and enjoy a seamless shopping experience.</p>
            </div>
            <div className="content3">
                <h1>Sell</h1>
                <p>Sell your products with ease and reach a global audience.</p>
            </div>
        </div>
        <div className="company_btn" >
            <button>Start</button>
            <button>Learn more</button>
        </div>
    </section>
  )
}

export default Section_2