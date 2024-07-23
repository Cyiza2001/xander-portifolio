import cert from "/images/certify.jpg"
const certificates= [ {certIcon: cert },
  {certIcon: cert },
  {certIcon: cert },
  {certIcon: cert },
  {certIcon: cert },
  {certIcon: cert },
  {certIcon: cert },
  {certIcon: cert },
  {certIcon: cert },
 
]

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
      <div className="flex flex-wrap  my-20 justify-center items-center ">
      { certificates.map(el =>{
        return(
          <div className="relative overflow-hidden m-2  h-52 w-80">
          <img src={`${el.certIcon}`} alt="certicicate" className="h-52 w-80 object-cover" />
         </div>
        )
      })
     
}
      </div>
       
       

        </div>
    
    )
}

export default Certificates;