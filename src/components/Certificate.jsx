import React from 'react';

import cert  from "../asset/associatewebdev.png";


const Skills = () => {


    const techs = [
        {
            id:1,
            src: cert,
            title: 'Associate Web Developer',
            style: 'shadow-red-800',
        },
        
        {
            id:2,
            src: cert,
            title: 'Associate Web Developer',
            style: 'shadow-red-800',
        },
        {
            id:3,
            src: cert,
            title: 'Associate Web Developer',
            style: 'shadow-red-800',
        },
       

      
        ];






  return (
    <div name = "certificate"  className = "w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white" >
        <div className= "  max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">   
            <div className='
            pb-8'> 
            
                 <p className=' mt-20 text-4xl font-bold inline-block border-b-4 border-gray-500 p-2'>Certification</p>
                 <p className='py-6'> Certification as Professional Application/Web Developer. </p>

            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>


                {
                    techs.map(({ id, src, title, style }) => (


                            
                <div key= {id} className={ "shadow-md hover:scale-105 duration-500 py-2 rounded-lg " + " " + style }> 
                <img src = {src} alt = " " className='w-20 mx-auto'/>
                <p className='mt-4'>{title}</p>
            </div>


                    ))
                }



            </div>


        </div>
    </div>
  )
}

export default Skills