import { FaDesktop } from "react-icons/fa6";


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

        {/* <div className="flex flex-wrap">
          <div>
          <div className="relative flex items-center justify-center w-24 h-24 bg-blue-100 rounded-full">
      <div className="absolute w-12 h-12 bg-blue-300 transform -rotate-45 clip-play"></div>
    </div>
          </div>
        </div>
      </div> */}
      {/* <div className="flex relative justify-center items-center">
      <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg "  >
                 
                  <path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,582.0697525312426C382.5290701553225,586.8405444964366,449.9789794690241,525.3245884688669,502.5850820975895,461.55621195738473C556.606425686781,396.0723002908107,615.8543463187945,314.28637112970534,586.6730223649479,234.56875336149918C558.9533121215079,158.8439757836574,454.9685369536778,164.00468322053177,381.49747125262974,130.76875717737553C312.15926192815925,99.40240125094834,248.97055460311594,18.661163978235184,179.8680185752513,50.54337015887873C110.5421016452524,82.52863877960104,119.82277516462835,180.83849132639028,109.12597500060166,256.43424936330496C100.08760227029461,320.3096726198365,92.17705696193138,384.0621239912766,124.79988738764834,439.7174275375508C164.83382741302287,508.01625554203684,220.96474134820875,577.5009287672846,300,582.0697525312426" className="flex justify-center items-center">
                
                  </path>
                  < FaDesktop className="text-orange-600 w-32 h-32 absolute top-48 z-30"/>
                </svg>
              
    </div> */}
     <div className="flex flex-col gap-3 relative justify-center items-center w-72 h-96 my-10 bg-white hover:shadow-xl ">
      <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" className="">
        <path
          stroke="none"
          strokeWidth="0"
          fill="rgb(243 244 246)"
          d="M300,582.0697525312426C382.5290701553225,586.8405444964366,449.9789794690241,525.3245884688669,502.5850820975895,461.55621195738473C556.606425686781,396.0723002908107,615.8543463187945,314.28637112970534,586.6730223649479,234.56875336149918C558.9533121215079,158.8439757836574,454.9685369536778,164.00468322053177,381.49747125262974,130.76875717737553C312.15926192815925,99.40240125094834,248.97055460311594,18.661163978235184,179.8680185752513,50.54337015887873C110.5421016452524,82.52863877960104,119.82277516462835,180.83849132639028,109.12597500060166,256.43424936330496C100.08760227029461,320.3096726198365,92.17705696193138,384.0621239912766,124.79988738764834,439.7174275375508C164.83382741302287,508.01625554203684,220.96474134820875,577.5009287672846,300,582.0697525312426"
        />
        <foreignObject x="50%" y="50%" width="100" height="100" style={{ transform: 'translate(-50%, -50%)' }}>
          <div className="flex justify-center items-center w-full h-full">
            <FaDesktop className="text-orange-600 w-96 h-96" />
          </div>
        </foreignObject>
      </svg>
      <p className="font-semibold text-2xl">Web Based Systems</p>
      <p >Responsive and interactive websites</p>
    </div>
        
               
    </div>
      </div>
      
    )
   
    
}

export default Services;    