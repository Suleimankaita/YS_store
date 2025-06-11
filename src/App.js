import './App.css';
import Headers from './app/headers';
import Child_layout from './app/child_layout';
import { Route,Routes} from 'react-router-dom'
import Home from './components/Home1';
import Test from './components/test'
import Layouts from './app/Layouts';
import Not_found from './app/Not_found';
import Electronic_Page from './components/Electronics/page';
import Shoes from './components/Shoes/page';
import Cloths from './components/Cloths/page';
import Company from "./components/Company/Landing/Page"
import S from "./s" 
import Reader from './reader';
import Shoping from "./components/Shopping/Page"
import Item from "./components/Items/Page"
import Cart from "./components/Cart/Page"
import Allcategories from "./components/All_categories/page"
import Funiture from "./components/All_categories/funitures/page"
import Grociries from "./components/All_categories/Grociries/page"
import Kitchen from "./components/All_categories/Kitchen/page"
import Motor from "./components/All_categories/Motors/page"
import Plumbings from "./components/All_categories/Plumbing/page"
import Titles from './components/All_categories/testiles/page';
import Provision from './components/All_categories/Provision/page';
import A from './A';
import Video_call from './Investments/Connection/Video_call';  
import Investment from "./Investments/Investment"
import Connection from './Investments/Connection/Page';
import { io } from 'socket.io-client';
import Admin from "./components/Admin/Admin"
import { useEffect, useRef, useState } from 'react';
function App() {
  
   
    return (

    <Routes>
    
    <Route path={'s'} element={<S/>}/>
    <Route path={'m'} element={<Reader/>}/>

      <Route path='/' element={<Layouts/>}>
      
      <Route index element={<Home/>}/>
      <Route path={'/Home/:id'} element={<Item/>}/> 
      <Route path={'Company'} element={<Company/>}/>
      <Route path={'Cart'} element={<Cart/>}/>
      <Route path={'Investment center'} >
        <Route index element={<Investment />}/>
        <Route path='Connections'>
        <Route index element={<Connection />}/>
        <Route path='Video_call/:id' element={<Video_call />}/>
        </Route>

      </Route>
      <Route path={'Admin/:id'} element={<Admin/>} />

      <Route path={'All categories'}>
        <Route  index element={<Allcategories/>}/>
        <Route path={'Textles'} element={<Titles/>}/>
        <Route path={'Clothes'} element={<Cloths/>}/>
        <Route path={'Shoes'} element={<Shoes/>}/>
        <Route path={'Plumbings'} element={<Plumbings/>}/>
        <Route path={'Provission'} element={<Provision/>}/>
        <Route path={'Motors'} element={<Motor/>}/>
        <Route path={'Kitchen'} element={<Kitchen/>}/>
        <Route path={'Grociries'} element={<Grociries/>}/>
        <Route path={'Funitures'} element={<Funiture/>}/>
        <Route path={'Electronics'} element={<Electronic_Page/>}/>
        <Route path={'Textles/:id'} element={<Item/>}/>
        <Route path={'Funiture/:id'} element={<Item/>}/>
        <Route path={'Grociries/:id'} element={<Item/>}/>
        <Route path={'Kitchen/:id'} element={<Item/>}/>
        <Route path={'Motors/:id'} element={<Item/>}/>
        <Route path={'Plumbings/:id'} element={<Item/>}/>
        <Route path={'Provission/:id'} element={<Item/>}/>
        <Route path={'Electronics/:id'} element={<Item/>}/>
      </Route>

      <Route path={'Shopping mall'} element={<Shoping titles={"Shopping mall"} />}/>
   
      </Route>
      <Route path="*" element={<Not_found/>}/>

   
    </Routes>
  );
}

export default App;
