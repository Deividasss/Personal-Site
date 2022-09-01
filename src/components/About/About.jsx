import "../About/About.scss"
import mono1 from '../../assets/Img/mono1.jpg'

const About = () => {
    window.scrollTo(0, 0)
    return (
        <>
            <div className="aboutMain">
                <div className="aboutInfo">
                    <div className="aboutHeading">
                        <h1>Deividas <br /> Kašėta</h1>
                        <h3>Junior Web Developer</h3>
                        <p>Front-End developer, adept in web development. I am ready to take a position in a company with a friendly environment that will expand my learning and support my developer skills.</p>
                        <p>5 months of work on private projects, you can find some of them in this site</p>
                        <h2>Education</h2>
                        <hr></hr>
                        <p className="course">High school at Merkinės Vinco Krėvės gimnasium, Merkinė<br /><span>SEPTEMBER 2006 — JULY 2019</span></p>
                        <h2>Courses</h2>
                        <hr></hr>
                        <p className="course">Front-End Web development at Baltic Institute Of Technology<br /><span>JANUARY 2022 — JUNE 2022</span></p>
                    </div>
                    <div className="aboutInfoImg">
                        <img className="aboutImg" src={mono1}></img>
                        <div>
                            <h1>Skills</h1>
                            <hr></hr>
                            <p>React</p>
                            <p>HTML&CSS</p>
                            <p>MySQL</p>
                            <p>JavaScript</p>
                            <p>Git</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About