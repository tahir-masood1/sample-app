import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import classes from "./MobileHeader.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  RiBook2Fill,
  RiContactsBook2Fill,
  RiPriceTagFill,
} from "react-icons/ri";
import { IoHome, IoLogIn, IoLogOut } from "react-icons/io5";
import { MdSettings, MdSpaceDashboard } from "react-icons/md";
import { GoSignIn } from "react-icons/go";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { NavLink, useNavigate } from "react-router-dom";
import { Logo } from "../../constant/imagePath";


export const MobileHeader = ({ customStyle, logo = Logo }) => {
  //forget modal state
  // current page url path name
  const currentPage = window.location.pathname;
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className={classes.headerMainDiv} id={"navMobileHeader"}>
        <div className={classes.header} style={{ ...customStyle }}>
          <div className={classes.imageContainer}>
            <img src={logo} className={classes.logo} alt="logo" />
          </div>
          <GiHamburgerMenu
            className={classes.hamburger}
            onClick={() => {
              toggleDrawer();
            }}
          />
        </div>
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="right"
          className="bla bla bla"
        >
          <div className={classes.drawerContainer}>
            <div className={classes.drawerUserSection}>
              <>
                <img src={logo} className={classes.drawerLogo} alt="logo" />
              </>
            </div>
            <div className={classes.drawerList}>
              <>
                <NavLink to="/" className={[classes.overlayLink]}>
                  Home
                </NavLink>

                <hr
                  style={{
                    width: "100%",
                    marginBottom: "0px",
                  }}
                />

                <NavLink to="/" className={[classes.overlayLink]}>
                Home
              </NavLink>
              </>
            </div>
          </div>
        </Drawer>
      </div>
    </>
  );
};

MobileHeader.propTypes = {
  customStyle: PropTypes.object,
};

MobileHeader.defaulProps = {};
