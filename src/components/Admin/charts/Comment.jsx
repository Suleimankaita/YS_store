import React,{useEffect} from 'react'
import { addLength,lengths } from '../../../features/funcSlice'
import { useDispatch ,useSelector} from 'react-redux'
import { Table,TableContainer,TableRow,TableBody,TableCell,TableHead,Paper } from '@mui/material'
import img from '../../../assets/img/Dell_Pocket_laptop.jpeg'
import Theamess from '../../../hooks/theame'
import {parseISO,formatDistanceToNow} from "date-fns"
import { FaEllipsisV } from 'react-icons/fa'
const Comment = () => {

    const dispatch=useDispatch()
    const {all,theames}=Theamess()
const length=useSelector(lengths)
     const obj=[
            {
                id:0,
                name:"suleiman",
                img:img,
                Like:0,
                remind_item:21,
                date:new Date().toISOString(),
                comment:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dolorum voluptate quam expedita delectus dolorem impedit totam, saepe ipsam, officiis doloribus excepturi eos! Voluptatibus, quisquam ea inventore in praesentium blanditiis.'
            },
            {
                id:0,
                name:"suleiman",
                img:img,
                Like:0,
                remind_item:21,
                date:new Date().toISOString(),
                comment:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dolorum voluptate quam expedita delectus dolorem impedit totam, saepe ipsam, officiis doloribus excepturi eos! Voluptatibus, quisquam ea inventore in praesentium blanditiis.'
            },
            {
                id:0,
                name:"suleiman",
                img:img,
                Like:0,
                remind_item:21,
                date:new Date().toISOString(),
                comment:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dolorum voluptate quam expedita delectus dolorem impedit totam, saepe ipsam, officiis doloribus excepturi eos! Voluptatibus, quisquam ea inventore in praesentium blanditiis.'
            },
            {
                id:0,
                name:"suleiman",
                img:img,
                Like:0,
                remind_item:21,
                date:new Date().toISOString(),
                comment:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dolorum voluptate quam expedita delectus dolorem impedit totam, saepe ipsam, officiis doloribus excepturi eos! Voluptatibus, quisquam ea inventore in praesentium blanditiis.'
            },
            {
                id:0,
                name:"suleiman",
                img:img,
                Like:0,
                remind_item:21,
                date:new Date().toISOString(),
                comment:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dolorum voluptate quam expedita delectus dolorem impedit totam, saepe ipsam, officiis doloribus excepturi eos! Voluptatibus, quisquam ea inventore in praesentium blanditiis.'
            },
            {
                id:0,
                name:"suleiman",
                img:img,
                 Like:0,
                remind_item:21,
                date:new Date().toISOString(),
                comment:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dolorum voluptate quam expedita delectus dolorem impedit totam, saepe ipsam, officiis doloribus excepturi eos! Voluptatibus, quisquam ea inventore in praesentium blanditiis.'
            },
            {
                id:0,
                name:"suleiman",
                img:img,
                 Like:0,
                remind_item:21,
                date:new Date().toISOString(),
                comment:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dolorum voluptate quam expedita delectus dolorem impedit totam, saepe ipsam, officiis doloribus excepturi eos! Voluptatibus, quisquam ea inventore in praesentium blanditiis.'
            },
            {
                id:0,
                name:"suleiman",
                img:img,
                 Like:0,
                remind_item:21,
                date:new Date().toISOString(),
                comment:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dolorum voluptate quam expedita delectus dolorem impedit totam, saepe ipsam, officiis doloribus excepturi eos! Voluptatibus, quisquam ea inventore in praesentium blanditiis.'
            },
            {
                id:0,
                name:"suleiman",
                img:img,
                 Like:0,
                remind_item:21,
                date:new Date().toISOString(),
                comment:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dolorum voluptate quam expedita delectus dolorem impedit totam, saepe ipsam, officiis doloribus excepturi eos! Voluptatibus, quisquam ea inventore in praesentium blanditiis.'
            },
            {
                id:0,
                name:"suleiman",
                Like:0,
                remind_item:21,
                img:img,
                Like:0,
                date:new Date().toISOString(),
                comment:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dolorum voluptate quam expedita delectus dolorem impedit totam, saepe ipsam, officiis doloribus excepturi eos! Voluptatibus, quisquam ea inventore in praesentium blanditiis.'
            },
        ]

            useEffect(()=>{
                
                dispatch(addLength(obj.length))
                return()=>{

                    dispatch(addLength(obj.length))
                }
        
            },[length,dispatch])
        
  return (
//  <TableContainer className='scrl' style={all} component={Paper}>
        
//             <Table style={all} >
//                     <TableRow>

//                         <TableCell  align='center'>name</TableCell>
//                         <TableCell  align='center'>Likes</TableCell>
//                         <TableCell  align='center'>remind item</TableCell>
//                         <TableCell  align='center'>Product image</TableCell>
//                     </TableRow>
                
//         {/* <TableHead> */}
//                 <TableBody style={all}>

//                     {/* </TableHead> */}
//         {obj.map(res=>(
//                     <TableRow  sx={{'&:hover':{
//                         backgroundColor:"lightgray",
//                         cursor:"pointer",
//                     }}}>
//             <TableCell  sx={{color:theames?'whitesmoke':null}} align='center'>{res?.name}</TableCell>    
//             <TableCell  sx={{color:theames?'whitesmoke':null}}  align='center'>{res?.Like}</TableCell>    
//             <TableCell  sx={{color:theames?'whitesmoke':null}}  align='center'>{res?.remind_item}</TableCell>    
//             <TableCell  sx={{color:theames?'whitesmoke':null}}  align='center'><img src={res?.img} width={40} height={40} style={{borderRadius:"50%"}}/></TableCell>    
//             {/* // <div style={all} key={res?.id} className="items_cons">
//                 // <p>name : {res?.name}</p>
//                 // <p>Like : {res?.Like}</p>
//                 // <p>remind : {res?.remind_item}</p>
//                 // <img src={res?.img} alt="" style={{borderRadius:'50%'}} width={70} height={70} />
//                 // </div> */}
//         </TableRow>

//         ))}
//                 </TableBody>

//         </Table>
//         <br />
//         </TableContainer>
    <div className="user_comment" style={all}>

            { obj.length?(

            
            obj.flatMap(res=>{
                const date_now = parseISO(res.date);
                return(
                <div style={all} className="User_com" key={res.id}>
                    <div className="boys">

                    <div className="lswa">
                        <div className="k">

                    <img src={res?.img} alt={res?.name} width={50} height={50} style={{borderRadius:"50%"}} />
                    <p style={{textAlign:"start",marginLeft:10}}>{res.name}</p>
                        </div>
                    <FaEllipsisV/>
                    </div>

                    <div className="bodys">

                    <p className='p1'>{res?.comment}</p> 
                    <p style={{textAlign:"end"}}>{formatDistanceToNow(date_now)} ago</p>
                     </div>
                    </div>
                </div>
            )})
            ):(
                <main style={{height:"100%",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                <p style={{textAlign:"center"}}>No Comment To display</p>
                </main>
        )
        }
    </div>
)
}

export default Comment