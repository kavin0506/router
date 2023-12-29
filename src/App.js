
import './App.css';
import Card from './card';
import Nav from './Nav';
import { Route,Routes} from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Form from './Form';
import Dashboard from './Dashboard';
import Veg from './Veg';
import Biryani from './Biriyani';
import Params from './Params';

function App() {
  const swiggy=[
    {
      image:"./image/83650.jfif" ,
      branch:"Ambur Star Briyani",
      rating:4.3,
      time:27,
      dish:"Briyani",
      location:"kottivakkam"  
     },
     {
      image:"./image/bb7.jfif" ,
      branch:"McDonald's",
      rating:4.2,
      time:16,
      dish:"Burgers, Beverages",
      location:"Nehru Nagar",  
     },
     {
      image:"./image/f8d6.jfif" ,
      branch:"Domino's Pizza",
      rating:4.3,
      time:31,
      dish:"Pizzas, Italian",
      location:"Karapakkam",  
     },
     {
      image:"./image/fxo.jfif" ,
      branch:"Geetham Veg restaurant",
      rating:4.5,
      time:21,
      dish:"South Indian",
      location:"Thuraipakkam (OMR)",  
     },
     {
      image:"./image/ebsxy.jfif" ,
      branch:"Burger King",
      rating:4.1,
      time:30,
      dish:"Burgers, American",
      location:"Kancheepuram",  
     },
     {
      image:"./image/bdcd.jfif" ,
      branch:"KFC",
      rating:4.1,
      time:16,
      dish:"Burgers, Biryani",
      location:"OMR-Perungudi",  
     },
     {
      image:"./image/o18x.jfif" ,
      branch:"Astoria Veg",
      rating:4.2,
      time:29,
      dish:"Indian, Chinese, Beverages",
      location:"Thuraipakkam",  
     },
     {
      image:"./image/byyv.jfif" ,
      branch:"Andhra Gunpowder",
      rating:4.2,
      time:21,
      dish:"Andhra, Biryani, South Indian",
      location:"OMR Perungudi",  
     },
     {
      image:"./image/tmngal.jfif" ,
      branch:"Mani's Dum Biryani",
      rating:4.3,
      time:21,
      dish:"Andhra, Biryani, North Indian",
      location:"Karapakkam",  
     },
     {
      image:"./image/bc00.jfif" ,
      branch:"The Royal's Biryani",
      rating:4.1,
      time:22,
      dish:"Mughlai, North Indian",
      location:"Perungudi",  
     },
  ]
  return (
    <div className="App">
       
      <Routes>
        <Route path='/' element={<Nav/>}/>
        <Route path='/params/:num' element={<Params/>}/>
        <Route path='/products' element={<Card  menu={swiggy}/>}/>
        <Route path='/about' element={<About/> }/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='*' element={<Error/>} />
        <Route path='/Dash' element={<Dashboard/>} />
        <Route path="/food">
          <Route path='veg' element={<Veg/>}/>
          <Route path='biriyani' element={<Biryani/>}/>
        </Route>
      </Routes>
       <Form/>
    </div>
  );
}

export default App;
