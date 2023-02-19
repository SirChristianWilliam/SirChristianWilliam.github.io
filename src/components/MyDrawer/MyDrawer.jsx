import React from "react";
import "./MyDrawer.css";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import { HashRouter as Router, Link } from "react-router-dom";

function MyDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      className="drawerBg"
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className="drawerList">
        <h3>Projects</h3>
        <Link to="/MissingLink">
          <p>Missing Link</p>
        </Link>
        <Link to="/QueerspaceCollective">
          <p>QUEERSPACE collective</p>
        </Link>
        <Link to="/ReduxSurveys">
          <p>Redux Surveys</p>
        </Link>
        <Link to="/jQueryCalculator">
          <p>jQuery Calculator</p>
        </Link>
        <Link to="/ToDoList">
          <p>To-do List</p>
        </Link>
        <Link to="/NetClips">
          <p>NetClips</p>
        </Link>
      </List>

      <Divider />

      <List className="drawerList">
        <h3>Socials</h3>
        <a href="https://www.linkedin.com/in/christian-maki/" target="_blank">
          <p>LinkedIn</p> 
         </a>
        <a href="https://github.com/SirChristianWilliam" target="_blank">
        <p>GitHub</p>
        </a>
        <Link to="/Contact">
          <p>Contact</p>
        </Link>
        <Link to="/Resume">
          <p>Resumé</p>
        </Link>

        <Divider />

        <Link to="/">
          <h3>Go Back to Home</h3>
        </Link>
      </List>
    </Box>
  );
  return (
    <div className="drawerContainer">
      {["Projects & More"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            onClick={toggleDrawer(anchor, true)}
            style={{ color: "#e0d0d0" }}
          >
            {" "}
            <MenuIcon /> &nbsp; &nbsp;{anchor}
          </Button>

          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export default MyDrawer;
