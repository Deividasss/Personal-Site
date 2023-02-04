import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import "../Footer/Footer.scss"

const Footer = () => {
    return (
        <>
            <footer class="appFooter">
                <div class="container p-4 pb-0">
                    <section class="mb-4">
                        <a class="btn  btn-floating m-2" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/deividas.kaseta.9" role="button"
                        ><i className='icon'><FaFacebookF /></i></a>
                        <a class="btn  btn-floating m-1" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/deividas_physique/" role="button"
                        ><i className='icon'><FaInstagram /></i></a>
                        <a class="btn  btn-floating m-1" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/deividas-ka%C5%A1%C4%97ta-1888aa193/" role="button"
                        ><i className='icon'><FaLinkedin /></i></a>
                        <a class="btn  btn-floating m-1" target="_blank" rel="noopener noreferrer" href="https://github.com/Deividasss" role="button"
                        ><i className='icon'><FaGithub /></i></a>
                    </section>
                </div>
                <div class="text-center p-3">
                    COPYRIGHT © DK, 2022
                </div>
            </footer>
        </>
    )
}
export default Footer