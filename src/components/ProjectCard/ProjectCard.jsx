import "../ProjectCard/ProjectCard.scss"
import { useNavigate } from 'react-router-dom';
import { Modal, Button, Container } from 'react-bootstrap';
import { useState } from "react";

const ProjectCard = (props) => {

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
            <div class="col-md-3 productBox">
                <a onClick={openModal}>
                    <div class="product-grid">
                        <div class="product-image">
                            <a class="image">
                                <img
                                    className="cf_image pic-1"
                                    src={props.img}
                                    alt="image"
                                />
                            </a>
                        </div>
                        <div class="product-content">
                            <h3 className="product-title">{props.name}</h3>
                            <hr className="line"></hr>
                        </div>
                    </div>
                </a>
            </div>

            <Modal size="lg" onHide={hideModal} show={modal} aria-labelledby="contained-modal-title-vcenter" centered>
                <div className="modalMain">
                    <Button className="itemModalBtn btn-close" variant="light" onClick={hideModal}></Button>
                    <Container className="nftEditMain">
                        <>
                            <div className="crowdFundEdit">
                                <div className="nftInfoMain">
                                    <img
                                        className="nftEditImg"
                                        src={props.img}
                                        alt="image"
                                    />
                                    <div className="nftInfo">
                                        <h3 className="nftCollection">{props.name}<img className="collectionImg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Sign-check-icon.png/800px-Sign-check-icon.png"></img></h3>
                                        <h3 className="nftTitle">{props.name}</h3>
                                    </div>
                                </div>
                                <div className="description">
                                    <h3 className="nftDescriptionTitle">Description:</h3>
                                    <hr className="nftHrLine"></hr>
                                    <h3 className="nftDescription">{props.description}</h3>
                                </div>
                                <div className="details">
                                    <h3 className="nftDetails">Details:</h3>
                                    <hr></hr>
                                    <h3 className="nftCreator">The author:<span className="nftCreatorEmail">{props.author}</span> </h3>
                                    <h3 className="nftCreator">Live Demo:<span className="nftCreatorEmail"> <a target="_blank" rel="noopener noreferrer" href={props.demo}>{props.condition}</a></span> </h3>
                                    <h3 className="nftCreator">GitHub:<span className="nftCreatorEmail"> <a target="_blank" rel="noopener noreferrer" href={props.gitHub}>{props.name}</a></span> </h3>
                                    <hr></hr>
                                </div>
                            </div>
                        </>
                    </Container>
                </div>
            </Modal>
        </>
    )
}

export default ProjectCard