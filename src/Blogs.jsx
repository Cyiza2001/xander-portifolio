import { forwardRef } from "react"
import cert from "/images/certify.jpg"
const blogs= [ {Icon: cert ,title:"This is the first blog on my website" , date:"July 23, 2024" },
    {Icon: cert ,title:"This is the first blog on my website" , date:"July 23, 2024" },
    {Icon: cert ,title:"This is the first blog on my website" , date:"July 23, 2024" },
    {Icon: cert ,title:"This is the first blog on my website" , date:"July 23, 2024" },
    
 
] 

const Blogs = forwardRef( (props, ref)=>{
    return (
        <div ref={ref} id="blogs"  className="section flex flex-col">
            
      <div className="flex flex-col justify-center items-center">
        <div className="flex font-bold text-2xl mt-14 mb-6">
          BLOGS
        </div>
        <div className="flex " style={{ width: "122.83px" }}>
          <div
            className="flex justify-center items-center w-full rounded bg-gray-200 "
            style={{ height: "2px" }}
          >
            <div className="h-1 rounded bg-blue-700  w-12"></div>
          </div>
        </div>
      </div>

      {/***********************************BLOGZ ***************************************/}
      <div className="flex flex-wrap mt-10 mx-9 justify-center items-center  ">
{blogs.map(el =>{
    return(
     

          <div className= "flex flex-col m-4 h-96 w-96 rounded-2xl  border-blue-300 justify-between" style={{borderWidth: "1px"}}>
             <div className="rounded-3xl"><img src={`${el.Icon}`} alt="blog photo" /></div>
             <div className="flex flex-col h-52 w-80 gap-4 pl-4 mt-4">
                  <p className="flex font-bold my-">{el.title}</p>
                  <p className="flex font-thin">{el.date}</p>
             </div>
           </div>

     
     
    )
})
      
}
</div>
     </div>
    )
})

export default Blogs;