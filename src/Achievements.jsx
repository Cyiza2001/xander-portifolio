import { HiOutlineEmojiHappy } from "react-icons/hi";
import { AiOutlineProject } from "react-icons/ai";
import { LiaCertificateSolid } from "react-icons/lia";
import { IoMdTime } from "react-icons/io";
const stats = [
    {icon:<HiOutlineEmojiHappy style={{width: "30px" , height:"30px"}} /> , number:"618" ,title:"Happy Clients"},
    {icon:<AiOutlineProject style={{width: "30px" , height:"30px"}} /> , number:"314" ,title:"Completed Projects"},
    {icon:<LiaCertificateSolid style={{width: "30px" , height:"30px"}} /> , number:"37" ,title:"Awards"},
    {icon:<IoMdTime style={{width: "30px" , height:"30px"}} /> , number:"14" ,title:"Working Hours per day"},
]

const Achievements = ()=>{
    return(
    <div>
    <div className="flex flex-col  justify-center items-center">
      <div className="flex font-bold text-2xl mt-14 mb-6">STATS</div>
      <div className="flex " style={{width:"122.83px"}}>
         <div className="flex  justify-center items-center w-full rounded bg-gray-200 " style={{height:"2px"}}>
          <div className="h-1 rounded bg-blue-700  w-12"></div>
         </div>
        </div>
        <p className="flex  my-6 font-normal">Achievements & Statistics</p>
    </div>
          {/***********************************************STATS DIVS DOWN HERE************************************************************** */}
          <div className="flex sm:flex-row flex-col sm:gap-36  gap-10 justify-center items-center mt-3 px-14">
            {stats.map((el)=>{

                return(
           <div className="flex flex-col gap-2 justify-center items-center">
            <div className="flex items-center justify-center bg-blue-700 rounded-full h-12 w-12"> 
            <div className="text-white">{el.icon}</div>
            </div>
           
            <p className="font-bold text-3xl">{el.number}</p>
            <p className="font-thin">{el.title}</p>
           </div>
                )
            })

            }
          </div>

          {/******************************************************** DEGREE AND ATTAINMENT **********************************************/}

        <div className="flex flex-col justify-center items-center">
         <div className="flex font-bold text-2xl mt-14 mb-6">DEGREE AND ATTAINMENT</div>
         <div className="flex " style={{width:"122.83px"}}>
         <div className="flex justify-center items-center w-full rounded bg-gray-200 " style={{height:"2px"}}>
          <div className="h-1 rounded bg-blue-700  w-12"></div>
         </div>
         </div>
      
        </div>
        {/*********** ****************************************** DEGREE SECTION ********************************************************/}


        <div className="flex flex-col ">
            <div className="flex flex-row ">
                <div className="h-4 w-4  rounded-sm text-blue-700"></div>
            </div>

        </div>

    </div>
    )
}

export default Achievements;
