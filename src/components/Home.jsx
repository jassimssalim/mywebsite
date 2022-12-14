import React from 'react';
import HeroImage from "../asset/Tabs.svg";
import {MdOutlineKeyboardArrowRight} from "react-icons/md"
import {Link} from "react-scroll";

const Home = () => {
  return (
   <div name = "home" className= " h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 ">

       <div className= "max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row "> 

             <div className= "flex flex-col justify-center h-full"> 

                <h2 className="text-4xl sm:text-6xl font-bold text-white">I'm a Outsystems, <br/>  ReactJs Developer</h2>
                <p className="text-gray-500 py-4 max-w-md"> I have a 1 year experience building and designing software, currently I love to work on software applications 
                    using libraries/platforms like ReactJS, Tailwind and Outsystems Platform as my main work.

                </p>
             

             
                    <div> 
                         <Link to = "contact" smooth duration ={500} className="group text-white w-fit px-7 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"> 
                            Contact &nbsp; <b>ME</b>
                            <span className="group-hover:rotate-90 duration-300"> <MdOutlineKeyboardArrowRight size = {25} className="ml-1"/> </span>
                        
                        </Link>



                    </div>
            </div>
                                 <div>
                                 <img src={HeroImage} alt="" className = "hidden  md:flex "  />
                                </div>
       </div>
   </div>
  )
}

export default Home