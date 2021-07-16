import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Tile from './Tile'
import Footer from './Footer'
import Sync from './Sync';
import Loader from './Loader';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
      
      
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      background:'#E4C802',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
      
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    
    
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    
  },
}));




function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
   // <================= FETCHING THE SIDEBAR DATAA HERE =================================================>   
   // <================== CUSTOM STATES DEFINED ===================================================> 
   
   const [sheetNames,setSheetNames]=useState([{name : <Loader />,}]);
   const [currentSheet,setCurrentSheet]=useState('Select a sheet to practise');
   

   // <================== CUSTOM STATES DEFINED ===================================================> 
   
	 
   useEffect( ()=>{
      fetch('https://harshit-resource.herokuapp.com/sheetNames').then(response=>response.json())
   .then(names=>{
     setSheetNames(names);
        //  console.log("sheetNames=======",names);
   })
     .catch((err)=>console.log(err)); 
 },[]);
    
  // <================= FETCHING THE SIDEBAR DATAA HERE =================================================>  



  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      
      <List>
        {["About","Sync"].map((text, index) => (
          <ListItem button key={text} onClick={()=>{ setCurrentSheet(text) }} >
            {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      {  
      /*
      <===================================================================>
      can add more tabs below  down here
      <======================================================>
      */}
      <List>
        {sheetNames.map((text, index) => (
          <ListItem button key={text.name} onClick={()=>{ setCurrentSheet(text.name) }}>
            {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
            <ListItemText primary={text.name} />
          </ListItem>
        ))}
      </List>
      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  
   
  
  // const da=localStorage.getItem("Testing");
  // console.log(da);
   
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar style={{background:'#E4C802',}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
            
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {currentSheet}
            
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            style={{background:'#E4C802',}}
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />

  {/*<==================== components of tiles that is content of each sheet ==================================== */}
        {currentSheet==="About" ? 
        <div><p>While practising data structures and algorithms many students are confused about which questions to practise and from which platform, this consumes a lot of time in exploring different platforms. Personally I faced this problem a lot, therefore I made this website to make our coding journey easier.</p>
        <p>This is one stop destination for all the handpicked problems from various sheets available on internet, with time more questions and Sheets will be added to this. </p>
        <p>At present basic functionality such as checking the done questions is provided where you can check a question and the question will be marked checked with the current timestamp. Note:unmarking will clear your previous timeStamp.</p>
        <p><b>Update 1.1 :</b> Now you can sync your progress across all devices by simply going on the Sync tab after that you can enter your credentials which will give you options for sync.</p>
        <p>I have added my sheet which includes my favorite questions. If you want to contribute to the resource by adding questions,more sheets or want to suggest some features feel free to mail me at <a href="mailto:srivastavaharshitprep@gmail.com" >srivastavaharshitprep@gmail.com</a>. </p>
        <p>A special thanks to all the content creators who are helping students by providing amazing content.</p>
        <Footer />
         </div>
         :(currentSheet === "Sync" ? <Sync />
          
         : <Tile currentSheet={currentSheet} />
          )
          }
       
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
