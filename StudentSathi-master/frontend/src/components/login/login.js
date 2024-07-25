import userData from './data.json';
import axios from 'axios';

async function CheckUserExist(user){
  
  let msg=await axios.post('http://localhost:5000/login',user);
  
  if (msg.data==="ok") {   
    alert("Successfully Logged in");
  } else {
    alert('User not found!');
  }
  
}

function handleSubmit(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  let user1={
    username:username,
    password:password
  }
  CheckUserExist(user1); 
}




export { handleSubmit };
