import React from 'react'
import './Home.css';
import { Link } from "react-router-dom";
import Templates from '../templatesPage/Templates';

const Home = () => {
    return (
        <>
            <div className="home">
                <div className="home-featured1">
                    <div className="home-featured1-left">
                        <h1>Free Online Resume Builder: Make Yours in Minutes!</h1>
                        <p>Create a professional resume with ease. Our builder features 30+ templates, step-by-step guidance and endless customizable content options.</p>
                        <Link  className='links' to="/templates">
                            <button className='build-button'>Build My Resume</button>
                        </Link>
                    </div>
                    <div className="home-featured1-right">
                        <img src="../../../public/images/resume.png" alt="resume.jpg" />
                    </div>
                </div>
            </div>
            <div className="home-brand-featured">
                <span>Our customers have been hired by:</span>
                <img src="../../../public/images/brand-logo.svg" alt="" />
            </div>
            {/* ************************************************ */}
            <div className="home-featured2">
                <div className="home-featured2-container">
                    <div className="home-featured2-left">
                        <img src="../assets/images/uparrow-logo.svg" alt="" />
                    </div>
                    <div className="home-featured2-middle">
                        <h3>Already have a resume?</h3>
                        <p>You can upload your existing resume into our builder to give it a professional design or freshen the content with our expert-written phrases.</p>
                    </div>
                    <div className="home-featured2-right">
                        <Link className='links' to="/form">
                            <button className='build-button featured2-button'>Update my resume</button>
                        </Link>
                    </div>
                </div>
            </div>
            {/* ************************************************ */}
            <div className="home-featured3">
                <h1>Why our resume builder works</h1>
                <div className="home-featured3-container">
                    <div className="home-featured3-left">
                        <div className="home-featured3-item">
                            <h3>It was designed by career experts.</h3>
                            <p>We ve done our research on your profession and your industry.
                                Just type your job title and professionally written
                                content (that you can personalize) is provided!
                            </p>
                        </div>
                        <div className="home-featured3-item">
                            <h3>It gets you past the robots.</h3>
                            <p>Applicant tracking software (ATS) is often the first set of “eyes” on your resume.
                                It scans your resume in search of keywords the employer programmed to weed out any
                                resumes that do not match what they are looking for.
                                All our designs are tested to ensure you get to the human behind the machine.
                            </p>
                        </div>
                        <div className="home-featured3-item">
                            <h3>It ensures you look like a professional.</h3>
                            <p>In addition to our eye-catching resume designs, we provide the most up-to-date tips
                                and guidance for your specific role, industry and experience level.
                            </p>
                        </div>
                        <Link className='links' to="/templates">
                            <button className='build-button featured3-button'>Build My Resume</button>
                        </Link>
                    </div>
                    <div className="home-featured3-right">
                        <img src="../assets/images/featured3-image.jpg" alt="resume.jpg" />
                    </div>
                </div>
            </div>
        </>
    )
}


export default Home;