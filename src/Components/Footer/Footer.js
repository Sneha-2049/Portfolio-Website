import React from 'react'
import './Footer.css'
import { Link} from 'react-scroll';
function Footer() {
    return (
        <div className='footer'>
            <div className='footer-section'>
                <div className='description'>
                    <h1>Sneha Sahu</h1>
                    <p>I am a frontend developer from, India with 2 year of experience in technologies like Html, Css, Javascript and React.js</p>
                </div>
                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/sneha-sahu-898816259" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>

                    <a href="https://github.com/sneha-2049" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                    </a>

                    <a href="mailto:snehasahualb@gmail.com" rel="noopener noreferrer">
                        <i className="fas fa-envelope"></i>
                    </a>
                </div> </div>
            <hr />
            <div className='footer-bottom'>
                <p>⚪️ 2024 Sneha Sahu. All right reserved</p>
                <div className='Acheivement'>
                    <a href='https://drive.google.com/file/d/1WzhIcVLadvyYs3lh8eIQ8IBCEIgevzpI/view?usp=drive_link'><h4>Java Certificate</h4></a>
                    <a href='https://drive.google.com/file/d/1dLATnGE89teSEHcemj_RJ9zy7ZEm02Gy/view?usp=sharing'><h4>C Certificate</h4></a>
                    <Link to="Contact" smooth={true} duration={500}><h5>Connect With Me</h5></Link>
                </div>
            </div>
        </div>
    )
}
export default Footer
