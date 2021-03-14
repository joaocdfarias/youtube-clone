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
  Typography,
  Box,
  ListSubheader,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import SportsSoccerIcon from "@material-ui/icons/SportsSoccer";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import TheatersIcon from "@material-ui/icons/Theaters";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LoopIcon from "@material-ui/icons/Loop";

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
  typoSpacing: {
    marginBottom: 12,
  },
  boxSpacing: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 30,
    paddingRight: 30,
  },
  subHeader: {
    textTransform: "uppercase",
    fontSize: 14,
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
              <ListItemText
                classes={{ primary: classes.listItemText }}
                primary={"Início"}
              />
            </ListItem>

            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <WhatshotIcon className={classes.listIcon}></WhatshotIcon>
              </ListItemIcon>
              <ListItemText
                classes={{ primary: classes.listItemText }}
                primary={"Em alta"}
              />
            </ListItem>

            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <SubscriptionsIcon
                  className={classes.listIcon}
                ></SubscriptionsIcon>
              </ListItemIcon>
              <ListItemText
                classes={{ primary: classes.listItemText }}
                primary={"Inscrições"}
              />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <VideoLibraryIcon
                  className={classes.listIcon}
                ></VideoLibraryIcon>
              </ListItemIcon>
              <ListItemText
                classes={{ primary: classes.listItemText }}
                primary={"Biblioteca"}
              />
            </ListItem>

            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <HistoryIcon className={classes.listIcon}></HistoryIcon>
              </ListItemIcon>
              <ListItemText
                classes={{ primary: classes.listItemText }}
                primary={"Histórico"}
              />
            </ListItem>
          </List>
          <Divider />
          <Box className={classes.boxSpacing}>
            <Typography className={classes.typoSpacing} variant="body2">
              Faça login para curtir vídeos, comentar e se inscrever.
            </Typography>
            <Button
              variant="outlined"
              color="secondary"
              startIcon={<AccountCircleIcon />}
            >
              Fazer Login
            </Button>
          </Box>
          <Divider />
          <List
            subheader={
              <ListSubheader className={classes.subHeader}>
                O melhor do YouTube
              </ListSubheader>
            }
          >
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <PlayCircleFilledIcon
                  className={classes.listIcon}
                ></PlayCircleFilledIcon>
              </ListItemIcon>
              <ListItemText
                classes={{ primary: classes.listItemText }}
                primary={"Música"}
              />
            </ListItem>

            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <SportsSoccerIcon
                  className={classes.listIcon}
                ></SportsSoccerIcon>
              </ListItemIcon>
              <ListItemText
                classes={{ primary: classes.listItemText }}
                primary={"Esportes"}
              />
            </ListItem>

            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <SportsEsportsIcon
                  className={classes.listIcon}
                ></SportsEsportsIcon>
              </ListItemIcon>
              <ListItemText
                classes={{ primary: classes.listItemText }}
                primary={"Jogos"}
              />
            </ListItem>

            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <TheatersIcon className={classes.listIcon}></TheatersIcon>
              </ListItemIcon>
              <ListItemText
                classes={{ primary: classes.listItemText }}
                primary={"Filmes"}
              />
            </ListItem>

            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <AnnouncementIcon
                  className={classes.listIcon}
                ></AnnouncementIcon>
              </ListItemIcon>
              <ListItemText
                classes={{ primary: classes.listItemText }}
                primary={"Notícias"}
              />
            </ListItem>

            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <LiveTvIcon className={classes.listIcon}></LiveTvIcon>
              </ListItemIcon>
              <ListItemText
                classes={{ primary: classes.listItemText }}
                primary={"Ao vivo"}
              />
            </ListItem>

            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <EmojiObjectsIcon
                  className={classes.listIcon}
                ></EmojiObjectsIcon>
              </ListItemIcon>
              <ListItemText
                classes={{ primary: classes.listItemText }}
                primary={"Aprender"}
              />
            </ListItem>

            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <YouTubeIcon className={classes.listIcon}></YouTubeIcon>
              </ListItemIcon>
              <ListItemText
                classes={{ primary: classes.listItemText }}
                primary={"Vídeos do momento"}
              />
            </ListItem>

            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <LoopIcon className={classes.listIcon}></LoopIcon>
              </ListItemIcon>
              <ListItemText
                classes={{ primary: classes.listItemText }}
                primary={"Vídeos em 360°"}
              />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </div>

    //VideoLibraryIcon
    //HistoryIcon
  );
}

export default Home;
