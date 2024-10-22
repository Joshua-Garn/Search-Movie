import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <>
      <section id="footer">
        <div className="footer__container">
          <hr />
          <div className="footer__row">
          <FontAwesomeIcon icon="fa-solid fa-film" className="logo__icon" />
            <p className="footer__copyright">
            © Search Movie All Rights Reserved
            </p>
            <ul className="footer__github">
            <a
                href="www.linkedin.com/in/joshua-garn-42b39332b"
                target="_blank"
              >
                <FontAwesomeIcon icon="fa-brands fa-linkedin" className="footer__github--icon" />
              </a>
              <a
                href="https://github.com/Joshua-Garn"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} className="footer__github--icon" />
              </a>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;