import React, { useState } from "react";
import './contactUs.css'
import ContactImg from '../../../public/images/contactpageImg3.jpg'
import avatarImg from '../../../public/images/avatar.jpg'
const Contact = () => {
    const userInfo = JSON.parse(localStorage.getItem('UserDetails'))
    const { FirstName, LastName, Email } = userInfo ?? {};
    const [message, setMessage] = useState("");
    const handleMessage = (event) => {
        event.stopPropagation();
        if (message && FirstName) {
            alert(`Congratulations ${FirstName} ! \nyour message has been sent`);
        }
        else {
            if (!message) {
                alert("write the message")
            }
            else {
                alert("fill your name in form details");
            }
        }
    }
    return (
        <>
            <div className="contact">
                <div className="contact-container">
                    <div className="contact-container-left">
                        <div className="contact-heading">
                            <h3>Get in touch with us</h3>
                        </div>
                        <div className="contact-person">
                            <img src={avatarImg} alt="" />
                            <p>Hi, I’m Jhon Doe. Need help? Use the form below or email me at hello@california-golfclub.org.</p>
                        </div>
                        <div className="user-contact-details">
                            <div className="user-details">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" placeholder="Jhon Doe" value={`${FirstName ? `${FirstName}` : ''}${LastName ? `${LastName}` : ''}`} />
                            </div>

                            <div className="user-details">
                                <label htmlFor="email">Email</label>
                                <input type="text" id="email" placeholder="jhondoe@domain.com" value={Email} />
                            </div>
                            <div className="user-details">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" placeholder="Type your query here....." onChange={(event) => setMessage(event.target.value)}></textarea>
                            </div>
                        </div>
                        <div className="message-button" onClick={handleMessage}>Send my message</div>
                    </div>
                    <div className="contact-container-right">
                        <img src={ContactImg} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact;