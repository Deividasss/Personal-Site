import "../nav/Nav.scss"
import DKlogo from '../../assets/Img/DKlogo.png'
import { useNavigate } from 'react-router-dom';
import { BsChatRight } from 'react-icons/bs';

const Nav = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="navMain">
                <nav class="navbar navbar-expand-lg">
                    <a href="/">
                        <img className="navLogo" src={DKlogo}></img>
                    </a>
                    <div class="collapse navbar-collapse navLinks">
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
                </nav>
            </div>
        </>
    )
}

export default Nav