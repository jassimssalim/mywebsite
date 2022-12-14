import React from 'react';
import html  from "../asset/html.png";
import css  from "../asset/css.png";
import javascript  from "../asset/javascript.png";
import reactImage  from "../asset/react.png";
import node  from "../asset/node.png";
import outsystems  from "../asset/OS.png";
import mySQL  from "../asset/mysql.png";
import postman  from "../asset/postman1.png";
import git  from "../asset/git.png";
import github  from "../asset/github.png";
import Figma  from "../asset/Figma.png";


const Skills = () => {


    const techs = [
        {
            id:1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500',
        },
        {
            id:2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500',
        },
        {
            id:3,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500',
        },
        {
            id:4,
            src: reactImage,
            title: 'React',
            style: 'shadow-blue-600',
        },

        {
            id:5,
            src: git,
            title: 'Git',
            style: 'shadow-pink-500 ',
        },
      
        
        {
            id:6,
            src: outsystems,
            title: 'OUTSYSTEMS',
            style: 'shadow-red-500',
        },

        {
            id:7,
            src: mySQL,
            title: 'MySQL',
            style: 'shadow-orange-300',
        },
        {
            id:8,
            src: postman,
            title: 'Postman',
            style: 'shadow-orange-700',
        },
        {
            id:9,
            src: node,
            title: 'Node JS',
            style: 'shadow-green-600',
        },
        {
            id:10,
            src: github,
            title: 'Github ',
            style: 'shadow-gray-400',
        },
        {
            id:11,
            src: Figma,
            title: 'Figma ',
            style: 'shadow-gray-400',
        }
        
        


        ];






  return (
    <div name = "skills"  className = "bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"  >
        <div className= "  max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">   
            <div className= "">
              
            
                 <p className=' mt-20 text-4xl font-bold inline-block border-b-4 border-gray-500 p-2'>Skills Summary</p>
                 
                 <p className='py-6'>These are the technologies I've worked with. </p>

            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>


                {
                    techs.map(({ id, src, title, style }) => (


                            
                <div key= {id} className={ "shadow-md hover:scale-105 duration-500 py-2 rounded-lg " +  style }> 
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