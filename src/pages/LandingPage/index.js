import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";

import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Header from "../../Component/Header";
import Footer from "../../Component/Footer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./LandingPage.module.css";
import { jobsData } from "../../dummyData";
import { Button } from "../../Component/Button/Button";
import { useNavigate } from "react-router-dom";
import Lottie from "react-lottie";
import animationData from "./animation.json";

const drawerWidth = 240;

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#F4F5FF",
    color: theme.palette.common.black,
    fontWeight: 600,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    borderBottom: 0,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({}));

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [jobDetail, setJobDetail] = React.useState(null);
  const navigate = useNavigate();
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <AppBar className={classes.headerMain} open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Header />
          </Toolbar>
        </AppBar>
        <Drawer className={classes.sidebarMain} variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />

          <List style={{ marginTop: "30px" }}>
            {jobsData.map((item, index) => (
              <ListItem key={item} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  onClick={() => setJobDetail(item)}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText
                    primary={item?.title}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1 }}>
          <DrawerHeader />
          <style>{`
        .MuiPaper-root {
    //         padding: 0px 40px;
    //           border-radius: 20px;
    // background-color: #fff;
    // overflow-y: scroll;
    //   max-height: 80vh;
        }
        `}</style>
          <Container fluid className={classes.container_styling}>
            {!jobDetail ? (
              <div className="null-data-container">
                <Lottie options={defaultOptions} height={400} width={400} />
                <div className="text-center">
                <p>Please Select Job From Sidebar</p>
              </div>
              </div>
            ) : (
              <Row className={`${classes.table_conti_b} g-0`}>
                <Col className={`g-0`}>
                  <TableContainer
                    className={classes.tableMain}
                    component={Paper}
                    sx={{ maxHeight: 440 }}
                  >
                    <Table stickyHeader aria-label="sticky table">
                      <TableHead>
                        <TableRow></TableRow>
                        <TableRow className="table_row_cus">
                          <StyledTableCell
                            align="center"
                            style={{ top: 100, border: 0 }}
                          >
                            ID
                          </StyledTableCell>
                          <StyledTableCell
                            align="center"
                            style={{ top: 100, border: 0 }}
                          >
                            Title
                          </StyledTableCell>
                          <StyledTableCell
                            align="center"
                            style={{ top: 100, border: 0 }}
                          >
                            Description
                          </StyledTableCell>
                          <StyledTableCell
                            align="center"
                            style={{ top: 100, border: 0 }}
                          >
                            Employement Type
                          </StyledTableCell>
                          <StyledTableCell
                            align="center"
                            style={{ top: 100, border: 0 }}
                          >
                            Action
                          </StyledTableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody className={classes.tableBody}>
                        <StyledTableRow>
                          <StyledTableCell align="center">
                            {" "}
                            {jobDetail?.id}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {" "}
                            {jobDetail?.title}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {" "}
                            {jobDetail?.description}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {" "}
                            {jobDetail?.employement_type}
                          </StyledTableCell>

                          <StyledTableCell align="center">
                            <Button
                              onClick={() =>
                                navigate(`/jobDetail/${jobDetail?.id}`)
                              }
                              label={"View Detail"}
                            />
                          </StyledTableCell>
                        </StyledTableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Col>
              </Row>
            )}
            <Footer />
          </Container>
        </Box>
      </Box>
    </>
  );
}
