import React, { useRef } from 'react';
import './Navbar.css';
import { Link} from 'react-scroll';

function Navbar() {
    const menuRef = useRef();
    const openMenu = () => {
        menuRef.current.style.right = "0"
    }
    const closeMenu = () => {
        menuRef.current.style.right = "-300px"
    }
    return (
        <div className='Navbar'>
            <h1 className='logo'>Sneha</h1>
            <span className="material-symbols-outlined menu-open" onClick={openMenu}>menu</span>
            <ul ref={menuRef} className='Nav-items'>
                <span className="material-symbols-outlined menu-close" onClick={closeMenu}>close</span>
                <Link className='menu' to="Home" smooth={true} duration={500}><p>Home</p><hr /></Link>
                <Link className='menu' to="About" smooth={true} duration={500}><p>About</p><hr /></Link>
                <Link className='menu' to="Project" smooth={true} duration={500}><p>Projects</p><hr /></Link>
                <Link className='menu' to="Service" smooth={true} duration={500}><p>Services</p><hr /></Link>
                <Link className='menu' to="Contact" smooth={true} duration={500}><p>Contact</p><hr /></Link>
            </ul>
            <button className='connect-btn'><Link to="Contact" smooth={true} duration={500}>Connect With Me</Link></button>
        </div>
    )
}
export default Navbar