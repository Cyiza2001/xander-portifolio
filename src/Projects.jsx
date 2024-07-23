import cert from "/images/certify.jpg"
const projects= [ {projIcon: cert },
    {projIcon: cert },
    {projIcon: cert },
    {projIcon: cert },
    {projIcon: cert },
    {projIcon: cert },
    {projIcon: cert },
    {projIcon: cert },
    {projIcon: cert },
 
]

const Projects  = ()=>{
    return(
        <div className="flex flex-col">

    <div className="flex flex-col justify-center items-center">
        <div className="flex font-bold text-2xl mt-14 mb-6">
          PROJECTS I HAVE WORKED ON
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
      {/****************************************PROJECTS******************************************/}
      <div className="flex flex-wrap  my-20 justify-center items-center ">
      { projects.map(el =>{
        return(
          <div className="relative overflow-hidden m-2  h-52 w-80">
          <img src={`${el.projIcon}`} alt="certicicate" className="h-52 w-80 object-cover" />
         </div>
        )
      })
     
}
      </div>
       
       

        </div>
    
    )
}

export default Projects;