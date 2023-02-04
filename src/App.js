
import './App.css';
import HedCon from './HedCon';
import Navigation from './Navigation';
import LoginPage from './LoginPage';
import CourseCard from './CourseCards';
 import Footermain from './Footermain';
function App() {
   let arr=[{ched:"Python",list:'["Introduction" ,"Datatypes","condictional Statment","Functions","oops","expceptions Handeling","Files" ]', img:"https://freepngimg.com/thumb/categories/1402.png"},
   {ched:"Java",list:'["Introduction" ,"Datatypes","condictional Statment","Functions","oops","expceptions Handeling","Files" ]', img:"https://assets.stickpng.com/thumbs/58480979cef1014c0b5e4901.png"},
   {ched:"Java Script",list:'["Introduction" ,"Datatypes","condictional Statment","Functions","oops","expceptions Handeling","Files" ]', img:"https://www.freepnglogos.com/uploads/javascript-png/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png"},
   {ched:"C ",list:'["Introduction" ,"Datatypes","condictional Statment","Functions","oops","expceptions Handeling","Files" ]', img:"https://png.pngtree.com/png-vector/20210227/ourmid/pngtree-letter-c-logo-design-png-png-image_2975233.jpg"}]
let arr2=[{hed:"Company", arr:'["Adout us","In Media","Contact us", "Privacy Policy"]'}]
 return(
 <div>
    <Navigation/>
    <HedCon/>
    <LoginPage/>
    {
      arr.map((item)=><CourseCard deta={item}/>)
    }
    {
      arr2.map((item)=><Footermain info={item}/>)
    }
      
 </div>)

}

export default App;
