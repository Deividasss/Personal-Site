import "../Projects/Projects.scss"
import MyProjects from "../../ProjectsDataBase.json"
import { useState } from "react"
import ProjectCard from "../ProjectCard/ProjectCard"

const Projects = () => {
    const [projectsData, SetProjectsData] = useState(MyProjects)
    window.scrollTo(0, 0)

    return (
        <>
            <div className="projectsMain">
                <div className="projectsHeading">
                    <h1>My projects</h1>
                    <div className="container">
                        <div className="row justify-content-center">
                            {projectsData.projects.map((pro, i) => (
                                <ProjectCard
                                    key={i}
                                    id={pro.id}
                                    name={pro.name}
                                    img={pro.img}
                                    author={pro.author}
                                    demo={pro.demo}
                                    description={pro.description}
                                    gitHub={pro.gitHub}
                                    condition={pro.condition}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects