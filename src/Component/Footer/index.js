import React from "react";
import classes from "./Footer.module.css";
import { Logo } from "../../constant/imagePath";
import { Col, Container, Row } from "react-bootstrap";
import { MdEmail, MdLocalPhone, MdLocationOn } from "react-icons/md";

import { Link } from "react-router-dom";

const Footer = ({ containerClass }) => {
  return (
    <>
      <div className={classes.footerMain}>
        <Container
          className={[classes.mainContainer, containerClass].join(" ")}
        >
          <Row>
            <Col lg={5} md={12}>
              <div className={classes.colOneMain}>
                <Link to="/">
                  <div className={classes.imageMain}>
                    <img src={Logo} />
                  </div>
                </Link>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </Col>
            <Col lg={3} md={12}>
              <div className={classes.colTwoMain}>
                <h5>Quick Links</h5>
                <div className={classes.quickLinks}>
                  {/* <Link to="/">Home</Link> */}
                  <Link to="/">About Us</Link>
                  {/* <Link to="/">Pricing</Link> */}
                  <Link to="/">Contact Us</Link>
                  <Link to="/">Blogs</Link>
                </div>
              </div>
            </Col>
            <Col lg={4} md={12}>
              <div className={classes.colThreeMain}>
                <h5>Contact Us</h5>
                <div className={classes.contactUs}>
                  <a href="mailto:someone@example.com">
                    <p>
                      <MdEmail color="var(--primary-color)" size={20} />{" "}
                      Email@gmail.com
                    </p>
                  </a>

                  <a href="tel:+1234567890">
                    <p>
                      <MdLocalPhone color="var(--primary-color)" size={20} />
                      1234567890
                    </p>
                  </a>

                  <p>
                    <MdLocationOn color="var(--primary-color)" size={20} />{" "}
                    Location...
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={classes.footerBottom}>
        <p>Copyright © 2023 . All Rights Reserved.</p>
      </div>
    </>
  );
};

export default Footer;
