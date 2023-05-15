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
                        <p> I am a Junior Front-End developer with more than one year of experience in the field. When I'm programming, I feel like I'm going for a walk in nature, because it's work that makes me relax. I started my programming path at the Baltic Institute of technology, where I learned the basics, after some time I entered the Present Connection academy, where I continued to deepen my skills. Currently I’m learning PHP and mySQL. I am looking for a company that will become my new programming home and help me continue to achieve my goals objectives.</p>
                        
                        <h2>Education</h2>
                        <hr></hr>
                        <p className="course">High school at Merkinės Vinco Krėvės gimnasium, Merkinė<br /><span>SEPTEMBER 2006 — JULY 2019</span></p>
                        <h2>Courses</h2>
                        <hr></hr>
                        <p className="course">Front-End Web development at Baltic Institute Of Technology<br /><span>JANUARY 2022 — JUNE 2022</span></p>
                        <p className="course"> Present Connection Full Stack Academy<br /><span>OCTOBER 2022 — FEBRUARY 2023</span></p>
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
                            <p>PHP</p>
                            <p>WordPress</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About