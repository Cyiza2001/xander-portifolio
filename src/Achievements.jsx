import { HiOutlineEmojiHappy } from "react-icons/hi";
const stats = [
    {icon:<HiOutlineEmojiHappy style={{width:"30px", height:"30px"}} /> , number:"618" ,title:"Happy Clients"},
]

const Achievements = ()=>{
    return(
    <div>
    <div className="flex flex-col justify-center items-center">
      <div className="flex font-bold text-2xl mt-14 mb-6">STATS</div>
      <div className="flex " style={{width:"122.83px"}}>
         <div className="flex justify-center items-center w-full rounded bg-gray-200 " style={{height:"2px"}}>
          <div className="h-1 rounded bg-blue-700  w-12"></div>
         </div>
        </div>
        <p className="flex  my-6 font-normal">Achievements & Statistics</p>
    </div>
          {/***********************************************STATS DIVS DOWN HERE************************************************************** */}
          <div className="flex flex-row gap-40 justify-center items-center ">
            {stats.map((el)=>{

           
           <div className="flex flex-col gap-2 justify-center items-center">
            <div className="flex items-center justify-center bg-blue-700 rounded-full h-12 w-12"> 
            <div className="text-white">{el.icon}</div>
            </div>
           
            <p className="font-bold text-3xl">{el.number}</p>
            <p className="font-thin">{el.title}</p>
           </div>
            })

            }
           

          </div>

    </div>
    )
}

export default Achievements;
