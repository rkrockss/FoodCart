import React, { useState } from 'react'
import './contact.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
 
    const clearText=()=>{
        setdone(false);
        document.getElementById('input').value="";
        document.getElementById('input2').value="";
        document.getElementById('input3').value="";    
    };

    const form = useRef();
    const[done ,setdone]=useState(false)

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('rhythm2207', 'template_tabfm7m', form.current, 'BJZCtFMN6WjVhooGo')
        .then((result) => {
        setdone(true);   
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <div className='contact' id='cont'>

        <div className='c-left'>
            <span>Get In Touch</span>
        </div>
        <div className='c-right'>
         <form  ref={form} onSubmit={sendEmail} className='c-form'>
            <input required type="text" name="user_name" id='input' className='user' placeholder='Name' />
            <input  type="email" name="user_email" id='input2' className='user' placeholder='Email' />
            <textarea required name="message" className='user ' id='input3' placeholder='Type Your Message' />
            <button  type=" submit"className=' send-btn' value="Send">Send</button>
    
         </form>
         <div style={{display:"flex",flexDirection:"column", justifyContent:"center"}}>
         <button  onClick={clearText}  className=' clr-btn'>Clear</button>
         { done ? <span style={{fontSize:"1.5rem",marginTop:"1rem" ,textAlign:"center",backgroundColor:" var(--primary)",color:"white",padding:".5rem .1rem",borderRadius:"15px"}}> Successfully Sent !</span>:null}

         </div>
  
        
        </div>


        
    </div>
  )
}

export default Contact