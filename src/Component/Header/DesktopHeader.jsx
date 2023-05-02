import React, { useState } from "react";
import { Container, Nav } from "react-bootstrap";
import { Logo } from "../../constant/imagePath";
import classes from "./DesktopHeader.module.css";
import { NavLink, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
const DesktopHeader = ({
  logo = Logo,
  className,
  containerClass,
  backgroundColor,
  width,
}) => {
  const navigate = useNavigate();

  const currentLink = window.location.pathname;
  // console.log(currentLink, "currentLinkcurrentLink");

  return (
    <>
      <div
        style={{ backgroundColor: backgroundColor }}
        className={[classes.mainHeader, className].join(" ")}
      >
        <Container
          className={[classes.mainContainer, containerClass].join(" ")}
          style={{ maxWidth: width && width }}
        >
          <div className={classes.headerInnerMain}>
            <div onClick={() => navigate("/")} className={classes.logoImgDiv}>
              <img src={logo} alt={"Logo"} />
            </div>

            <div className={classes.navLinksMain}>
              <NavLink
                to="/"
                // className={({ isActive }) =>
                //   isActive
                //     ? `${[classes.navbarLinks, classes.navActive].join(" ")}`
                //     : `${[classes.navbarLinks]}`
                // }
                className={
                  currentLink == "/" ? classes.navActive : classes.navbarLinks
                }
              >
                Home
              </NavLink>

              <Nav.Link
                // className={({ isActive }) =>
                //     isActive
                //       ? `${[classes.navbarLinks, classes.navActive].join(" ")}`
                //       : `${[classes.navbarLinks]}`
                //   }
                className={
                  currentLink == "/" ? classes.navActive : classes.navbarLinks
                }
              >
                <span
                  onClick={() => {
                    navigate("/", { state: { href: "#" } });
                  }}
                >
                  Home
                </span>
              </Nav.Link>

              <Nav.Link
                // className={({ isActive }) =>
                //     isActive
                //       ? `${[classes.navbarLinks, classes.navActive].join(" ")}`
                //       : `${[classes.navbarLinks]}`
                //   }
                className={
                  currentLink == "" ? classes.navActive : classes.navbarLinks
                }
              >
                <span
                  onClick={() => {
                    navigate("/", { state: { href: "#" } });
                  }}
                >
                  Home
                </span>
              </Nav.Link>

              <Nav.Link
                // className={({ isActive }) =>
                //     isActive
                //       ? `${[classes.navbarLinks, classes.navActive].join(" ")}`
                //       : `${[classes.navbarLinks]}`
                //   }
                className={
                  currentLink == "/" ? classes.navActive : classes.navbarLinks
                }
              >
                <span
                  onClick={() => {
                    navigate("/", { state: { href: "#" } });
                  }}
                >
                  Home
                </span>
              </Nav.Link>
              <Nav.Link
                // className={({ isActive }) =>
                //     isActive
                //       ? `${[classes.navbarLinks, classes.navActive].join(" ")}`
                //       : `${[classes.navbarLinks]}`
                //   }
                className={
                  currentLink == "/" ? classes.navActive : classes.navbarLinks
                }
              >
                <span
                  onClick={() => {
                    navigate("/", { state: { href: "#" } });
                  }}
                >
                  Home
                </span>
              </Nav.Link>
            </div>
            <div></div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default DesktopHeader;
