
import { useEffect, useState } from 'react';
import logo from './Logo.png';
import { useLocation } from 'react-router-dom';
function Nav(){
    const [showLog , setSowLog] = useState(false)
    useEffect(()=>{
        const username = localStorage.getItem('username');
        if(username !=null) setSowLog(true)
            console.log(showLog)
    },[showLog])

    const handelLogout = ()=>{
        localStorage.removeItem('username');
    }
    const [navbar,setNavbar]=useState(false);

    const location=useLocation();
    const isHomepage=location.pathname!='/';
    console.log(isHomepage);
    
    const changeBackground=()=>{
     if(window.scrollY>=200){
        setNavbar(true)
     }else{
        setNavbar(false);
     }
    }
    window.addEventListener('scroll',changeBackground);
    return(
    <>
<div className ={navbar || isHomepage?'nav-bar active':'nav-bar'}>
<a href = "/" className = "logo"><img src ={logo}/></a>
    <ul>
        <li><a href = "/">Home</a></li>
        <li><a href = "/Course">Courses</a></li>
        <li><a href = "/Carriers">Carriers</a></li>
        <li><a href = "/Universities1">Universities</a></li>
        <li><a href = "/Contact">Contact</a></li>
        {showLog && <li><a href = "/login" onClick={handelLogout}>LogOut</a></li>}
        {!showLog && <li><a href = "/login">Sign In</a></li>}

    </ul>
</div>
</>
    )
}
export default Nav;
