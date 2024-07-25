import { useParams } from "react-router-dom";
import React from "react";
import { useLocation } from "react-router-dom";
import './coursed.css';
const arrd = [
  { 
    title: "Engineering and Technology",
    description: "Engineering and Technology involve the application of scientific principles and practical knowledge to design and construct various structures, systems, and processes. It encompasses various disciplines such as civil, mechanical, electrical, and chemical engineering, among others, and plays a crucial role in advancing technology and improving living standards.",
    fields: ["BE Civil Engineering", "BE Mechanical Engineering", "BE Electrical Engineering", "BE Chemical Engineering", "BE Computer Engineering", "BE Electronics Engineering", "BE Aerospace Engineering", "BE Biomedical Engineering", "BE Environmental Engineering", "BE Industrial Engineering", "BE Materials Engineering", "BE Nuclear Engineering", "BE Petroleum Engineering"],
    src:require("./Picturescourses/a.jpg") 
  },
  { 
    title: "Medicine and Healthcare",
    description: "Medicine and Healthcare focus on the diagnosis, treatment, and prevention of diseases and illnesses, as well as the promotion of overall well-being. It encompasses various fields such as general medicine, surgery, pediatrics, psychiatry, and public health. Healthcare professionals work tirelessly to provide medical care and support to individuals and communities, striving to improve quality of life and extend life expectancy.",
    fields: ["MBBS", "BDS", "BHMS", "BAMS", "BUMS", "BNYS", "BPT", "BSc Nursing", "BPharm", "BMLT", "BOptom", "BSc Radiography", "BSc Optometry", "BSc Medical Laboratory Technology", "BSc Health Sciences"],
    src:require("./Picturescourses/b.jpg")
  },
  { 
    title: "Computer Science and Information Technology",
    description: "Computer Science and Information Technology deal with the study of computation, algorithms, programming languages, data structures, and computer hardware and software. It encompasses a wide range of applications, including software development, artificial intelligence, cybersecurity, database management, and network administration. As technology continues to evolve, computer scientists and IT professionals play a crucial role in driving innovation and shaping the digital landscape.",
    fields: ["BE Computer Science", "BE Information Technology", "BCA", "BSc Computer Science", "BSc Information Technology", "BSc Software Engineering", "BSc Artificial Intelligence", "BSc Cybersecurity"],
    src:require("./Picturescourses/c.jpg")
  },
  { 
    title: "Science and Mathematics",
    description: "Science and Mathematics form the foundation of modern knowledge and understanding. Science encompasses various disciplines such as physics, chemistry, biology, astronomy, and environmental science, exploring the natural world and its phenomena. Mathematics provides the language and tools for quantifying, analyzing, and solving problems across various fields, including engineering, economics, and cryptography. Together, science and mathematics drive scientific discoveries, technological advancements, and innovation.",
    fields: ["BSc Physics", "BSc Chemistry", "BSc Biology", "BSc Mathematics", "BSc Environmental Science", "BSc Astronomy", "BSc Geology", "BSc Statistics"],
    src:require("./Picturescourses/d.jpg")
  },
  { 
    title: "Business and Management",
    description: "Business and Management involve the organization, administration, and supervision of commercial activities and enterprises. It encompasses various functions such as finance, marketing, human resources, operations, and strategic planning. Business professionals and managers play a crucial role in driving economic growth, creating employment opportunities, and fostering innovation and entrepreneurship.",
    fields: ["BBA", "BCom", "BMS", "BBM", "BSc Management", "BSc Finance", "BSc Marketing", "BSc Human Resource Management", "BSc Operations Management", "BSc Entrepreneurship"],
    src:require("./Picturescourses/e.jpg")
  },
  { 
    title: "Arts and Humanities",
    description: "Arts and Humanities encompass a diverse range of disciplines that explore human culture, creativity, and expression. This includes fields such as literature, history, philosophy, languages, visual arts, and performing arts. Studying arts and humanities encourages critical thinking, empathy, and cultural appreciation, fostering a deeper understanding of the human experience and promoting social and cultural enrichment.",
    fields: ["BA English Literature", "BA History", "BA Philosophy", "BA Languages", "BA Visual Arts", "BA Performing Arts", "BA Sociology", "BA Psychology"],
    src:require("./Picturescourses/f.jpg")
  },
  { 
    title: "Fine Arts and Design",
    description: "Fine Arts and Design encompass disciplines such as painting, sculpture, graphic design, interior design, and fashion design. These fields focus on creative expression, aesthetics, and visual communication. Artists and designers use their skills and imagination to convey ideas, evoke emotions, and inspire audiences, contributing to cultural enrichment and innovation.",
    fields: ["BFA Painting", "BFA Sculpture", "BFA Graphic Design", "BFA Interior Design", "BFA Fashion Design", "BFA Photography", "BFA Illustration"],
    src:require("./Picturescourses/g.jpg")
  },
  { 
    title: "Social Sciences",
    description: "Social Sciences encompass disciplines that study human society, behavior, and interactions. This includes fields such as sociology, psychology, anthropology, economics, political science, and geography. Social scientists analyze social structures, cultural norms, individual behavior, and societal trends, seeking to understand and address complex social issues and challenges.",
    fields: ["BA Sociology", "BA Psychology", "BA Anthropology", "BA Economics", "BA Political Science", "BA Geography", "BA Social Work", "BSc Criminology"],
    src:require("./Picturescourses/h.jpg")
  },
  { 
    title: "Education",
    description: "Education is the process of facilitating learning, knowledge acquisition, and skill development. It encompasses various levels such as primary, secondary, and higher education, as well as vocational training and adult education. Educators play a crucial role in imparting knowledge, fostering critical thinking, and nurturing personal and intellectual growth, preparing individuals for success in their personal and professional lives.",
    fields: ["BEd", "BSc Education", "BSc Early Childhood Education", "BSc Special Education", "BSc Physical Education", "BSc Elementary Education", "BSc Secondary Education"],
    src:require("./Picturescourses/i.jpg")
  },
  { 
    title: "Law",
    description: "Law encompasses the system of rules, regulations, and principles that govern human conduct and relationships within society. It includes various branches such as criminal law, civil law, constitutional law, and international law. Legal professionals, including lawyers, judges, and legal scholars, play a crucial role in interpreting and enforcing laws, ensuring justice, and upholding the rule of law.",
    fields: ["LLB", "BSc Law", "BA Legal Studies", "BBA LLB", "BCom LLB", "BSc Criminology and Criminal Justice"],
    src:require("./Picturescourses/j.jpg")
  },
  { 
    title: "Agriculture",
    description: "Agriculture is the practice of cultivating crops, raising livestock, and managing natural resources for food production, fiber production, and other agricultural products. It includes various activities such as crop cultivation, animal husbandry, agribusiness, and agricultural research. Agriculture plays a crucial role in ensuring food security, rural development, and environmental sustainability.",
    fields: ["BSc Agriculture", "BSc Horticulture", "BSc Animal Science", "BSc Agronomy", "BSc Agricultural Economics", "BSc Agricultural Engineering", "BSc Soil Science", "BSc Forestry"],
    src:require("./Picturescourses/k.jpg")
  },
  { 
    title: "Veterinary Science",
    description: "Veterinary Science involves the study and practice of medical care and treatment for animals. It includes various disciplines such as veterinary medicine, veterinary surgery, and animal health management. Veterinary professionals play a crucial role in promoting animal welfare, preventing and treating diseases, and ensuring the health and well-being of domestic and wild animals.",
    fields: ["BVSc & AH", "BSc Veterinary Science", "BSc Animal Husbandry", "BSc Animal Science", "BSc Animal Nutrition", "BSc Animal Genetics and Breeding", "BSc Veterinary Technology"],
    src:require("./Picturescourses/l.jpg")
  },
  { 
    title: "Forestry",
    description: "Forestry is the science and practice of managing forests and woodland ecosystems for ecological, economic, and social benefits. It includes various activities such as forest conservation, timber harvesting, reforestation, and wildlife management. Forestry professionals play a crucial role in sustainable forest management, biodiversity conservation, and combating climate change.",
    fields: ["BSc Forestry", "BSc Wildlife Management", "BSc Forest Ecology and Conservation", "BSc Forest Products Technology"],
    src:require("./Picturescourses/m.jpeg")
  },
  { 
    title: "Fisheries",
    description: "Fisheries involve the cultivation, harvesting, and management of fish and other aquatic organisms for food, recreation, and conservation. It includes various activities such as commercial fishing, aquaculture, fishery management, and marine conservation. Fisheries professionals play a crucial role in ensuring sustainable fisheries, preserving marine ecosystems, and supporting coastal communities.",
    fields: ["BSc Fisheries Science", "BSc Aquaculture", "BSc Fisheries Management", "BSc Marine Biology", "BSc Marine Science", "BSc Oceanography"],
    src:require("./Picturescourses/n.jpg")
  },
  { 
    title: "Dairy Technology",
    description: "Dairy Technology involves the science and technology of processing milk and dairy products. It includes various processes such as milk pasteurization, cheese making, yogurt production, and ice cream manufacturing. Dairy technologists play a crucial role in ensuring the quality, safety, and nutritional value of dairy products, meeting consumer demand, and promoting dairy industry development.",
    fields: ["BSc Dairy Technology", "BSc Dairy Science", "BSc Dairy Engineering"],
    src:require("./Picturescourses/o.jpg")
  },
  { 
    title: "Home Science",
    description: "Home Science encompasses various disciplines related to household management, nutrition, textiles, and family dynamics. It includes areas such as nutrition and dietetics, clothing and textiles, child development, and home economics. Home scientists play a crucial role in promoting healthy lifestyles, sustainable living practices, and family well-being.",
    fields: ["BSc Home Science", "BSc Nutrition and Dietetics", "BSc Textile and Apparel Designing", "BSc Family and Community Science"],
    src:require("./Picturescourses/p.jpg")
  },
  { 
    title: "Hotel Management and Catering Technology",
    description: "Hotel Management and Catering Technology involve the administration, operation, and supervision of hospitality establishments such as hotels, restaurants, resorts, and catering services. It includes various functions such as front office management, food and beverage service, housekeeping, and event planning. Hospitality professionals play a crucial role in providing quality services, ensuring guest satisfaction, and promoting tourism and hospitality industry growth.",
    fields: ["BHM Bachelor of Hotel Management", "BSc Hotel Management", "BSc Catering Technology", "BSc Culinary Arts"],
    src:require("./Picturescourses/q.png")
  },
  { 
    title: "Sports and Physical Education",
    description: "Sports and Physical Education involve the promotion of physical activity, fitness, and sports participation for health, recreation, and competitive purposes. It includes various activities such as physical education classNamees, sports coaching, fitness training, and sports management. Sports and fitness professionals play a crucial role in promoting active lifestyles, preventing chronic diseases, and fostering sports excellence.",
    fields: ["BSc Sports Science", "BSc Physical Education", "BPEd Bachelor of Physical Education", "BPES Bachelor of Physical Education and Sports", "BSc Exercise Science", "BSc Kinesiology"],
    src:require("./Picturescourses/r.jpg")
  },
  { 
    title: "Pharmacy",
    description: "Pharmacy is the science and practice of preparing, dispensing, and administering medications and pharmaceutical products. It includes various roles such as pharmacists, pharmacy technicians, and pharmaceutical researchers. Pharmacists play a crucial role in ensuring safe and effective medication use, providing patient care services, and promoting public health.",
    fields: ["BPharm", "PharmD Doctor of Pharmacy", "BSc Pharmaceutical Sciences", "BSc Pharmacy Technician"],
    src:require("./Picturescourses/s.jpg")
  },
  { 
    title: "Paramedical Sciences",
    description: "Paramedical Sciences encompass various allied health professions that support and complement medical care and treatment. This includes fields such as medical laboratory technology, radiology and imaging technology, physiotherapy, and occupational therapy. Paramedical professionals play a crucial role in diagnosing, treating, and rehabilitating patients, working alongside physicians and other healthcare providers.",
    fields: ["BSc Medical Laboratory Technology", "BSc Radiography", "BSc Optometry", "BSc Physiotherapy", "BSc Occupational Therapy", "BSc Speech Therapy", "BSc Audiology", "BSc Cardiac Technology", "BSc Respiratory Therapy"],
    src:require("./Picturescourses/t.jpg")
  },
  { 
    title: "Aviation",
    description: "Aviation involves the operation, management, and maintenance of aircraft and air transportation systems. It includes various roles such as pilots, flight attendants, aircraft engineers, and air traffic controllers. Aviation professionals play a crucial role in ensuring air safety, providing efficient air travel services, and supporting global connectivity and economic development.",
    fields: ["BSc Aviation", "BSc Aeronautics", "BSc Aircraft Maintenance Engineering", "BSc Aviation Management", "BSc Aviation Electronics", "BSc Aviation Hospitality"],
    src:require("./Picturescourses/u.jpg")
  },
  { 
    title: "Event Management",
    description: "Event Management involves the planning, coordination, and execution of events such as conferences, exhibitions, weddings, and concerts. It includes various aspects such as event planning, budgeting, marketing, and logistics management. Event managers play a crucial role in creating memorable and successful events, meeting client expectations, and ensuring guest satisfaction.",
    fields: ["BBA Event Management", "BSc Event Management", "BSc Event Planning", "BSc Event Marketing", "BSc Wedding Planning", "BSc Concert Management"],
    src:require("./Picturescourses/v.jpg")
  },
  { 
    title: "Fashion Technology",
    description: "Fashion Technology involves the design, production, and marketing of clothing, accessories, and textiles. It includes various aspects such as fashion design, garment production, textile technology, and fashion merchandising. Fashion technologists play a crucial role in creating innovative and trendy fashion products, meeting consumer demand, and driving fashion industry growth.",
    fields: ["BSc Fashion Design", "BSc Textile Design", "BSc Fashion Technology", "BSc Apparel Merchandising", "BSc Fashion Marketing"],
    src:require("./Picturescourses/w.jpg")
  },
  { 
    title: "Animation and Multimedia",
    description: "Animation and Multimedia involve the creation, manipulation, and presentation of visual and audio content using computer technology. It includes various techniques such as 2D animation, 3D animation, visual effects, and interactive multimedia design. Animators and multimedia artists play a crucial role in producing engaging and immersive digital experiences, including animated films, video games, and virtual reality applications.",
    fields: ["BSc Animation", "BSc Multimedia", "BSc Visual Effects", "BSc Game Design", "BSc Virtual Reality", "BSc Motion Graphics"],
    src:require("./Picturescourses/x.jpg")
  },
  { 
    title: "Film and Television Production",
    description: "Film and Television Production involve the planning, filming, editing, and distribution of motion pictures and television programs. It includes various roles such as directors, producers, cinematographers, and editors. Film and television professionals play a crucial role in storytelling, entertainment, and cultural expression, shaping public discourse and influencing societal attitudes and values.",
    fields: ["BSc Film Production", "BSc Television Production", "BSc Cinematography", "BSc Film Editing", "BSc Screenwriting", "BSc Film Studies"],
    src:require("./Picturescourses/y.png")
  },
  { 
    title: "Music and Performing Arts",
    description: "Music and Performing Arts encompass various forms of artistic expression through music, dance, theater, and other performing arts disciplines. It includes areas such as music performance, composition, choreography, acting, and stage production. Musicians, dancers, actors, and performing artists play a crucial role in entertaining audiences, conveying emotions, and preserving cultural heritage.",
    fields: ["BA Music", "BA Dance", "BA Theater", "BA Acting", "BA Musical Theater", "BA Dance Performance", "BA Music Composition", "BA Performing Arts"],
    src:require("./Picturescourses/z.jpg")
  },
  { 
    title: "Allied Health Sciences",
    description: "Allied Health Sciences encompass a diverse range of healthcare professions that support and complement medical care and treatment. This includes fields such as medical laboratory science, radiography and imaging technology, physiotherapy, and occupational therapy. Allied health professionals play a crucial role in diagnosing, treating, and rehabilitating patients, working alongside physicians and other healthcare providers.",
    fields: ["BSc Medical Laboratory Technology", "BSc Radiography", "BSc Optometry", "BSc Physiotherapy", "BSc Occupational Therapy", "BSc Speech Therapy", "BSc Audiology", "BSc Cardiac Technology", "BSc Respiratory Therapy"],
    src:require("./Picturescourses/aa.png")
  }
];

function Details() {
 
  let {index}=useParams();
    let i=Number(index);
    let title=arrd[i].title;
    let des=arrd[i].description;
    let imgsrc=arrd[i].src;
    let url=`../universities1/${title}`;
    let url2=`../Carriers/${title}`;
    let factors = (      
        arrd[i].fields.map(value => {
          return <li key={value}>{value}</li>
})            
    );
    console.log(factors);
    return (
      <>
      <div id="coursedata"style={{paddingTop:"104px",paddingLeft:"10%"}}>
      <h1 className="courseh1">{title}</h1>
      <div key="1" className="maincourse"style={{paddingTop:"20px"}}>      
        <div className="piccourse">
      <img src={imgsrc} alt={title}/>
      </div>
        <div className="desc">
        <p>{des}</p><br/>
        <h1 className="course-ul-h2">Fields:</h1>        
        <ul>
        {factors}
        </ul>
        </div>
        </div>
        </div>
        <a href={url2} id="disa1">Explore Carriers</a>
        <a href={url} id="disa2">Search Universities</a>
         
            
        
      </>
    );
  }
  
  export default Details;