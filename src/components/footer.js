import React from 'react'
import './footer.css'
import { AiFillGithub,AiFillLinkedin,AiFillInstagram} from "react-icons/ai";
import { IoIosArrowUp } from "react-icons/io";

import { Link } from 'react-scroll';



function Footer() {


  return (
    <div className='footer'>


       <Link className='upScroll' to="head" smooth={true} > <IoIosArrowUp /></Link>

       
       <div className='footercont'>
            <div className='links'>
                <ul>
                    <Link>Aff Marketing </Link>
                    <Link>Career</Link>
                    <Link>Home</Link>
                    <Link>Sales</Link>
                    <Link>About Us</Link>
                  
                </ul>

            </div>
            <div className='links'>
                <ul>
                    <Link>Partner </Link>
                    <Link>Your Cares</Link>
                    <Link>Fulfilment by us</Link>
                    <Link>Protection</Link>
                    <Link>Your Account</Link>
                  
                </ul>

            </div>
            <div className='links'>
                <ul>
                    <Link>Press Releases</Link>
                    <Link>Career</Link>
                    <Link>Sell on Amazon</Link>
                    <Link>Sales</Link>
                    <Link>Become an Affiliate</Link>
                  
                </ul>

            </div>
            <div className='links'>
                
            <ul>
                    <Link>Affiliate </Link>
                    <Link>Gift a Smile</Link>
                    <Link>Global Selling</Link>
                    <Link>Partner</Link>
                    <Link>Returns Centre</Link>
                  
                </ul>


            </div>
            </div>
       
      
       

       
           <div className='ftr-icons'>
              <a href='https://github.com/rkrockss' target="blank"><span className='ftr-icon' ><AiFillGithub /></span></a>
                <a target="blank" href='https://www.linkedin.com/in/rhythm-kumawat-408094233/?trk=public_profile_browsemap&original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in'>
               <span className='ftr-icon'><AiFillLinkedin /></span>
               </a> 
               <a href='https://www.instagram.com/rhythm_kumawat_/?hl=en' target="blank">  <span className='ftr-icon'><AiFillInstagram /></span> </a>
                
                
             </div>
             <p  className='ftr-email'>rhythmkumawat2207@gmail.com</p>


    </div>
  )
}

export default Footer