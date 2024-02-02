import React from "react";
import "./Footer.scss";

const FooterContainer = () => {
  return (
    // <!-- Site footer -->
    <footer>
      <div className="footer flexbox-container">
        <div className="flexbox-item flexbox-item-1">
          <h3 class="widget-title">
            About Us<span></span>
          </h3>
          <p>
            A reputable start-up company that provides electrical services to
            clients.First Power Electrical Services is an accepted engineering
            company which spans accross various communities in Ghana,has won a
            lot of contracts in its environment due to proper working ethics as
            well as quality services it offers for its clients.
          </p>
        </div>

        <div className="flexbox-item flexbox-item-2 pb5">
          <h3 class="widget-title">
            Social Media<span></span>
          </h3>
          <ul class="footer-links">
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Linkedin</a>
            </li>
            <li>
              <a href="#">Github</a>
            </li>
          </ul>
        </div>

        <div className="flexbox-item flexbox-item-3">
          <h3 class="widget-title">
            Contact Us<span></span>
          </h3>

          <ul class="footer-links">
            <li>
              <a href="http://scanfcode.com/about/">About Us</a>
            </li>
            <li>
              <a href="http://scanfcode.com/contact/">Contact Us</a>
            </li>
            <li>
              <a href="http://scanfcode.com/contribute-at-scanfcode/">
                Contribute
              </a>
            </li>
            <li>
              <a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a>
            </li>
            <li>
              <a href="http://scanfcode.com/sitemap/">Sitemap</a>
            </li>
          </ul>
        </div>
      </div>
      {/* <div className="social-container">
        <h2>Follow us on</h2>

        <div class="footer-social-icons">
          <ul class="social-icons">
            <li>
              <a href="" class="social-icon">
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="" class="social-icon">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="" class="social-icon">
                <i class="fab fa-youtube"></i>
              </a>
            </li>
            <li>
              <a href="" class="social-icon">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div> */}
    </footer>
  );
};

export default FooterContainer;
