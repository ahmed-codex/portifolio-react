import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import toast from 'react-hot-toast';

const info = [
  {icon: FaPhone , name: "Call me", href: "tel:+201157153463"},
  {icon: IoMdMail , name: "E-Mail", href: "mailto:ahmed.codex1@gmail.com"},
  {icon: FaLinkedinIn , name: "Linked In", href: "https://www.linkedin.com/in/ahmed-codex/"},
  {icon: FaGithub , name: "GitHub", href: "https://github.com/ahmed-codex"},
]

const Connect = () => {
   const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ja3tovn', 'template_txcdb57', form.current, {
        publicKey: 'zL7dr49oTroow9ZtQ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset();
          toast.success('Successful Send Message!')
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error('FAILED Send Message', error.text)
        },
      );
  };
  return (
    <div id='connect' className='py-10 h-auto '>

        <h2 className='text-4xl mb-15 flex items-center justify-center capitalize font-bold tracking-wide text-gray-200'>Connect Me</h2>
          <div className='flex flex-col md:flex-row items-center justify-center gap-8  '>
              <div className="connect flex flex-col items-center justify-between bg-black/20 w-60 md:w-50 h-90 p-8 shadow-[0_0_15px_rgba(59,100,150,0.7)] text-gray-500 rounded-lg">
                 {info.map((item , index)=>(
                   <a href={item.href} target='_blank' key={index} className='cursor-pointer hover:text-gray-300 hover:shadow-[0_0_15px_rgba(59,100,150,0.7)]  w-40 transition-all duration-300  flex items-center justify-center gap-5 py-3 text-lg bg-black/15 rounded-4xl border-gray-600 last:border-none last:mb-0'>
                        <item.icon className='size-6' />
                        <p>{item.name}</p>
                   </a>
                  ))}
              </div>
              <div className="form bg-black/15 p-5 rounded-2xl shadow-[0_0_15px_rgba(59,100,150,0.7)] ">
                  <h2 className='text-white text-xl md:text-2xl font-serif capitalize tracking-wide flex items-center justify-center mb-4'>Send me a message </h2>
                  <form ref={form} onSubmit={sendEmail} className='flex items-start justify-center text-white flex-col border-t pt-3 border-gray-300'>
                    <label className='mb-2'>Name</label>
                    <input type="text" name="name" required className='bg-black/20 py-2 px-2 mb-4 w-55 sm:w-75 md:w-85 rounded-lg text-gray-500 focus:shadow-[0_0_20px_rgba(59,130,246,0.7)]' placeholder='Full Name '/>
                    <label className='mb-2'>Email</label>
                    <input type="email" name="email" required className='bg-black/20 py-2 px-2 mb-4 w-55 sm:w-75 md:w-85 rounded-lg text-gray-500 focus:shadow-[0_0_20px_rgba(59,130,246,0.7)]' placeholder='E-Mail ' />
                    <label className='mb-2'>Message</label>
                    <textarea name="message" required className='bg-black/20 py-2 px-2 mb-4 w-55 sm:w-75 md:w-85 rounded-lg text-gray-500 focus:shadow-[0_0_20px_rgba(59,130,246,0.7)]' placeholder='Message ' />
                    <input type="submit" value="Send" className='w-full bg-blue-900 py-2 transition-all duration-300 rounded-2xl cursor-pointer hover:bg-indigo-800'/>
                  </form>
              </div>
          </div>
        
    </div>
  )
}

export default Connect