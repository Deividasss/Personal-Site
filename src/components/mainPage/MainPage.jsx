import "../mainPage/MainPage.scss"
import { useNavigate } from 'react-router-dom';
import image from "../../assets/Img/headerImage.png"
import { FaConnectdevelop, FaMobileAlt, FaWordpress,FaLinkedin, FaPhoneAlt, FaMailBulk  } from 'react-icons/fa';


const MainPage = () => {
    const navigate = useNavigate()
    window.scrollTo(0, 0)

    return (
        <>
            <div className="content">
                <div className="header_general">
                    <img className="content_img" src={image} alt="Image" />
                    <h1 id="h1">Hi There, I Am David</h1>
                    <h1 id="h2">Creative Front-End Developer</h1>
                    <div className="btnContainer">
                        <button onClick={() => navigate("Projects")} className="headingBtn">View Works</button>
                    </div>

                </div>
            </div>
            <section className="aboutMeSection">
                <div className="aboutMeContainer">
                    <h2 className="aboutMeHeading">I’m a Creative developer based on Lithuania, who loves clean, simple & unique design.</h2>
                    <p className="aboutMeParagraph">I believe that true craftsmanship is when 'design' and ' build' work together. Which is why when putting a site together I not only ask myself 'does it look good?', I'm also thinking 'will it work well?'. With me it's not all about image, It's about keeping a website on its toes and at the top of its game.</p>
                    <div className="btnContainer">
                        <button onClick={() => navigate("About")} className="headingBtn">About Me</button>
                    </div>
                </div>
            </section>
            <section className="servicesSection">
                <div className="servicesContainer">
                    <h2 className="myServicesHeading">My Services</h2>
                    <div className="services">
                        <div className="service">
                            <i className="icons">{<FaConnectdevelop />}</i>
                            <h3 className="serviceTitle">Web Development</h3>
                            <p className="serviceParagraph">One year experience with HTML/CSS, React, JavaScript, Git,</p>
                        </div>
                        <div className="service">
                            <i className="icons">{<FaMobileAlt />}</i>
                            <h3 className="serviceTitle">Mobile App Development</h3>
                            <p className="serviceParagraph">One year of experience in developing mobile apps with React-Native</p>
                        </div>
                        <div className="service">
                            <i className="icons">{< FaWordpress />}</i>
                            <h3 className="serviceTitle">WordPress Development</h3>
                            <p className="serviceParagraph"> Two months of experience working with WordPress</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="letsTalkSection">
                <div className="letsTalkContainer">
                    <h2 className="letsTalkHeading">Do you have any Project? <a className="link" onClick={() => navigate('HireMe')}>Let’s Talk</a></h2>
                    <p className="letsTalkParagraph">Do you have an idea but don't have a specialist to help you implement it? Contact me and I promise that your ideas will come true.</p>
                    <div class="letsTalk_columns">
                        <div class="letsTalk_column">
                            <i>{<FaLinkedin />}</i>
                            <h3>LINKEDIN</h3>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/deividas-ka%C5%A1%C4%97ta-1888aa193/">Deividas Kašėta</a>
                        </div>
                        <div class="letsTalk_column">
                            <i>{<FaPhoneAlt />}</i>
                            <h3>CALL ME</h3>
                            <p>+370 62271977</p>
                        </div>
                        <div class="letsTalk_column">
                            <i>{<FaMailBulk />}</i>
                            <h3>EMAIL ADDRESS</h3>
                            <p><span>deividas.kasetait@gmail.com</span></p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default MainPage