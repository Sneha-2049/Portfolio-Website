import React from 'react'
import './Contact.css'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'


function Contact() {
  const [result, setResult] = React.useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "49cd139e-be46-4a6f-b531-1ac58bf2f5eb");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      alert(result)
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div id='Contact' className='contact-section'>
      <h1>Get in Touch</h1>
      <div className='contact-container'>
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className='contact-details'>
          <h1>Let's Talk</h1>
          <p>I'm currently available to take a new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
          <div className='contact-mode'>
            <span class="material-symbols-outlined">mail</span>
            <p>snehasahualb@gmail.com</p>
          </div>
          <div className='contact-mode'>
            <span class="material-symbols-outlined">perm_phone_msg</span>
            <p>9993023272</p>
          </div>
          <div className='contact-mode'>
            <span class="material-symbols-outlined">home_pin</span>
            <p>Vidisha, Madhya Pradesh, India</p>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className='contact-form'>
          <form action='' className='contact-info' onSubmit={onSubmit}>
            <div className='contact-input' >
              <label for="Name">Your Name</label>
              <input name="Name" id='name' placeholder='Enter your name' required />
            </div>
            <div className='contact-input'>
              <label for="Email">Your Email</label>
              <input name="Email" id='Email' placeholder='Enter your email' required />
            </div>
            <div className='contact-input'>
              <label for="Message">Write your message here</label>
              <textarea name="Message" id='Message' placeholder='Enter your message' required />
            </div>
            <button type='submit'>Submit now</button>
          </form>

        </motion.div>

      </div>
    </div>
  )
}
export default Contact
