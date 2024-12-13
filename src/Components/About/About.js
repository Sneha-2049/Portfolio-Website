import React from 'react';
import './About.css';
import profile from '../../Assets/profile-pic.jpg'
import { scaleDown } from '../../variants'
import { motion} from 'framer-motion'
function About() {
    return (
        <div id='About' className='About-Me'>
            <h1>About Me</h1>
            <div className='profile-discription'>
                <div className='profile-img' style={{ backgroundImage: `url(${profile})` }}></div>
                <div className='carrer-discription'>
                    <p>I am a passionate and driven undergraduate Computer Science Engineering student, currently in my third year. As a frontend web developer, I enjoy designing and building user-friendly, responsive websites that offer seamless digital experiences, With a keen interest in creating innovative solutions. I strive to bridge creativity and functionality in every project I work on, I’m always eager to learn and grow, embracing new challenges to enhance my expertise and contribute to meaningful initiatives.</p>
                    <div className='skills-section'>
                        <div className='skills'>
                            <h3>HTML & CSS</h3>
                            <motion.span
                                initial={{ width: '0%' }}
                                whileInView={{ width: '80%' }}
                                transition={{ duration: 1.8 }}

                                className='line-chart line-width1'></motion.span>
                        </div>
                        <div className='skills'>
                            <h3>JavaScript</h3>
                            <motion.span
                                initial={{ width: '0%' }}
                                whileInView={{ width: '75%' }}
                                transition={{ duration: 1.8 }}
                                className='line-chart line-width2'></motion.span>
                        </div>
                        <div className='skills'>
                            <h3>React Js</h3>
                            <motion.span
                                initial={{ width: '0%' }}
                                whileInView={{ width: '70%' }}
                                transition={{ duration: 1.8 }}
                                className='line-chart line-width3'></motion.span>
                        </div>
                        <div className='skills'>
                            <h3>Git Github</h3>
                            <motion.span
                                initial={{ width: '0%' }}
                                whileInView={{ width: '60%' }}
                                transition={{ duration: 1.8 }}
                                className='line-chart line-width4'></motion.span>
                        </div>
                        <div className='skills'>
                            <h3>Oops</h3>
                            <motion.span
                                initial={{ width: '0%' }}
                                whileInView={{ width: '45%' }}
                                transition={{ duration: 1.8 }}
                                className='line-chart line-width5'></motion.span>
                        </div>
                        <div className='skills'>
                            <h3>Bootstrap</h3>
                            <motion.span
                                initial={{ width: '0%' }}
                                whileInView={{ width: '60%' }}
                                transition={{ duration: 1.8 }}
                                className='line-chart line-width6'></motion.span>
                        </div>
                        <div className='skills'>
                            <h3>Java/C/C++</h3>
                            <motion.span
                                initial={{ width: '0%' }}
                                whileInView={{ width: '50%' }}
                                transition={{ duration: 1.8 }}
                                className='line-chart line-width7'></motion.span>
                        </div>
                    </div>
                </div>
            </div>
            <motion.div
                variants={scaleDown}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.5 }}
                className='About-acheivements'>
                <div className='acheivement'>
                    <h2>2+</h2>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className='acheivement'>
                    <h2>10+</h2>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className='acheivement'>
                    <h2>3+</h2>
                    <p>INTERSHIPS</p>
                </div>
            </motion.div>
        </div>
    )
}
export default About