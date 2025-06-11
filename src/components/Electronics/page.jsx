import React from 'react'
import Product_Com from './functions'
import elec from "../../assets/img/com.jpeg"
import Usechange_title from '../../hooks/Usechange_title'
const page = () => {
      Usechange_title({titles:"Electronics"})
  
  return (
    <article>

        <div className="bans" style={{backgroundImage:`url(${elec})`}}>
        <div className="lps">
        <h1>Electronics</h1>
        <div className="pqs">

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente laudantium debitis dolores, autem iusto cupiditate animi ea dignissimos sit, nam obcaecati veniam ex suscipit aperiam omnis! Maiores expedita asperiores fugiat.</p>
</div>
        
        <div className="bx" >
        <div className="dot"></div>         
      </div>

      </div>
        </div>
        <Product_Com/>
    </article>
  )
}

export default page