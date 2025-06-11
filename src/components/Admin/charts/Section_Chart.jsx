// import React, { useEffect, useState } from 'react'
// import { Bar,Doughnut,Line,Pie } from 'react-chartjs-2'
// import Usechange_title from '../../../hooks/Usechange_title';
// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     ArcElement,
//     PointElement,
//     LineElement,
//     Tooltip,
//     Legend,
//     plugins,


//          } from 'chart.js';

// ChartJS.register(CategoryScale,
//    CategoryScale,
//        LinearScale,
//        BarElement,
//        Title,
//        ArcElement,
//        PointElement,
//        LineElement,
//        Tooltip,
//        Legend,
//        plugins,
//         );
// import Theamess from '../../../hooks/theame';
// import { BiAward } from 'react-icons/bi';
// import { useParams } from 'react-router-dom';
// import { FaBoxOpen, FaRavelry } from 'react-icons/fa';
// import Ordered from './Ordered';

// const Section_Chart = () => {
    
//     const {id}=useParams()
//     const[ ass,setass]=useState(100);
//     const {all,theames}=Theamess()

//     Usechange_title({titles:id})

//     useEffect(() => {
//         setInterval(()=>{
//             setass(Math.floor(Math.random()*20000))
//         },10000)
//     },[])
//     return (

//     <main style={all} className='Section_1_chart'>

//         <div style={all} className="charts_boxs">


//     <div style={all} className="inline_charts">
    
//     <div style={all} className='Box_chart'>
    
//     <div style={all} className='boxs'>
//         <br />
//     <h3>Welcome {"Name"}</h3>
//     <span>YS store Company limited  </span>
//     </div>
    
//     <div className='boxs'>
//     <h1>₦{Number.parseInt(ass*2).toLocaleString()}</h1>
//     </div>
   
//     <div className='boxs2'>
//         <div className='boxs_2'>
//        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis animi nisi </span>
//        <button className='btns'>Change</button>
//         </div>
//         <BiAward style={{fontSize:100}}/>
//     </div>
//         </div>

//  <div style={all} className='Box_chart'>
//     <div style={all} className='boxs'>
      
//       <Line   data={{
//         labels:['mon',"tue",'mon',"tue",'mon',"tue",'mon',"tue",'mon',"tue",'mon',"tue"],
//         datasets:[{
//                 label:"hh",
//                 data:[ass*3,ass*4,ass*5,21,22,10,22,11,21,ass*7,2,3,4,3,ass*5],
//                 borderColor:'skyblue',
//                 borderJoinStyle:'bevel',
//                 borderWidth:3,
//                 hoverBorderWidth:3,
//                 pointBorderColor:"transparent",
//                 pointBorderWidth:5,
//                 pointHighlightStroke: 'rgba(178, 61, 61, 0)',
            
//             // pointBackgroundColor:"transparent",
//             fill:{
//                 target: { value: 1 },
//                 above:"rgba(128, 194, 252, 0.46)",
//             },
//             tension:.5,
//             backgroundColor:['rgb(46, 155, 251)','rgb(229, 88, 208)','rgb(140, 223, 101)']
//         }]

//       }}
//       options={ 
// {          responsive:true,
//                   maintainAspectRatio:false,
//                   plugins:{
//                   legend:{display:true}},
//                   scales:{
//                     x:{
//                         grid:{display:false},
//                         border:{display:false},
//                         ticks:{display:false},
                    
//                     },
//                     y:{
//                         grid:{display:false},
//                         border:{display:false},
//                         ticks:{display:false},
//                     },
//                   } 

//       }}
//       />
//         </div>
//         </div>
        
//         <div className='flat_b' style={all}>
        
//         <div className="flat_flex" style={all}>
//             <div className="small_box" style={all}>
//                 <button className='boxsa' >

//                 <FaBoxOpen className='boxsa2'/>
//                 </button>
//                 <span className='kqz'>Order</span>
//                 <span >1.2k</span>
//             </div>
            
//             <div className="small_box" style={all}>
//                 <button className='boxsa' >

//                 <FaRavelry className='boxsa2'/>
//                 </button>
//                 <span className='kqz'>Order</span>
//                 <span >1.2k</span>
//             </div>
//         </div>


//         <div style={all} className="charts_flex">
//              <Bar data={ {labels:['January', 'February','January', 'February','January', 'February','January', 'February','January', 'February','January', 'February'],
//     datasets:[
//       {
//         label:"",
//         data:[21,33,21,31,33,21,33,ass*2,ass/2,ass],
//         boderWidth:2,
//         hoverOffset:4,
//         borderColor:"rgb(170, 170, 170)",
//         pointStyle:'circle',
//         pointerRadius:10,
//         borderWidth:1,
//         backgroundColor:"rgb(67, 177, 189)"
//       }
//     ]
//   }}  options={
//         {
//             responsive: true,
//             maintainAspectRatio: false,

//             plugins: {
//             legend: {
//                 position: 'top',
//             },
//             title: {
//                 display: true,
//                 text: 'Total employes',
//             },
//             },
//             layout: {
//                 padding: {
//                     top: 5,
//                     bottom: -7,
//                 }
//             },
//              scales:{
//               x:{
//                 border:{display:false},
//                 grid:{display:false},
//                 ticks:{display:false},
//               },
//               y:{
//                 border:{display:false},
//                 grid:{display:false},
//                 ticks:{display:false},
//               },
//              },
//         }
//     }/>
//         </div>
//         </div>
//     </div>


// <main className="psl" style={all}>


//         <div style={all} className="Line_box">
            
//             <div style={all} className="linesa">
//                 <Line data={{
//                     labels:['mon','tue','mon','tue'],
//                 datasets:[{
//                     label:"Line",
//                     data:[1,2,ass/2,ass*5,ass*10],
//                     pointBackgroundColor:"red",
//                     pointHoverBackgroundColor:"blue",
//                     pointBorderColor:"green",
//                     borderColor:"gray",
//                     borderWidth:5,
//                     pointBorderWidth:5,
//                     fill:{
//                         target:{value:1},
//             }
//                 , 

//                 borderColor: 'rgba(151, 187, 205, 1)',
//                 pointBorderColor: 'rgb(192, 209, 225)',
//                 tension:0.7
                    
//                 }]
//             }}
//             options={{
//                 maintainAspectRatio:false,
//                 responsive:true,
//                 plugins:{
//                     title:"sss"
//                 },
//                 // scales:{
//                 //     x:{
//                 //         border:{display:false},
//                 //         ticks:{display:false},
//                 //         grid:{display:false}
//                 //     },
//                 //     y:{
//                 //         border:{display:false},
//                 //         ticks:{display:false},
//                 //         grid:{display:false}
//                 //     },
//                 // }
//             }}
//             />
//             </div>
//             <div style={all} className="progress">

//             <h3>Products Status</h3>

//             <div className="flxs">
//                     <p>Active products</p>
//                 <p>{Number(2132).toLocaleString()}</p>
//             </div>
//             <div className="flxs">
//                     <p>Delivered products</p>
//                 <p>{Number(2132).toLocaleString()}</p>
//             </div>
//             <div className="flxs">
//                     <p>Inactive products</p>
//                 <p>{Number(2132).toLocaleString()}</p>
//             </div>
//             <h2 className='rts'>Rates status  <span>({(ass /100)*100} %)</span></h2>
//             <div className="pro_size">

//                 <progress className='progress_bar' value={ass} max={ass+1000}  color='red'></progress>
               
//             </div>
//             </div>
//         </div>
//             <Ordered/>
// </main>



//         </div>


//     </main>
//   )
// }

// export default Section_Chart

import React, { useEffect, useState } from 'react'
import { Bar, Doughnut, Line, Pie } from 'react-chartjs-2'
import Usechange_title from '../../../hooks/Usechange_title';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    ArcElement,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    plugins,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    ArcElement,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    plugins,
);

import Theamess from '../../../hooks/theame';
import { BiAward } from 'react-icons/bi';
import { useParams } from 'react-router-dom';
import { FaBoxOpen, FaRavelry } from 'react-icons/fa';
import Ordered from './Ordered';

const Section_Chart = () => {

    const { id } = useParams();
    const [ass, setass] = useState(100);
    const [prevAss, setPrevAss] = useState(100);
    const { all, theames } = Theamess();

    Usechange_title({ titles: id });

    useEffect(() => {
        const interval = setInterval(() => {
            setass(Math.floor(Math.random()* 100000));
            setPrevAss(Math.trunc(ass));
        }, 1000);

        return () => clearInterval(interval);
    }, [ass]);

    const upcomingAmount = Number(ass * 2).toFixed();
    const amt=100000;
    const previousAmount = prevAss * 2;
    const percentageChange = prevAss === 0 ? 0 :ass>=amt?100: (((ass) / amt) * 100).toFixed(2)
    let perc;
    if(ass>=amt){
       perc=100
    }else if(ass<=amt){
       perc=Math.round((ass / amt) * 100)

    }
    

    return (

        <main style={all} className='Section_1_chart'>

            <div style={all} className="charts_boxs">

                <div style={all} className="inline_charts">

                    <div style={all} className='Box_chart'>

                        <div style={all} className='boxs'>
                            <br />
                            <h3>Welcome {"Name"}</h3>
                            <span>YS store Company limited</span>
                        </div>

                        <div className='boxs'>
                            <h1>₦{Number.parseInt(upcomingAmount).toLocaleString()}</h1>
                            <p style={{ color: percentageChange >= 0 ? 'green' : 'red' }}>
                                {percentageChange}% {percentageChange >= 0 ? '↑' : '↓'}
                            </p>
                        </div>

                        <div className='boxs2'>
                            <div className='boxs_2'>
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis animi nisi </span>
                                <button className='btns'>Change</button>
                            </div>
                            <BiAward style={{ fontSize: 100 }} />
                        </div>
                    </div>

                    <div style={all} className='Box_chart'>
                        <div style={all} className='boxs'>
                            <Line data={{
                                labels: ['mon', "tue", 'mon', "tue", 'mon', "tue", 'mon', "tue", 'mon', "tue", 'mon', "tue"],
                                datasets: [{
                                    label: "hh",
                                    data: [ass * 3, ass * 4, ass * 5, 21, 22, 10, 22, 11, 21, ass * 7, 2, 3, 4, 3, ass * 5],
                                    // borderColor: 'skyblue',
                                    // borderJoinStyle: 'bevel',
                                    // borderWidth: 3,
                                    // hoverBorderWidth: 3,
                                    // pointBorderColor: "transparent",
                                    // pointBorderWidth: 5,
                                    // pointHighlightStroke: 'rgba(178, 61, 61, 0)',
                                    // fill: {
                                    //     target: { value: 1 },
                                    //     above: "rgba(128, 194, 252, 0.46)",
                                    // },
                                    // tension: .5,
                                    // backgroundColor: ['rgb(46, 155, 251)', 'rgb(229, 88, 208)', 'rgb(140, 223, 101)']
                                    label:'Userchart',
          borderWidth: 2,
               fill: {
                above:'rgb(18, 131, 237)',}, 
              pointHighlightStroke: 'rgba(178, 61, 61, 0)',

              borderColor: 'rgba(151, 187, 205, 1)',
              pointHighlightFill: '#fff',
                  pointHighlightStroke: 'rgba(151, 187, 205, 1)',
              pointBackgroundColor: 'rgb(98.171875, 96.5, 203.5)',
            pointBorderColor: 'rgb(98.171875, 96.5, 203.5)',
            pointRadius:4,

                tension:0.4
                                }]
                            }}
                                options={{
                                    responsive: true,
                                    maintainAspectRatio: false,
                                    plugins: {
                                        legend: { display: true }
                                    },
                                    scales: {
                                        x: {
                                            grid: { display: false, },
                                            border: { display: false },
                                            ticks: { display: false },
                                        },
                                        y: {
                                            grid: { display: false },
                                            border: { display: false },
                                            ticks: { display: false },
                                        },
                                    }
                                }}
                            />
                        </div>
                    </div>

                    <div className='flat_b' style={all}>

                        <div className="flat_flex" style={all}>
                            <div className="small_box" style={all}>
                                <button className='boxsa' >
                                    <FaBoxOpen className='boxsa2' />
                                </button>
                                <span className='kqz'>Order</span>
                                <span >{Math.round(prevAss/1000)}</span>
                            </div>

                            <div className="small_box" style={all}>
                                <button className='boxsa' >
                                    <FaRavelry className='boxsa2' />
                                </button>
                                <span className='kqz'>Order</span>
                                <span >{Math.round(prevAss/1000)}</span>
                            
                            </div>
                        </div>

                        <div style={all} className="charts_flex">
                            <Bar data={{
                                labels: ['January', 'February', 'January', 'February', 'January', 'February', 'January', 'February', 'January', 'February', 'January', 'February'],
                                datasets: [
                                    {
                                        label: "",
                                        data: [21, 33, 21, 31, 33, 21, 33, ass * 2, ass / 2, ass],
                                        // boderWidth: 2,
                                        // hoverOffset: 4,
                                        // borderColor: "rgb(170, 170, 170)",
                                        // pointStyle: 'circle',
                                        // pointerRadius: 10,
                                        // borderWidth: 1,
                                        // backgroundColor: "rgb(67, 177, 189)"
                                         label:'man',
          boderWidth:8,
          fill:false,
            pointRadius:4,

          // pointHighlightFill:4,
          tension:0.4,

          borderColor: 'rgb(219, 132, 33)',
          backgroundColor:["rgb(255, 157, 0)",'rgb(0, 149, 255)'],

          hoverOffset:3,
                                    }
                                ]
                            }} options={{
                                responsive: true,
                                maintainAspectRatio: false,
                                plugins: {
                                    legend: {
                                        position: 'top',
                                    },
                                    title: {
                                        display: true,
                                        text: 'Total employes',
                                    },
                                },
                                layout: {
                                    padding: {
                                        top: 5,
                                        bottom: -7,
                                    }
                                },
                                scales: {
                                    x: {
                                        border: { display: false },
                                        grid: { display: false },
                                        ticks: { display: false },
                                    },
                                    y: {
                                        border: { display: false },
                                        grid: { display: false },
                                        ticks: { display: false },
                                    },
                                },
                            }} />
                        </div>
                    </div>
                </div>

                <main className="psl" style={all}>

                    <div style={all} className="Line_box">

                        <div style={all} className="linesa">
                            <Line data={{
                                labels: ['mon', 'tue', 'mon', 'tue'],
                                datasets: [{
                                    label: "Line",
                                    data: [1, 2, ass / 2, ass * 5, ass * 10],
                                    pointBackgroundColor: "red",
                                    pointHoverBackgroundColor: "blue",
                                    pointBorderColor: "green",
                                    borderColor: "gray",
                                    borderWidth: 5,
                                    pointBorderWidth: 5,
                                    fill: {
                                        target: { value: 1 },
                                    },
                                    borderColor: 'rgba(151, 187, 205, 1)',
                                    pointBorderColor: 'rgb(192, 209, 225)',
                                    tension: 0.7
                                }]
                            }}
                                options={{
                                    maintainAspectRatio: false,
                                    responsive: true,
                                    plugins: {
                                        title: "sss"
                                    },
                                    scales:{
                                        y:{
                                        border:{color:!theames?undefined:"white"},
                                        grid:{color:!theames?undefined:"white"},
                                        ticks:{color:!theames?undefined:"white"},
                                    },
                                        x:{
                                        border:{color:!theames?undefined:"white"},
                                        grid:{color:!theames?undefined:"white"},
                                        ticks:{color:!theames?undefined:"white"},
                                    },

                                    }

                                }}
                            />
                        </div>
                        <div style={all} className="progress">

                            <h3>Products Status</h3>

                            <div className="flxs">
                                <p>Active products</p>
                                <p>{Number(2132).toLocaleString()}</p>
                            </div>
                            <div className="flxs">
                                <p>Delivered products</p>
                                <p>{Number(2132).toLocaleString()}</p>
                            </div>
                            <div className="flxs">
                                <p>Inactive products</p>
                                <p>{Number(2132).toLocaleString()}</p>
                            </div>
                            <h2 className='rts'>Rates status  <span>({perc}%)</span></h2>
                            <div className="pro_size">

                                <progress className='progress_bar' value={ass} max={amt} color='red'></progress>

                            </div>
                        </div>
                    </div>
                    <Ordered />
                </main>

            </div>

        </main>
    )
}

export default Section_Chart
