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

  function App() {
  
    return (

    <Routes>
    
    <Route path={'s'} element={<S/>}/>
    <Route path={'m'} element={<Reader/>}/>

      <Route path='/' element={<Layouts/>}>
      
      <Route index element={<Home/>}/>
      <Route path={'/Home/:id'} element={<Item/>}/> 
      <Route path={'Electronics'} element={<Electronic_Page/>}/>
      <Route path={'Shoes'} element={<Shoes/>}/>
      <Route path={'Clothes'} element={<Cloths/>}/>
      <Route path={'Company'} element={<Company/>}/>
      <Route path={'Shopping mall'} element={<Shoping titles={"Shopping mall"} />}/>
   
      </Route>
      <Route path="*" element={<Not_found/>}/>

   
    </Routes>
  );
}

export default App;
