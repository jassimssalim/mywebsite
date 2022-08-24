import React from 'react'

function About() {
  return (
    <div name= "about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
            <div className=''>
                
                <p className='text-4xl font-bold inline-block border-b-4 border-gray-500 p-2'>About </p>
            </div>
            <p className='text-xl mt-10 text-justify' >
                Hi, I'm <b>Jassim S. Salim</b> graduated last 2020 at Bulacan State University with a degree of Computer Engineering.
                Passionate about creating websites and applications providing the user needs and satisfactions. Knowledgeable of HTML/HTML5, CSS, JavaScript, Libraries like
                ReactJs, Tailwind, Bootstrap, handling APIS through 3rd party using PostMan and backend as NodeJs and MySQL. 
                
            </p>
            <br/>
             <p className='text-xl text-justify'> Currently working as application developer in the bank as my first job, using Outsystems as the main 
             platform of the software, creating fast, realiable and secure applications as the Agile Metholodgy are the main core 
             of Software Development. </p>
             <br/>
             <p className='text-xl text-justify'> What I want to become in the next years of my development career is that I can make Web3 technologies 
             and be one of the blockchain developer in my country.
             
             
             
               </p>
  
        
        
        
        
        </div>
    </div>
  )
}

export default About