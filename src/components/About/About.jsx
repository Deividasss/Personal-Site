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
                        <p>I believe that true craftsmanship is when 'design' and ' build' work together. Which is why when putting a site together I not only ask myself 'does it look good?', I'm also thinking 'will it work well?'. With me it's not all about image, It's about keeping a website on its toes and at the top of its game.</p>
                        <p> I have 1 year of work on private projects. Every day I improve and try to learn new things, now I'm learning React-Native and
                            I have a couple of months of practice in this field, so I could easily use it to develop
                            your projects.</p>
                        <p>In the future, I would like to become a full stack programmer and learn C# or
                            Python to expand my knowledge and become a versatile worker who can handle
                            more than just Front-End tasks</p>
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