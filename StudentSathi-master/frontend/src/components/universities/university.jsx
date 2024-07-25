import {useState,useRef,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Pagination from './pagination';
import Posts from './Posts';
import './university.css';
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
  const Location=[
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal"
];

  
function HandleUniversity(){
  //using params
  let {university}=useParams();

  let course=university||"Overall";

  if(course!="Overall"){
    course=course.split(' ')[0];
  }
  //console.log(course);
    //hooks for handling the filter
    const [selectedCourse,setCourse]=useState(course);
    const [selectedLocation,setLocation]=useState("None");    
    const showColleges=useRef(null);
    //paging
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);



const[totalColleges,setTotalColleges]=useState(0);


const handleCourseChange=(event)=>{        
        setCourse(event.target.value);
    };    

    const handleLocationChange=(event)=>{
        setLocation(event.target.value);
    }
    
  
async function getData(showUniversity){
  setLoading(true);
  let response=await axios.post(`http://localhost:5000/getdata/${selectedCourse}`,{
    location:selectedLocation
  });   

if(response.data.msg=="Error"){
  alert("Data will be available soon.....")
}
else{
  setPosts(response.data);
  setLoading(false);
}
}
  //to handle everytime when the filter is changing
    useEffect(()=>{
        let showUniversity=showColleges.current;    
       getData(showUniversity);
     
    },[selectedCourse,selectedLocation]);


    const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);

    
    return (
        <>
        {/* for filtering */}
        <div id="unifilter" style={{marginTop:130}}>
          <div className='courses'>
        <span id='selectfilter'>Select Course:</span>
        <select value={selectedCourse} onChange={handleCourseChange}>
            <option value="Overall" key='-1'>Overall ranking</option>
            {bachelorFields.map((val,i)=>{
               return <option value={val.split(' ')[0]} key={i}>{val}</option>})}            
        </select>
        </div>
        <div className="location">
        <span id="selectlocation">Location:</span>
        <select value={selectedLocation} onChange={handleLocationChange}>
            <option value="None"key='-1'>None</option>
            {Location.map((val,i)=>{
                return <option value={val} key={i}>{val}</option>
            }
            )}            
        </select>
        </div>
        </div>
        {/* for displaying universities */}
        <Posts posts={currentPosts} loading={loading} />
        <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />

        </>
    )
}

export default HandleUniversity;