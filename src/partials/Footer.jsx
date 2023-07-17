import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import "./Footer.css";

function Footer() {
    return (
        <>
            <footer className="px-4">
                <div className="foot-left d-flex">
                    <p>Aldi &copy; 2023</p>
                </div>
                <div className="foot-right d-flex">
                    <a href="https://github.com/renaldi-oss" target="_blank" rel="noreferrer">
                        <AiFillGithub className="foot-icon" />&nbsp;&nbsp;GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/reynaldi-fakhri-pratama-264575208/" target="_blank" rel="noreferrer">
                        <AiFillLinkedin className="foot-icon" />&nbsp;&nbsp;Linkedin
                    </a>
                    {/* <a href="#" target="_blank" rel="noreferrer">
                        <AiFillInstagram className="foot-icon" />&nbsp;&nbsp;Instagram
                    </a> */}
                </div>
            </footer>
        </>
    )
}

export default Footer;