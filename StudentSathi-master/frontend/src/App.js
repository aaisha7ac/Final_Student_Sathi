import logo from './logo.svg';
import Front from './components/front';
import Course from './components/course/course.jsx';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Nav from './components/navbar/navbar.jsx';
import './components/main.css';

import Login from './components/login/login.jsx';
import SignUp from './components/login/signup.jsx';
import Details from './components/coursedetails/Details.jsx';
import HandleUniversity from './components/universities/university.jsx';
import Contact from './components/Contact/contact.jsx';
import Carriers from './components/carriers/Carriers.jsx';



import './App.css';

function App() {

  return (
        <>
        <BrowserRouter>
        <Nav/>        
        <Routes>
    <Route path="/" element={<Front/>}/>
    <Route path="/Coursedetails/:index" element={<Details/>}/>  
    <Route path="/Course" element={<Course  />}/>
    <Route path="/login" element={<Login />}/>
    <Route path="/signup" element={<SignUp/>}/> 
    <Route path="/Universities1"element={<Login/>}/>
    <Route path="/Universities1/:university" element={<Login/>}/>
    <Route path="/Universities"element={<HandleUniversity/>}/>
    <Route path="/Universities/:university" element={<HandleUniversity/>}/>  
     <Route path="/Contact" element={<Contact/>}/>
     <Route path="/Carriers" element={<Carriers/>}/>
     <Route path="/Carriers/:courseCarriers" element={<Carriers/>}/>
    </Routes>
     
    </BrowserRouter>  
    </>
  );
}

export default App;
