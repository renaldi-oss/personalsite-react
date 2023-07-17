import { Container } from 'react-bootstrap';
import { AiOutlineLink, AiFillGithub } from 'react-icons/ai';
import Project1 from '../assets/img/Project1.png';
import Project2 from '../assets/img/Project2.PNG';
import Project3 from '../assets/img/Project3.PNG';
import Project4 from '../assets/img/Project4.PNG';
import Project5 from '../assets/img/Project5.PNG';
import Project10 from '../assets/img/Project10.png';

import Helmet from 'react-helmet';
import './Projects.css';

function Projects() {
    return (
        <>
            <Helmet>
                <title>Aldi - Projects</title>
            </Helmet>
            <Container fluid className="projects-container">
                <div className="projects-title animate__animated animate__zoomIn">
                    <h3>Projects</h3>
                    <h4>───&nbsp;&nbsp;Page <strong>04</strong></h4>
                </div>
                <div className="projects-wrapper animate__animated animate__fadeIn animate_slower my-4">
                    <div className="row">
                        <div className="col project-col">
                            <div className="project-card">
                                <img src={Project1} alt="Project 1" loading="lazy" />
                                <div className="project-content">
                                    <h3>Servicein</h3>
                                    <p>Merupakan platform yang bertujuan untuk mempromosikan tukang reparasi</p>
                                    <a className="btn-github" href="https://github.com/renaldi-oss/ServiceIn" target="_blank" rel="noreferrer"><AiFillGithub className="project-icon" />&nbsp;&nbsp;GitHub</a>
                                    <div className="tech-stack-wrapper">
                                        <span id="tech-stack">Tailwind</span>
                                        <span id="tech-stack">Alpine js</span>
                                        <span id="tech-stack">Laravel</span>
                                        <span id="tech-stack">Livewire</span>
                                    </div>
                                </div>
                            </div>
                            <div className="project-card">
                                <img src={Project2} alt="Project 2" loading="lazy" />
                                <div className="project-content">
                                    <h3>Resumblues</h3>
                                    <p>Project yang bertujuan untuk membuat resume secara online.</p>
                                    <a className="btn-github" href="https://github.com/renaldi-oss/Resumate.git" target="_blank" rel="noreferrer"><AiFillGithub className="project-icon" />&nbsp;&nbsp;GitHub</a>
                                    <a className="btn-website" href="https://resumblues.vercel.app/" style={{ marginLeft:'10px' }} rel="noreferrer"><AiOutlineLink className="project-icon" />&nbsp;&nbsp;Website</a>
                                    <div className="d-block tech-stack-wrapper">
                                        <span id="tech-stack">React</span>
                                    </div>
                                </div>
                            </div>
                            <div className="project-card">
                                <img src={Project3} alt="Project 3" loading="lazy" />
                                <div className="project-content">
                                    <h3>Smart Parking System</h3>
                                    <p>Merupakan project iot yang dimana mengimplementasikan ruangan parkir yang dapat dimonitor secara online</p>
                                    <a className="btn-github" href="https://github.com/renaldi-oss/smart-parking-system-react" target="_blank" rel="noreferrer"><AiFillGithub className="project-icon" />&nbsp;&nbsp;GitHub</a>
                                    <a className="btn-website" href="https://sps-iot.vercel.app/" style={{ marginLeft:'10px' }} rel="noreferrer"><AiOutlineLink className="project-icon" />&nbsp;&nbsp;Website</a>
                                    <div className="d-block tech-stack-wrapper">
                                        <span id="tech-stack">C++</span>
                                        <span id="tech-stack">React</span>
                                    </div>
                                </div>
                            </div>
                            <div className="project-card">
                                <img src={Project4} alt="Project 4" loading="lazy" />
                                <div className="project-content">
                                    <h3>Profile Diri</h3>
                                    <p>Outdated Proyek profile diri yang berisikan mengenai tentang dan skill, menyerupai portfolio tetapi berbasis mobile</p>
                                    <a className="btn-github" href="https://github.com/renaldi-oss/self-profile" target="_blank" rel="noreferrer"><AiFillGithub className="project-icon" />&nbsp;&nbsp;GitHub</a>
                                    <a className="btn-website" href="https://oldreynaldi.vercel.app/" style={{ marginLeft:'10px' }} rel="noreferrer"><AiOutlineLink className="project-icon" />&nbsp;&nbsp;Website</a>
                                    <div className="d-block tech-stack-wrapper">
                                        <span id="tech-stack">React</span>
                                    </div>
                                </div>
                            </div>
                            <div className="project-card">
                                <img src={Project5} alt="Project 4" loading="lazy" />
                                <div className="project-content">
                                    <h3>ChatGan</h3>
                                    <p>Merupakan project dimana saya berhasil mengimplementasikan websocket</p>
                                    <a className="btn-github" href="https://github.com/renaldi-oss/self-profile" target="_blank" rel="noreferrer"><AiFillGithub className="project-icon" />&nbsp;&nbsp;GitHub</a>
                                    <div className="d-block tech-stack-wrapper">
                                        <span id="tech-stack">React</span>
                                    </div>
                                </div>
                            </div>
                            <div className="project-card">
                                <img src={Project5} alt="Project 4" loading="lazy" />
                                <div className="project-content">
                                    <h3>ChatGan</h3>
                                    <p>Merupakan project dimana saya berhasil mengimplementasikan websocket</p>
                                    <a className="btn-github" href="https://github.com/renaldi-oss/self-profile" target="_blank" rel="noreferrer"><AiFillGithub className="project-icon" />&nbsp;&nbsp;GitHub</a>
                                    <div className="d-block tech-stack-wrapper">
                                        <span id="tech-stack">React</span>
                                    </div>
                                </div>
                            </div>
                            <div className="project-card">
                                <img src={Project10} alt="Project 10" loading="lazy" />
                                <div className="project-content">
                                    <h3>Moviepedia</h3>
                                    <p>Aplikasi database film</p>
                                    <a className="btn-github" href="https://github.com/renaldi-oss/self-profile" target="_blank" rel="noreferrer"><AiFillGithub className="project-icon" />&nbsp;&nbsp;GitHub</a>
                                    <div className="d-block tech-stack-wrapper">
                                        <span id="tech-stack">Flutter</span>
                                    </div>
                                </div>
                            </div>
                            <div className="project-card">
                                <img src={Project10} alt="Project 10" loading="lazy" />
                                <div className="project-content">
                                    <h3>Weatherapp</h3>
                                    <p>Proyek uts pemrogaman mobile dimana membuat aplikasi cuaca</p>
                                    <a className="btn-github" href="https://github.com/renaldi-oss/self-profile" target="_blank" rel="noreferrer"><AiFillGithub className="project-icon" />&nbsp;&nbsp;GitHub</a>
                                    <div className="d-block tech-stack-wrapper">
                                        <span id="tech-stack">Flutter</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Projects;