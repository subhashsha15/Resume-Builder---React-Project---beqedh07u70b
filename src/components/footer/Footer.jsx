import React from 'react'
import './Footer.css';
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">ProfolioBuilder</div>
        <div className="footer-top-right">
          <div className="footer-top-right-item">
            <h4>Resume</h4>
            <span>Resume Builder</span>
            <span>Resume Examples</span>
            <span>Resume Templates</span>
            <span>Resume Formats</span>
            <span>Resume Objectives</span>
            <span>How to Write a Resume</span>
          </div>
          <div className="footer-top-right-item">
            <h4>Cover Letter</h4>
            <span>Cover Letter Builder</span>
            <span>Cover Letter Examples</span>
            <span>Cover Letter Templates</span>
            <span>Cover Letter Formats</span>
            <span>How to Write a Cover Letter</span>
          </div>
          <div className="footer-top-right-item">
            <h4>CV</h4>
            <span>CV Builder</span>
            <span>CV Examples</span>
            <span>CV Templates</span>
            <span>CV Formats</span>
            <span>How To Write a CV</span>
          </div>
          <div className="footer-top-right-item">
            <h4>About</h4>
            <span>About Us</span>
            <span>Privacy Policy</span>
            <span>Terms of Use</span>
            <span>Editorial Policy</span>
            <span>Sitemap</span>
          </div>
          <div className="footer-top-right-item">
            <h4>Help & Support</h4>
            <span>Work Here</span>
            <span>Contact Us</span>
            <span>FAQ</span>
            <span>Accessibility</span>
            <span>Affiliates</span>
          </div>
          <div className="footer-top-right-item">
            <h4>Languages</h4>
            <div className="language-item">
              <div className="language-items">
                <span>EN</span>
                <span>UK</span>
                <span>ES</span>
                <span>FR</span>
                <span>IT</span>
                <span>DE</span>
              </div>
              <div className="language-items">
                <span>NL</span>
                <span>PT</span>
                <span>PL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="footer-bottom">
        <div className="footer-bottom-left">© 2023, Bold Limited. All rights reserved.</div>
        <div className="footer-bottom-right">
          <img src="../assets/images/facebook.png" alt="" />
          <img src="../assets/images/instagram.png" alt="" />
          <img src="../assets/images/linkedin.png" alt="" />
          <img src="../assets/images/pinterest.png" alt="" />
          <img src="../assets/images/twitter.png" alt="" />
        </div>
      </div>
    </div>
  )
}


export default Footer;