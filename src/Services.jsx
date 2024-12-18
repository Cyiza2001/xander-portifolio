import { FaDesktop } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { FaDatabase } from "react-icons/fa6";
import { forwardRef, useState } from "react";
import UseVisibility from "./UseVisibility";



const Services = forwardRef((props, ref)=>{
  const {isVisible, getStyles} =  UseVisibility(ref)
  const [hoveredId, setHoveredId] = useState(null);

const webBasedSystemsId = 1;
const databaseManagementId = 2;
const githubCollaborationId = 3;

const services = [
  {icon: <FaDesktop className={`${hoveredId === webBasedSystemsId ? "text-white" : "text-orange-600"} w-96 h-96`} />, title: "Web Based Systems", subTitle: "Responsive and interactive websites", pathHover: "#dd6b20", id: webBasedSystemsId},
  {icon: <FaDatabase className={`${hoveredId === databaseManagementId ? "text-white" : "text-blue-600"} w-96 h-96`} />, title: "Database Management", subTitle: "Design and Maintenance of Database", pathHover: "#0000FF", id: databaseManagementId},
  {icon: <IoLogoGithub className={`${hoveredId === githubCollaborationId ? "text-white" : "text-black"} w-96 h-96`} />, title: "Github Collaboration", subTitle: "Open-Source Software Development", pathHover: "#000000", id: githubCollaborationId},
];

    return(

        <div ref={ref}   className="flex flex-col" style={{
          ...getStyles()
        }}>
        <div className="flex flex-col justify-center items-center">
        <div className="flex font-bold text-2xl mt-14 mb-6">
          SERVICES
        </div>
        <div className="flex " style={{ width: "122.83px" }}>
          <div
            className="flex justify-center items-center w-full rounded bg-gray-200 "
            style={{ height: "2px" }}
          >
            <div className="h-1 rounded bg-blue-700  w-12"></div>
          </div>
        </div>
    
    <div className="flex sm:flex-row flex-col gap-20 mt-7 mb-20">
    {services.map((el)=>{
      return(
        <div className="flex flex-col gap-3 relative justify-center items-center w-72 h-80 my-10 bg-white shadow-xl hover:-translate-y-4 transition-transform duration-300" key={el.id}  onMouseEnter={() => {
         
          setHoveredId(el.id)
      
        }}
        onMouseLeave={() => setHoveredId(null)}>
    
         <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
         
                  <path stroke="none" stroke-Width="0" fill={hoveredId=== el.id? el.pathHover:"#f5f5f5"} d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"></path>


                </svg>
      
          <div className= "flex justify-center items-center w-8 h-8 absolute right-32" style={{top:"105px"}}>
           {el.icon}
          </div>
    


      <p className="font-semibold text-2xl">{el.title}</p>
      <p >{el.subTitle}</p>
    </div>
      )
    })

    }

    </div>
   
        
               
    </div>
      </div>
      
    )
   
    
})

export default Services;    

