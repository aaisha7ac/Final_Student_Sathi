import './login.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { handleSubmit } from './login.js';
import { useLocation,useParams } from 'react-router-dom';



function Login() {
    const username = localStorage.getItem('username');
    const Navigate = useNavigate();    
    const {university}=useParams();
    console.log(university);
    useEffect(()=>{
        if(username){
            if(university){
        Navigate(`/Universities/${university}`);
            }
            else{
                Navigate("/Universities");
            }
        window.location.reload();
        }
    },[]);
    
    const location=useLocation();
    console.log(location.pathname);
    const [form, setForm] = useState({
        username: "",
        password: "",
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };
    
    const handelLogin = async () => {
        try {
            let resp = await axios.post("http://localhost:5000/login", form);
            resp = resp.data;
            console.log(resp);
            
            if (resp.status) {
                localStorage.setItem('username' , resp.username);
                if(location.pathname==='/login'){
                Navigate("/");
                }
                else if(location.pathname==='/universites1'){
                    Navigate("/Universities");
                }
                else if(location.pathname==='/universites1' && university){
                    Navigate(`/universites/${university}`)
                }
                window.location.reload();
              } else {
                alert("bad credential");
              }
        } catch (error) {
            alert("server error");
            console.log(error);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
        // Here you would typically send the form data to your server
    };

    return (
        <>


            <div className='page-background'>
                <div className="container1">
                    <form onSubmit={handleSubmit} className="login-form">
                        <h2>Login</h2>
                        <div className="input-group1">
                            <input type="text" value={form.username} name="username" placeholder="username" onChange={handleChange} required />
                        </div>
                        <div className="input-group1">
                            <input type="password" value={form.password} name="password" placeholder="Password" onChange={handleChange} required />
                        </div>
                        <button type="submit" onClick={handelLogin} id="loginbutton">Login</button>
                    </form>
                    <div className="register-option">
                        <p>Don't have an account? <a href="/signup">Register here</a></p>
                    </div>
                </div>

                <footer>
                    <p>&copy; 2024 Student Sathi. All rights reserved. | Contact us: contact@student-sathi.com</p>
                </footer>
            </div>


        </>
    );
}

export default Login;