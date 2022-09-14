import React from 'react'
import contactEmail  from "../asset/email.svg";




const Contact = () => {

  


  return (
    <div name = 'contact' className=  "bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen" >
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8'>
          <p className=' mt-20 text-4xl font-bold inline-block border-b-4 border-gray-500 p-2'> 
            Contact
          </p>
          <p className='py-6'>Let's Talk.  &nbsp;
          Submit the form below to get in touch with me.  </p>
          
          
          
          </div>
          <div className=' flex justify-center items-center'>
          
            <form  action = "https://getform.io/f/e012884f-c699-4629-96cb-9e73e392af38 " method = "POST"className='flex flex-col w-full h-full' >
                <input type="text" name = "name " placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                <input type="email" name = "email " placeholder='Enter your email' className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                <textarea name="message"  rows="7" placeholder = "Enter your message" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
                <button className='text-white bg-gradient-to-b   from-cyan-400 to-blue-700 px-6 py-3 my-8  flex  justify-center items-enter mx-20 rounded-md hover:scale-110 duration-300'>Let's talk</button>
               

            </form>
      
            <div>
                                 <img src={contactEmail} alt="" className = " hidden  md:flex shrink w-100 h-90  "/>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Contact