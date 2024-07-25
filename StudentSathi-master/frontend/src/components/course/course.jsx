import React, { useRef, useEffect } from "react";
import './courses.css';
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

const fieldDescriptions = [
  "Study of principles and application of engineering techniques and technology.",
  "Study of medical sciences, healthcare practices, and patient treatment.",
  "Study of computers, software development, and information systems.",
  "Study of natural phenomena, scientific principles, and mathematical theories.",
  "Study of business operations, management strategies, and economic principles.",
  "Study of human culture, language, literature, and history.",
  "Study of visual arts, creative design, and aesthetic expression.",
  "Study of human society, behavior, and relationships.",
  "Study of teaching methods, educational theories, and learning processes.",
  "Study of legal systems, principles, and jurisprudence.",
  "Study of farming techniques, crop production, and agricultural economics.",
  "Study of animal health, care, and veterinary medicine.",
  "Study of forest ecosystems, conservation, and resource management.",
  "Study of aquatic ecosystems, fish biology, and fisheries management.",
  "Study of milk production, dairy processing, and dairy product technology.",
  "Study of home management, nutrition, and family dynamics.",
  "Study of hospitality industry, hotel operations, and catering services.",
  "Study of sports science, physical fitness, and sports management.",
  "Study of pharmaceutical sciences, drug formulations, and pharmacy practice.",
  "Study of allied health sciences, medical technology, and patient care.",
  "Study of aviation industry, flight operations, and aviation management.",
  "Study of event planning, organization, and management.",
  "Study of fashion design, apparel production, and textile technology.",
  "Study of animation techniques, multimedia production, and digital media.",
  "Study of filmmaking, television production, and media content creation.",
  "Study of music theory, performance arts, and creative expression.",
  "Study of health-related disciplines supporting medical care, diagnostics, and therapy."
];


const Courses = () => {
  
  const containerRef = useRef(null); 
  useEffect(() => {
    let divcourse = containerRef.current;
    
    let i = 0;
    bachelorFields.forEach((value) => {
      
      const divc = document.createElement("div");
      
      const h2 = document.createElement("h2");     
      const divb = document.createElement("div");
      divb.setAttribute("class", "diva");
      h2.setAttribute("class", "h2course");
      divc.setAttribute("class", "box");
      const p = document.createElement("p");
      p.setAttribute("class","pcourse");    
      const link = document.createElement("a");
      link.setAttribute("class", "acourses");
      link.innerText = "Explore";
      link.href = `/Coursedetails/${i}`;
         
      p.innerText = fieldDescriptions[i];
      h2.innerText = value;
      divc.append(h2);
      divc.append(p);
      divb.append(link);    
      divc.append(divb);
      divc.setAttribute("key", i);
      
      i++;
      divcourse.append(divc);     

    });
    
  },[]); // Empty dependency array to ensure useEffect runs only once

  return (
    <div id="main" key="main1">
      <h1 id="heading" key="heading1">Courses</h1>
      <br />
      <div id="container" key="container1" ref={containerRef}></div>
    </div>
  );
};

export default React.memo(Courses);
