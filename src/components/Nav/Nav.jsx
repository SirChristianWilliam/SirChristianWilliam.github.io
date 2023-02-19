import React, { useState, useEffect } from "react";

import "./Nav.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
// import MenuIcon from '@mui/icons-material/Menu';
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import MyDrawer from "../MyDrawer/MyDrawer";
import { HashRouter as Router, Link } from "react-router-dom";

const pages = ["Home", "Contact", "About", "Resumé", "GitHub", "LinkedIn"];
const settings = ["LinkedIn", "GitHub", "Resumé", "About", "Contact", "Home"];

function Nav() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar position="static" sx={{ bgcolor: "#3e243edb" }}>
        <Container
          maxWidth="xl"
          className="navBg"
          sx={{ bgcolor: "transparent" }}
        >
          <Toolbar disableGutters>
            <MyDrawer />

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              ></Menu>
            </Box>

            {/* Nav bar top */}
            <Box
              sx={{
                flexGrow: 1,
                display: {
                  xs: "none",
                  md: "flex",
                  flexDirection: "row-reverse",
                },
              }}
            >
              <Link to="/">
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 3,
                    color: "#e0d0d0",
                    display: "block",
                    padding: "15px",
                  }}
                >
                  {pages[0]}
                </Button>
              </Link>
              <Link to="/Contact">
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 3,
                    color: "#e0d0d0",
                    display: "block",
                    padding: "15px",
                  }}
                >
                  {pages[1]}
                </Button>
              </Link>
              <Link to="About">
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 3,
                    color: "#e0d0d0",
                    display: "block",
                    padding: "15px",
                  }}
                >
                  {pages[2]}
                </Button>
              </Link>
              <Link to="/Resume">
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 3,
                    color: "#e0d0d0",
                    display: "block",
                    padding: "15px",
                  }}
                >
                  {pages[3]}
                </Button>
              </Link>
              <a href="https://github.com/SirChristianWilliam" target="_blank">
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 3,
                    color: "#e0d0d0",
                    display: "block",
                    padding: "15px",
                  }}
                >
                  {pages[4]}
                </Button>
              </a>

              <a
                href="https://www.linkedin.com/in/christian-maki/"
                target="_blank"
              >
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 3,
                    color: "#e0d0d0",
                    display: "block",
                    padding: "15px",
                  }}
                >
                  {pages[5]}
                </Button>
              </a>
            </Box>

            {/* Nav bar right */}
            {/*  */}
            <Box sx={{ transform: "translateZ(0px)", flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="fda😆" src="./ignoredImages/mePro2.jpg" />
                </IconButton>
              </Tooltip>

              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem key={settings} onClick={handleCloseUserMenu}>
                  <Button>
                    <Typography textAlign="center">
                      <a
                        className="hideLine"
                        href="https://www.linkedin.com/in/christian-maki/"
                        target="_blank"
                      >
                        {settings[0]}
                      </a>
                    </Typography>
                  </Button>

                  <Button>
                    <Typography textAlign="center">
                      <a
                        className="hideLine"
                        href="https://github.com/SirChristianWilliam"
                        target="_blank"
                      >
                        {settings[1]}
                      </a>
                    </Typography>
                  </Button>

                  <Button>
                    <Typography textAlign="center">
                      <Link to="/resume" className="hideLine">
                        {settings[2]}
                      </Link>
                    </Typography>
                  </Button>

                  <Button>
                    <Typography textAlign="center">
                      <Link to="/about" className="hideLine">
                        {settings[3]}
                      </Link>
                    </Typography>
                  </Button>

                  <Button>
                    <Typography textAlign="center">
                      <Link to="/contact" className="hideLine">
                        {settings[4]}
                      </Link>
                    </Typography>
                  </Button>

                  <Button>
                    <Typography textAlign="center">
                      <Link to="/" className="hideLine">
                        {settings[5]}
                      </Link>
                    </Typography>
                  </Button>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default Nav;
