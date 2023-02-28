import React, { useRef } from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {BsTelegram} from 'react-icons/bs'
import emailjs from 'emailjs-com';



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_es4yio4', 'template_3c9vo4e', form.current, '-hj9eKhSYy5V_Nrne')
     
    e.target.reset()
  };


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        {/* start contact options */}
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>Ramadhanyandra13@gmail.com</h5>
            <a href="mailto:ramadhanyandra13@gmail.com">Send a Message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>088261394351</h5>
            <a href="https://api.whatsapp.com/send?phone=+6288261394351">Send a Message</a>
          </article>
          <article className='contact__option'>
            <BsTelegram className='contact__option-icon'/>
            <h4>Telegram</h4>
            <h5>081347600932</h5>
            <a href="https://api.telegram.com/send?phone=+6288261394351">Send a Message</a>
          </article>
        </div>
        {/* end contact options */}

        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="email" name='email' placeholder='Your Email' required />
            <textarea name="message"  cols="30" rows="10" placeholder='Your Message'></textarea>
            <button className="btn btn-primary" type='submit'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact