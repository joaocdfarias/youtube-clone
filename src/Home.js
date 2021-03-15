import React from "react";

//Components Import

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
  Grid,
  Hidden,
  useTheme,
  Switch,
} from "@material-ui/core";

//Json Import

import videos from "./videos";

//Icon Import

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
    backgroundColor: theme.palette.background.dark,
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
  typoSize: {
    fontSize: 14,
  },
}));

function Home({ darkMode, setDarkMode }) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <AppBar color="inherit" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuIcon}
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <img
            src={
              theme.palette.type === "dark"
                ? "/images/branco.png"
                : "/images/preto.png"
            }
            alt="YouTube Logo (Dark Mode)"
            className={classes.logo}
          ></img>
          <div className={classes.grow} />
          <Switch
            value={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            className={classes.icons}
          />
          <IconButton className={classes.icons}>
            <VideoCallIcon />
          </IconButton>
          <IconButton className={classes.icons}>
            <AppsIcon />
          </IconButton>
          <IconButton className={classes.icons}>
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
      <Box display="flex">
        <Hidden mdDown>
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
        </Hidden>

        <Box p={4}>
          <Toolbar />
          <Typography
            variant="h5"
            color="textPrimary"
            style={{ fontWeight: 600 }}
          >
            Recomendados
          </Typography>

          <Grid container spacing={2}>
            {videos.map((video, index) => (
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <Box>
                  <img
                    style={{ width: "100%" }}
                    src={video.thumb}
                    alt={video.title}
                  />
                </Box>

                <Typography
                  className={classes.typoSize}
                  style={{ fontWeight: 600 }}
                  gutterBottom
                  variant="body1"
                  color="textPrimary"
                >
                  {" "}
                  {video.title}{" "}
                </Typography>

                <Typography
                  display="block"
                  variant="body2"
                  color="textSecondary"
                >
                  {" "}
                  {video.channel}{" "}
                </Typography>

                <Typography variant="body2" color="textSecondary">
                  {" "}
                  {`${video.views} • ${video.date}`}{" "}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </div>

    //VideoLibraryIcon
    //HistoryIcon
  );
}

export default Home;
