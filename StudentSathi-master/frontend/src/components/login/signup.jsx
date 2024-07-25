import { useState } from 'react';
import './signup.css';
import handleEventSubmit from './signup.js';
import axios from 'axios';
import { useAsyncValue, useNavigate } from 'react-router-dom';
function Signup() {
  const Navigate = useNavigate()
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handelSignUp = async () => {
    const { username, email, password } = form;
    if (!username || !email || !password) {
      alert("you must filled all details");
      return;
    }
    try {
      const resp = await axios.post("http://localhost:5000/signup", form);
      console.log(resp.data)
      if (resp.data) {
        alert(`user created successfully`);
        Navigate("/login");
      }
    } catch (error) {
      alert("server error");
      console.log(error);
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your server
  };


  return (
    <>
      <div className='home-page'>
        <form onSubmit={handleSubmit} className="container2">
          <div className="signup-form">
            <h2>Sign Up</h2>
            <div className="input-group">
              <input type="text" name="username" value={form.username}
                onChange={handleChange} placeholder="Username" required />
            </div>
            <div className="input-group">
              <input type="email" name="email"
                value={form.email}
                placeholder='Enter your email'
                onChange={handleChange} required />
            </div>
            <div className="input-group">
              <input type="password" name="password"
                value={form.password}
                placeholder='Enter your password'
                onChange={handleChange} required />
            </div>
            <button type="submit" onClick={handelSignUp} id='signupbutton' >Sign Up</button>
          </div>
        </form>
        <footer>
          <p>&copy; 2024 Student Sathi. All rights reserved. | Contact us: contact@student-sathi.com</p>
        </footer>
      </div>
    </>
  );
}

export default Signup;
