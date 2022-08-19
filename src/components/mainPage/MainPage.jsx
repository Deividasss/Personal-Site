import "../mainPage/MainPage.scss"
import mono2 from '../../assets/Img/mono2.png'
import { useNavigate } from 'react-router-dom';
import mono4 from '../../assets/Img/mono4.png'


const MainPage = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="mainPage">
                <div className="mainHeading">
                    <h1>Hi, my <br /> name is <strong>Deividas</strong></h1>
                    <p>I am an independent creative Front-End developer from <br /> Lithuania</p>
                    <button className="readMoreBtn" onClick={() => navigate("About")}>Read more</button>
                </div>
                <div>
                    <img className="mainImg" src={mono2}></img>
                </div>
                <div className="projectHeading">
                    <img className="mainImg" src={mono4}></img>
                    <div>
                        <h1>You can find <br />my projects here</h1>
                        <button className="projectsBtn" onClick={() => navigate("projects")}>Projects</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainPage