import axios from'axios';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./carriers.css";
const bachelorFields = [
    "Engineering and Technology",
    "Medicine and Healthcare",
    "Computer Science and Information Technology",
    "Science and Mathematics",
    "Business and Management",
    "Arts and Humanities",
    "Fine Arts and Design",
    "Social Sciences",
    "Education",
    "Law",
    "Agriculture",
    "Veterinary Science",
    "Forestry",
    "Fisheries",
    "Dairy Technology",
    "Home Science",
    "Hotel Management and Catering Technology",
    "Sports and Physical Education",
    "Pharmacy",
    "Paramedical Sciences",
    "Aviation",
    "Event Management",
    "Fashion Technology",
    "Animation and Multimedia",
    "Film and Television Production",
    "Music and Performing Arts",
    "Allied Health Sciences"
  ];
function Carriers(){
    let{ courseCarriers }=useParams();
    console.log(courseCarriers);
    let course=courseCarriers || "Engineering";
    console.log(course);
    
        course=course.split(' ')[0];
    
const [selectedCourse,setCourse]=useState(course);
const [posts, setPosts] = useState([]);
const handleCourseChange=(event)=>{
    setCourse(event.target.value);
}

async function getData(){
    let response=await axios.post(`http://localhost:5000/getRole/${selectedCourse}`);
    console.log(response.data);
    if(response.data.msg!="Error"){
    setPosts(response.data);
    }
}

useEffect(()=>{
    getData();
},[selectedCourse]);
    return(
        <>
        <div className='carriers' style={{marginTop:130}}>        
        <div id="filterRole">
            <span>Select Course for Carriers:  </span>
            <select value={selectedCourse} onChange={handleCourseChange}>                
                {bachelorFields.map((val,i)=>{
               return <option value={val.split(' ')[0]} key={i}>{val}</option>})} 
            </select>
        </div>
        {/* {selectedCourse=="None"?alert(`Select the course for carriers`):<h1>Carriers for {selectedCourse}</h1>} */}
        
        <div className='showRole'>
            
            {posts.map((value,i)=>{                
               return <div className="card green">
               <div key={i} className="role">{value}</div>
               </div>;
            })}
            
        
        </div>
        </div>
        </>
    )

}
export default Carriers;