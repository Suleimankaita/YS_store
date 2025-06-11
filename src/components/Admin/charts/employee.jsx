import React,{useEffect} from 'react'
import { TableContainer,Paper,Table,TableBody,TableCell,Tablec,TableRow, TableHead, } from '@mui/material'
import Theamess from '../../../hooks/theame'
import { addLength,lengths } from '../../../features/funcSlice'
import { useDispatch ,useSelector} from 'react-redux'
const employee = () => {

    const {all,theames}=Theamess()
    const dispatch=useDispatch();
    const length=useSelector(lengths)
    

    const obj=[
        {
            id:1,
            name:"suleiman",
            phone:"08134518265",
            active:new Date().toLocaleTimeString(-2000),
            role:"Admin",
            create_date:new Date().toLocaleDateString(),
            unactive:new Date().toLocaleDateString(),
            Os:"Dell"
    },
        {
            id:1,
            name:"suleiman",
            phone:"08134518265",
            active:new Date().toLocaleTimeString(-2000),
            role:"Admin",
            create_date:new Date().toLocaleDateString(),
            unactive:new Date().toLocaleDateString(),
            Os:"Dell"

    },
        {
            id:1,
            name:"suleiman",
            phone:"08134518265",
            active:new Date().toLocaleTimeString(-2000),
            role:"Admin",
            create_date:new Date().toLocaleDateString(),
            unactive:new Date().toLocaleDateString(),
            Os:"Dell"

    },
        {
            id:1,
            name:"suleiman",
            phone:"08134518265",
            active:new Date().toLocaleTimeString(-2000),
            role:"Admin",
            create_date:new Date().toLocaleDateString(),
            unactive:new Date().toLocaleDateString(),
            Os:"Dell"

    },
        {
            id:1,
            name:"suleiman",
            phone:"08134518265",
            active:new Date().toLocaleTimeString(-2000),
            role:"Admin",
            unactive:new Date().toLocaleDateString(),
            create_date:new Date().toLocaleDateString(),
            Os:"Dell"

    },
        {
            id:1,
            name:"suleiman",
            phone:"08134518265",
            active:new Date().toLocaleTimeString(-2000),
            role:"Admin",
            unactive:new Date().toLocaleDateString(),
            create_date:new Date().toLocaleDateString(),
            Os:"Dell"

    },
        {
            id:1,
            name:"suleiman",
            phone:"08134518265",
            active:new Date().toLocaleTimeString(-2000),
            role:"Admin",
            unactive:new Date().toLocaleDateString(),
            create_date:new Date().toLocaleDateString(),
            Os:"Dell"

    },
]


  return (
    <div className='tbl' >
        <br />
        <h2 style={{textAlign:"center"}}>Employee List</h2>
        <br />
        <TableContainer style={{height:"50vh"}}  component={Paper}>
        <Table style={all}>
                
                    <TableRow>
                    <TableCell   align='center'>ID</TableCell>
                    <TableCell  align='center'>Username</TableCell>
                    <TableCell  align='center'>Role</TableCell>
                    <TableCell  align='center'>Phone</TableCell>
                    <TableCell  align='center'>Active Time</TableCell>
                    <TableCell  align='center'>UnActive Time</TableCell>
                    <TableCell  align='center'>Created Date</TableCell>
                    <TableCell  align='center'>Device Name</TableCell>
                    </TableRow>   
                {obj.map(res=>(
                <TableRow sx={{"&:hover":{
                    backgroundColor:!theames?"lightgray":"gray",
                    position:"relative",
                    cursor:"pointer",
                }}}>

                        <TableCell  align='center'>{res.id}</TableCell>
                    <TableCell  align='center'>{res.name}</TableCell>
                    <TableCell  align='center'>{res.role}</TableCell>
                    <TableCell  align='center'>{res.phone}</TableCell>
                    <TableCell  align='center'>{res.active}</TableCell>
                    <TableCell  align='center'>{res.unactive}</TableCell>
                    <TableCell  align='center'>{res.create_date}</TableCell>
                    <TableCell  align='center'>{res.Os}</TableCell>
                </TableRow>
                    ))}
        </Table>
        </TableContainer>
    </div>
  )
}

export default employee