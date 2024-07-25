// import fs from "fs";
// import userData from './data.json';


// function handleEventSubmit(username, email, password) {
//   const userExists = userData.some(user => user.username === username || user.email === email);

//   if (userExists) {
//     return { success: false, message: 'Username or email already exists.' };
//   }

//   const newUser = {
//     username,
//     email,
//     password
//   };

//   userData.push(newUser);


//   fs.writeFileSync('./data.json', JSON.stringify(userData, null, 2));

//   return { success: true, message: 'User registered successfully.' };


// };

// export default handleEventSubmit;