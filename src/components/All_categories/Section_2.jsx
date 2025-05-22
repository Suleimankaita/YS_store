import React,{useState,useEffect,useRef} from 'react'
import img from "../../assets/img/BG_shop.jpeg";
import Clothes from "../../assets/img/cloth.jpeg"
import Electronics from "../../assets/img/com.jpeg"
import Shoes from "../../assets/img/shoes.jpeg"
import plumbing from "../../assets/img/plumbing.jpeg"
import funiture from "../../assets/img/funiture.jpeg"
import car from "../../assets/img/cars.jpeg"
import provision from "../../assets/img/provision.jpeg"
import kitchen from "../../assets/img/kitchen.jpeg"
import Grociries from "../../assets/img/grociries.jpeg"
import kaftan from "../../assets/img/kaftan.jpeg"
import Theamess from '../../hooks/theame'
import { Link } from 'react-router-dom';
const Section_2 = () => {

    const {all}=Theamess()

    const [arr,setarr]=useState([
        {
            id:0,
            name:"Textles",
            img:kaftan
        },
        {
            id:0,
            name:"Electronics",
            img:Electronics
        },
        {
            id:1,
            name:"Clothes",
            img:Clothes
        },
        {
            id:2,
            name:"Shoes",
            img:Shoes
        },
        {
            id:3,
            name:"Grociries",
            img:Grociries
        },
        {
            id:4,
            name:"Kitchen",
            img
        },
        {
            id:5,
            name:"Provission",
            img:provision
        },
        {
            id:6,
            name:"Motors",
            img:car
        },
        {
            id:7,
            name:"Funitures",
            img:funiture
        },
        {
            id:8,
            name:"Plumbings",
            img:plumbing
        },
    ])

    const imgs=(
        arr.map(res=>(
            <Link to={`${res.name}`} className="mgs" style={{backgroundImage:`url(${res.img})`,position:"relative"}} key={res.id}>
                <button>{res.name}</button>
                {/* <div className="mw">

                <div className="ars">
                </div>
                    <div className="inss"></div>
                </div> */}
            </Link>
        ))
    )

  return (
    <main style={all} className='all_hero_con_2'>
        <div style={all} className="alings">

        {imgs}
        </div>
    </main>
  
)
}

export default Section_2