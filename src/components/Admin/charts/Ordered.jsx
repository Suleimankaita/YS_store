import React,{ useState ,useEffect,useRef,useMemo} from 'react'
import Theamess from '../../../hooks/theame'
import img from '../../../assets/img/Dell_Pocket_laptop.jpeg'
import Comment from './Comment'
import {Table,TableRow,TableHead,Paper, TableCell, TableBody, TableContainer} from '@mui/material'
import { useDispatch,useSelector } from 'react-redux'
import { lengths,addLength } from '../../../features/funcSlice'
const Ordered = () => {
    const {all,theames}=Theamess()
    const [active,setactive]=useState('Todays Order')
    const length=useSelector(lengths)
    const obj=[
        {
            id:0,
            name:"suleiman",
            img:img,
             Like:0,
            remind_item:21,
            date:new Date().toLocaleDateString(),

        },
        {
            id:0,
            name:"suleiman",
            img:img,
             Like:0,
            remind_item:21,
            date:new Date().toLocaleDateString(),

        },
        {
            id:0,
            name:"suleiman",
            img:img,
             Like:0,
            remind_item:21,
            date:new Date().toLocaleDateString(),

        },
        {
            id:0,
            name:"suleiman",
            img:img,
             Like:0,
            remind_item:21,
            date:new Date().toLocaleDateString(),

        },
        {
            id:0,
            name:"suleiman",
            img:img,
             Like:0,
            remind_item:21,
            date:new Date().toLocaleDateString(),

        },
        {
            id:0,
            name:"suleiman",
            Like:0,
            remind_item:21,
            img:img,
            Like:0,
            date:new Date().toLocaleDateString(),

        },
        {
            id:0,
            name:"suleiman",
            img:img,
             Like:0,
            remind_item:21,
            date:new Date().toLocaleDateString(),

        },
        {
            id:0,
            name:"suleiman",
            img:img,
             Like:0,
            remind_item:21,
            date:new Date().toLocaleDateString(),

        },
        {
            id:0,
            name:"suleiman",
            img:img,
             Like:0,
            remind_item:21,
            date:new Date().toLocaleDateString(),

        },
        {
            id:0,
            name:"suleiman",
            img:img,
             Like:0,
            remind_item:21,
            date:new Date().toLocaleDateString(),

        },
        {
            id:0,
            name:"suleiman",
            img:img,
             Like:0,
            remind_item:21,
            date:new Date().toLocaleDateString(),

        },
        {
            id:0,
            name:"suleiman",
            Like:0,
            remind_item:21,
            img:img,
            Like:0,
            date:new Date().toLocaleDateString(),

        },
    ]

    const dispatch=useDispatch()

    useEffect(()=>{
        if(active==="Todays Order"){
                dispatch(addLength(obj.length))
                
            }else if(active==="Delivered"){
                dispatch(addLength(3))
                
            }
    },[active])


    const content=(
            <section className='items_cont' style={all}>
        {obj.length&&active==="Todays Order"?(
            <TableContainer className='scrl' style={all} component={Paper}>
        
            <Table style={all} >
                    <TableRow>

                        <TableCell align='center'>name</TableCell>
                        <TableCell  align='center'>Likes</TableCell>
                        <TableCell sx={{display:{xs:"table-cell",sm:"table-cell"}}}   align='center'>remind item</TableCell>
                        <TableCell  align='center'>Product image</TableCell>
                    </TableRow>
                
        {/* <TableHead> */}
                <TableBody style={all}>

                    {/* </TableHead> */}
        {obj.map(res=>(
                    <TableRow  sx={{'&:hover':{
                    backgroundColor:!theames?"lightgray":"gray",
                        cursor:"pointer",
                    }}}>
            <TableCell  sx={{color:theames?'whitesmoke':null}} align='center'>{res?.name}</TableCell>    
            <TableCell  sx={{color:theames?'whitesmoke':null,display:{xs:"table-cell",sm:"table-cell"}}}  align='center'>{res?.Like}</TableCell>    
            <TableCell  sx={{color:theames?'whitesmoke':null,}}  align='center'>{res?.remind_item}</TableCell>    
            <TableCell  sx={{color:theames?'whitesmoke':null}}  align='center'><img src={res?.img} width={40} height={40} style={{borderRadius:"50%"}}/></TableCell>    
            {/* // <div style={all} key={res?.id} className="items_cons">
                // <p>name : {res?.name}</p>
                // <p>Like : {res?.Like}</p>
                // <p>remind : {res?.remind_item}</p>
                // <img src={res?.img} alt="" style={{borderRadius:'50%'}} width={70} height={70} />
                // </div> */}
        </TableRow>

        ))}
                </TableBody>

        </Table>
        <br />
        </TableContainer>
    ):active==="Comments"?(
        <Comment/>
    ):!obj.length?(
  <main style={{height:"100%",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                <p style={{textAlign:"center"}}>Empty Order</p>
                </main>
    ):(
            <TableContainer className='scrl' style={all} component={Paper}>
        
            <Table style={all} >
                    <TableRow>

                        <TableCell align='center'>name</TableCell>
                        <TableCell  align='center'>Likes</TableCell>
                        <TableCell sx={{display:{xs:"table-cell",sm:"table-cell"}}}   align='center'>remind item</TableCell>
                        <TableCell  align='center'>Product image</TableCell>
                    </TableRow>
                
        {/* <TableHead> */}
                <TableBody style={all}>

                    {/* </TableHead> */}
        {obj.map(res=>(
                    <TableRow  sx={{'&:hover':{
                    backgroundColor:!theames?"lightgray":"gray",
                        cursor:"pointer",
                    }}}>
            <TableCell  sx={{color:theames?'whitesmoke':null}} align='center'>{res?.name}</TableCell>    
            <TableCell  sx={{color:theames?'whitesmoke':null,display:{xs:"table-cell",sm:"table-cell"}}}  align='center'>{res?.Like}</TableCell>    
            <TableCell  sx={{color:theames?'whitesmoke':null,}}  align='center'>{res?.remind_item}</TableCell>    
            <TableCell  sx={{color:theames?'whitesmoke':null}}  align='center'><img src={res?.img} width={40} height={40} style={{borderRadius:"50%"}}/></TableCell>    
            {/* // <div style={all} key={res?.id} className="items_cons">
                // <p>name : {res?.name}</p>
                // <p>Like : {res?.Like}</p>
                // <p>remind : {res?.remind_item}</p>
                // <img src={res?.img} alt="" style={{borderRadius:'50%'}} width={70} height={70} />
                // </div> */}
        </TableRow>

        ))}
                </TableBody>

        </Table>
        <br />
        </TableContainer>
    )}
        
    </section>
    )

    const btn=["Todays Order","Delivered","Comments"]

  return (
    <main className="Btn_elements" style={all}>
        
        <div  className='buttons_class' style={all}>
        <span style={{position:"absolute",width:"30px",display:"flex",justifyContent:"center",alignItems:"center",height:"30px",fontSize:"15px", backgroundColor:"tomato",borderRadius:"50%",transform:'translate(-170px,10px)',color:"whitesmoke"}}>{length>0?length:null}</span>
        {btn.map((res,_)=>(

        <button key={_} style={all} onClick={()=>{
            
            setactive(res)} } className={active===res?'ons':"offs"}>{res} </button>
    ))}
    </div>
        
        {content}
    
    </main>

  )
}

export default React.memo(Ordered)