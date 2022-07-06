import { Link } from "react-router-dom";
import { Button } from "./Button.js";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-columns">
        <div className="visit">
          <ul>
            <h4>Visit Us:</h4>
            <li>Envoy So. California 34 Tesla, Ste 100 Irvine, CA, USA</li>
          </ul>
        </div>
        <div className="company">
          <ul>
            <h4>Company:</h4>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="legal">
          <ul>
            <h4>Legal:</h4>
            <li>
              <a href="#">Terms</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
          </ul>
        </div>
        <div className="socials">
          <h4>Follow Us:</h4>
          <div className="icons">
            <ul>
              <li>
                <i class="fab fa-facebook"></i>
              </li>
              <li>
                <i class="fab fa-twitter"></i>
              </li>
              <li>
                <i class="fab fa-instagram"></i>
              </li>
              <li>
                <i class="fab fa-youtube"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright">
        <h4>fjmcruz © 2021</h4>
      </div>
    </div>
  );
}

export default Footer;
