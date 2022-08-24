import React from 'react';
import {FaRobot, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const SocialLinks = () => {

    const links = [
        {
            id:1,
           child:( <>
                    LinkedIn <FaLinkedin size = {30}/>
           </>
           ),
           href: 'https://www.linkedin.com/in/jassim-s-salim-216b28200/',
           style: 'rounded-tr-mid'
        },

        {
            id:2,
           child:( <>
                    GitHub <FaGithub size = {30}/>
           </>
           ),
           href: 'https://github.com/jasTechStack',
           style: 'rounded-tr-mid'
        },



        {
            id:3,
           child:( <>
                    Outsystems <FaRobot size = {30}/>
           </>
           ),
           href: 'https://www.outsystems.com/profile/mghabadvp9/overview',
          
        },



        {
            id:4,
           child:( <>
                    Mails <HiOutlineMail size = {30}/>
           </>
           ),
           href: 'mailto:jassimssalim20@gmailcom',
          
        },


        {
            id:5,
           child:( <>
                    Resume <BsFillPersonLinesFill size = {30}/>
           </>
           ),
           href: '/resume.pdf',
           style: 'rounded-br-mid',
           download: true,
          
        },



         
    ]
    
    
  return (
    <div className=" hidden lg:flex flex-col top-[35%] left-0 fixed">
        <ul>
        {links.map(({id, child, href, style, download})=> 
                    
            <li key={id} className= {"flex justify-between items-center w-40 h-14 px-4  ml-[-105px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 " + " " + style }>


            <a href = {href} className= "flex justify-between items-center w-full text-white" download={download} target='_blank' rel='noreferrer'>
               {child}
            </a>
        </li>
                
                )}


        </ul>
    </div>
  )
}

export default SocialLinks