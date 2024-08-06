import { CiLocationOn } from "react-icons/ci";
import { FaRegEnvelope } from "react-icons/fa6";
import { CiMobile2 } from "react-icons/ci";
import { forwardRef } from "react";

const contact = [
    {icon:<CiLocationOn />, name:"Location:", description:"Kigali , Rwanda" },
    {icon:<FaRegEnvelope />, name:"Email:", description:"ndanyuzwealexandre@gmail.com" },
    {icon:<CiMobile2 />, name:"Call:", description:"+250785587274" }
]

const Contact = forwardRef( (props, ref)=>{
    return(
        <section ref={ref} id="contact"  className="flex flex-col ">
           <div className="flex flex-col justify-center items-center">
        <div className="flex font-bold text-2xl mt-28 mb-6">CONTACT</div>
        <div className="flex" style={{ width: '122.83px' }}>
          <div className="flex justify-center items-center w-full rounded bg-gray-200" style={{ height: '2px' }}>
            <div className="h-1 rounded bg-blue-700 w-12"></div>
          </div>
        </div>
      </div>
      {/****************************** MAIN CONTACT******************************** */}
     <main className="flex sm:flex-row flex-col sm:gap-32 gap-12 mt-12  mr-16 items-start ">
      <div className="flex  flex-col gap-9 justify-center items-start sm:ml-36 ml-8  ">
{contact.map((el)=>{return(
        <div className="flex flex-row gap-5">
          <div className="flex h-10 w-10  bg-green-50 rounded-full items-center justify-center">{el.icon}</div>
          <div className="flex flex-col gap-1">
              <p className="font-bold text-2xl">{el.name}</p>
               <p className="font-thin">{el.description}</p>
          </div>

        </div>
        )})}

      </div>

      {/********************************** * INPUTS FOR CONTACT********************************************* */}
      <div className="flex flex-col  sm:w-1/2  mx-4 gap-7">
      <div className="flex flex-row gap-7">
       <input type="text" placeholder="Your Name"  className="border border-gray-300 p-2 rounded-md w-1/2 focus:border-blue-600 focus:outline-none" />
       <input type="text" placeholder="Your Email"  className="border border-gray-300 p-2 rounded-md w-1/2 focus:border-blue-600 focus:outline-none" />
       </div>
       <div className="flex ">
       <input type="text" placeholder="Subject"  className="border border-gray-300 p-2 rounded-md w-screen focus:border-blue-600 focus:outline-none" />
       </div>
       <div className="flex ">
       <input type="text" placeholder="Message"  className="border border-gray-300 p-2 rounded-md w-screen min-h-32 focus:border-blue-600 focus:outline-none" />
       </div>
         <div className="flex justify-center items-center">
         <button className="bg-blue-700 rounded-3xl text-white w-40 h-10 font-semibold  flex justify-center items-center ">Send Message</button>

         </div>
       

      </div> 
      </main>
        </section>
    )
})

export default Contact;