import "../HireMe/HireMe.scss"
import { FaLinkedin, FaPhoneAlt, FaMailBulk } from 'react-icons/fa';

const HireMe = () => {
    return (
        <>
            <div className="hireMeMain">
                <div className="hireMeHeading">
                    <div class="header_address">
                        <h3><span>YOU CAN CONTACT ME BY</span></h3>
                    </div>
                    <div class="section12_columns">
                        <div class="section12_column">
                            <i>{<FaLinkedin />}</i>
                            <h3>LINKEDIN</h3>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/deividas-ka%C5%A1%C4%97ta-1888aa193/">Deividas Kašėta</a>
                        </div>
                        <div class="section12_column">
                            <i>{<FaPhoneAlt />}</i>
                            <h3>CALL ME</h3>
                            <p>+370 62271977</p>
                        </div>
                        <div class="section12_column">
                            <i>{<FaMailBulk />}</i>
                            <h3>EMAIL ADDRESS</h3>
                            <p><span>deividas.kasetait@gmail.com</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HireMe