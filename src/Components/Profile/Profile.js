import React from 'react';
import './Profile.css';
import profile from '../../Assets/profile-image.jpg'
import { Link} from 'react-scroll';
import { motion, useInView} from 'framer-motion'
function Profile() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  return (
    <div id="Home" className='profile-info'>
      <div className='profile-pic' style={{ backgroundImage: `url(${profile})` }}>
      </div>
      <motion.div
        className='profile-description'>
        <h1>
          <span className='typing'>I'm Sneha Sahu</span><span className='rest-desc'>, frontend Web developer based in India.</span>
        </h1>
        <motion.p
          ref={ref}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.8 }}
        >I'm a frontend web developer from India, Crafting seamless and visually captivating web experiences is my forte. I transform ideas into responsive, user-friendly interfaces</motion.p>
        <div className='profile-btns'>
          <button className='contact-btn'><Link to="Contact" smooth={true} duration={500}>Connect With Me</Link></button>
          <button className='resume-btn' onClick={() => { window.location.href = "https://drive.google.com/file/d/1f9opAbsRKEqptEy1e1LToAj3I34hA80u/view?usp=sharing"; }}>My resume</button>

        </div>

      </motion.div>

    </div>
  )
}
export default Profile
