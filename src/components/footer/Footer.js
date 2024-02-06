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
              <a href="http://scanfcode.com/sitemap/">Twitter</a>
            </li>
            <li>
              <a href="http://scanfcode.com/sitemap/">Facebook</a>
            </li>
            <li>
              <a href="http://scanfcode.com/sitemap/">Linkedin</a>
            </li>
            <li>
              <a href="http://scanfcode.com/sitemap/">Github</a>
            </li>
          </ul>
        </div>

        <div className="flexbox-item flexbox-item-3">
          <h3 class="widget-title">
            Solutions<span></span>
          </h3>

          <ul class="footer-links">
            <li>
              <a href="http://scanfcode.com/about/">
                Appliance Repairs and Installation
              </a>
            </li>
            <li>
              <a href="http://scanfcode.com/contact/">Air-condition works</a>
            </li>
            <li>
              <a href="http://scanfcode.com/contribute-at-scanfcode/">
                Routine Electrical Maintainence
              </a>
            </li>
            <li>
              <a href="http://scanfcode.com/privacy-policy/">Fault Tracing</a>
            </li>
          </ul>
        </div>
        <div className="flexbox-item flexbox-item-2 pb5">
          <h3 class="widget-title">
            Contact Us<span></span>
          </h3>
          <ul class="footer-links">
            <li>
              <p>
                <i class="fas fa-phone"></i>
                <a href="tel:+233592739920">+233 592739920</a>
              </p>
            </li>
            <li>
              <p>
                <i class="fas fa-envelope"></i>
                <a href="mailto:kwabenaemmanuel326@gmail.com">
                  kwabenaemmanuel326@gmail.com
                </a>
              </p>
            </li>
            <li>
              <p>
                <i class="fas fa-comment"></i>
                <a href="https://wa.me/+233592739920">+233 592739920</a>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default FooterContainer;
