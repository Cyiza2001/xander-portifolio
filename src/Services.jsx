const Services = ()=>{
    return(

        <div className="flex flex-col">
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
        {/*************************************MY SERVICES********************************* **/}

        <div className="flex flex-wrap">
          <div>
          <div className="relative flex items-center justify-center w-24 h-24 bg-blue-100 rounded-full">
      <div className="absolute w-12 h-12 bg-blue-300 transform -rotate-45 clip-play"></div>
    </div>
          </div>
        </div>
      </div>
        
        
        </div>
    )
   
    
}

export default Services;    