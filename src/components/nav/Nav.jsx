import "../nav/Nav.scss"
import DKlogo from '../../assets/Img/DKlogo.png'
import { useNavigate } from 'react-router-dom';
import { BsChatRight } from 'react-icons/bs';
import { Modal, Button, Container, Navbar } from 'react-bootstrap';
import { useState } from "react";
import { FaBars, } from 'react-icons/fa';

const Nav = () => {
    const navigate = useNavigate()
    const [modal, setModal] = useState(false)

    const openModal = () => {
        setModal(true)
    }

    const hideModal = () => {
        setModal(false)
    }

    window.addEventListener('scroll', () => {
        const offset = 260
        if (window.scrollY >= offset)
            document.getElementById('navigation').classList.add('scrolled')
        else
            document.getElementById('navigation').classList.remove('scrolled')
    })

    return (
        <>
            <nav id="navigation" class="navigation">
                <a onClick={() => navigate('/')}>
                    <img id="logo" class="logo" src={DKlogo} alt="Nuotrauka" />
                </a>
                <div id="links" class="links">
                    <a className="navLinks" onClick={() => navigate('/')}>HOME</a>
                    <a className="navLinks" onClick={() => navigate('About')}>ABOUT</a>
                    <a className="navLinks" onClick={() => navigate('HireMe')}>HIRE ME</a>
                    <a className="navLinks" onClick={() => navigate('Projects')}>WORKS</a>
                </div>
            </nav>
        </>
    )
}

export default Nav