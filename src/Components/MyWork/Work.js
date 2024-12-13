import React from "react";
import './Work.css'
import Mywork_Data from '../../Assets/Mywork'
import { motion } from 'framer-motion'
import { scaleUp } from '../../variants'

function Work() {
    return (
        <div id="Project" className="work-section">
            <h1>My Latest Work</h1>
            <motion.div
                variants={scaleUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}

                className="project-container">
                {
                    Mywork_Data.map((work, index) => {
                        return <div key={index} className="work-card" onClick={() => { window.location.href = work.project_link; }} style={{ backgroundImage: `url(${work.project_img})` }}>
                            <a href={work.github_link} target="_blank" rel="noopener noreferrer" className="github-link" onClick={(e) => e.stopPropagation()} >
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                    })
                }
            </motion.div>
            <button className="seemore-btn" onClick={()=>{window.location.href="https://github.com/Sneha-2049?tab=repositories"}}>See More<span className="material-symbols-outlined"> arrow_right_alt</span>
            </button>
        </div>
    )
}
export default Work