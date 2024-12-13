import React from 'react';
import './Services.css';
import Services_Data from '../../Assets/Services_Data'
import { motion } from 'framer-motion'
import { scaleUp } from '../../variants'

function Services() {
    return (
        <div id='Service' className='About-services'>
            <h1>My Services</h1>
            <motion.div
                variants={scaleUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
                className='Services-section'>
                {Services_Data.map((service, index) => {
                    return <div key={index} className='services'>
                        <h4>{service.s_no}</h4>
                        <h3>{service.s_name}</h3>
                        <p>{service.s_desc}</p>
                    </div>

                })}

            </motion.div>
        </div>
    )
}
export default Services