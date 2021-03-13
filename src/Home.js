import React from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  appBar: {
    boxShadow: "none",
    zIndex: theme.zIndex.drawer + 1,
  },
  menuIcon: {
    marginRight: theme.spacing(1),
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
    borderRight: "none",
  },
  icons: {
    marginRight: theme.spacing(2),
  },
  logo: {
    height: 25,
  },
  grow: {
    flexGrow: 1,
  },
  listItemText: {
    fontSize: 14,
  },
  listIcon: {
    marginLeft: theme.spacing(1),
  },
  listItem: {
    paddingTop: 4,
    paddingBottom: 4,
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color="inherit" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuIcon}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <img
            src="/images/preto.png"
            alt="YouTube Logo (Dark Mode)"
            className={classes.logo}
          ></img>
          <div className={classes.grow} />
          <IconButton className={classes.icons} color="inherit">
            <VideoCallIcon />
          </IconButton>
          <IconButton className={classes.icons} color="inherit">
            <AppsIcon />
          </IconButton>
          <IconButton className={classes.icons} color="inherit">
            <MoreVertIcon />
          </IconButton>
          <Button
            variant="outlined"
            color="secondary"
            startIcon={<AccountCircleIcon />}
          >
            Fazer Login
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <HomeIcon className={classes.listIcon}></HomeIcon>
              </ListItemIcon>
              <ListItemText primary={"Início"} />
            </ListItem>

            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <WhatshotIcon className={classes.listIcon}></WhatshotIcon>
              </ListItemIcon>
              <ListItemText primary={"Em alta"} />
            </ListItem>

            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <SubscriptionsIcon
                  className={classes.listIcon}
                ></SubscriptionsIcon>
              </ListItemIcon>
              <ListItemText primary={"Inscrições"} />
            </ListItem>
          </List>
          <Divider />
        </div>
      </Drawer>
    </div>
  );
}

export default Home;
