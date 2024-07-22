const Certificates  = ()=>{
    return(
        <div className="flex flex-col">

    <div className="flex flex-col justify-center items-center">
        <div className="flex font-bold text-2xl mt-14 mb-6">
          PROFESSIONAL CERTIFICATES
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
      {/****************************************CERTFICATES******************************************/}
       <div className="flex flex-wrap">
        <img src="https://www.freecodecamp.org/certification/ndanyuzwe2/javascript-algorithms-and-data-structures-v8" alt="certicicate" />
       </div>

        </div>
    
    )
}

export default Certificates;