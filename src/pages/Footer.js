import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faCircleQuestion, faCopyright, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import PaymentIcon from "../components/PaymentIcon";

const Footer = () => {
  return (
  
      <div className="content">
        <div className="content-links-data">
          <div className="content-links-data-items">
            <h3 className="content-Name">
              About
            </h3>
            <h5>
              <Link to="">About Us</Link>
            </h5>
            <h5>
              <Link to="">Contact Us</Link>
            </h5>
            <h5>
              <Link to="">Informations</Link>
            </h5>
          </div>
          <div className="content-links-data-items">
            <h3 className="content-Name">
              Help
            </h3>
            <h5>
              <Link to="">Payments</Link>
            </h5>
            <h5>
              <Link to="">Shipping</Link>
            </h5>
            <h5>
              <Link to="">Cancellation & Return</Link>
            </h5>
          </div>
          <div className="content-links-data-items">
            <h3 className="content-Name">
              Consumer Policy
            </h3>
            <h5>
              <Link to="">Return Policy</Link>
            </h5>
            <h5>
              <Link to="">Security</Link>
            </h5>
            <h5>
              <Link to="">Sitemap</Link>
            </h5>
          </div>
          <div className="content-links-socials">
          <h4 className="content-links-socials-head" >Connect with us</h4>
            <div className="content-links-socialLink">
              <FontAwesomeIcon icon={faFacebook}  style={{color:"1877F2", marginRight:"1rem"}} className="Social-Logo"/>
              <FontAwesomeIcon icon={faInstagram} style={{color:"E4405F", marginRight:"1rem"}} className="Social-Logo"/>
              <FontAwesomeIcon icon={faTwitter}   style={{color:"1DA1F2", marginRight:"1rem"}}className="Social-Logo"/>
              <FontAwesomeIcon icon={faLinkedin} style={{color:"0A66C2"}} className="Social-Logo"/>
            </div>
            <div className="content-links-Email">
              <h4>
                <FontAwesomeIcon icon={faEnvelope}  style={{color:"white"}}/>
               <span>
              care@shopping.com
               </span> 
              </h4>
            </div>
          </div>
        </div>
        <div>
          <div className="Footer-content-links">
            <span className="copyright">
              <FontAwesomeIcon icon={faCopyright} style={{marginRight:".1rem",fontSize:"18px",color:"grey"}} /> 2023 Shopping All Rights
              Reserved
            </span>
            <PaymentIcon />
            <div className="Footer-content-Items">
              <span>Sell with us</span>
              <span>Terms to use</span>
              <span>Privacy Policy</span>
              <span>Warrenty Policy</span>
            </div>
            <div className="Footer-content-Items">
              <span> <FontAwesomeIcon icon={faCircleQuestion}  style={{marginRight:".5rem",color:"#ffd334"}}/>Help Center</span>
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default Footer;
