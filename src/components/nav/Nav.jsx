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
    return (
        <>
            <div className="navMain">
                <nav class="navbar navbar-expand-lg">
                    <a href="/">
                        <img className="navLogo" src={DKlogo}></img>
                    </a>
                    <div class="navbar-collapse navLinks">
                        <ul class="navbar-nav">
                            <li class="">
                                <a class="navLink" onClick={() => navigate("Projects")}>Projects</a>
                            </li>
                            <li class="">
                                <a class="navLink" onClick={() => navigate("About")}>About</a>
                            </li>
                        </ul>
                        <div className="hireMe">
                            <a className="navLink" onClick={() => navigate("HireMe")}><span className="hireIcon">{<BsChatRight />}</span>Hire me</a>
                        </div>
                    </div>
                    <div>
                        <Navbar.Toggle onClick={openModal} className="hamburger"><FaBars /></Navbar.Toggle>
                    </div>
                </nav>
                <div className="hamburgerInfo">
                    <Modal size="lg" onHide={hideModal} show={modal} aria-labelledby="contained-modal-title-vcenter">
                        <div className="modalMain">
                            <Container className="nftEditMain">
                                <>
                                    <h1 className="menu">MENU</h1>
                                    <hr></hr>
                                    <ul class="navbar-nav">
                                        <li class="">
                                            <a class="navLink" onClick={() => { navigate("Projects"); hideModal() }}>Projects</a>
                                        </li>
                                        <hr></hr>
                                        <li class="">
                                            <a class="navLink" onClick={() => { navigate("About"); hideModal() }}>About</a>
                                        </li>
                                        <hr></hr>
                                        <li>
                                            <a className="navLink" onClick={() => { navigate("HireMe"); hideModal() }}>Hire me</a>
                                        </li>
                                    </ul>
                                    <hr></hr>
                                    <div class="text-center p-3">
                                        COPYRIGHT © DK, 2022
                                    </div>
                                </>
                            </Container>
                        </div>
                    </Modal>
                </div>
            </div>
        </>
    )
}

export default Nav