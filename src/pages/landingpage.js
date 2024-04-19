import { Link } from 'react-router-dom';

// material-ui
import { Grid, Stack, Typography, Box } from '@mui/material';
import Button from '@mui/material/Button';
import './landing.css';
// project import
import useAuth from 'hooks/useAuth';
// import AuthWrapper from 'sections/auth/AuthWrapper';
import AuthLogin from 'sections/auth/auth-forms/AuthLogin';
import { makeStyles } from '@material-ui/core/styles';
import dashboard from '../assets/images/landing/dashboard.jpg';
import girl from '../assets/images/landing/01.png';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import AdbIcon from '@mui/icons-material/Adb';
// import { Email, Key, Lock } from '@mui/icons-material';
// import InputLabel from 'themes/overrides/InputLabel';
// ================================|| LOGIN ||================================ //

const LandingPage = () => {
  const { isLoggedIn } = useAuth();
  const classes = useStyles();

  return (
    <>
      <AppBar sx={{ backgroundColor: '#262626' }}>
        <Container maxWidth="xl">
          <Toolbar>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none'
              }}
            >
              CapEQ
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </>
    // <AuthWrapper>
    // <>

    //   <Grid container className={classes.image} sx={{ marginTop: '60px' }}>
    //     <Box sx={{ height: '100px' }}>
    //       <h1>Hello</h1>
    //     </Box>
    //     <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
    //       <Grid container>
    //         <Grid item xs={12} md={5} paddingX={5}>
    //           <Box>
    //             <Typography fontSize={50} fontWeight={680}>
    //               Design what you love
    //             </Typography>
    //           </Box>
    //           <Typography fontSize={20}>
    //             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non libero dignissim, viverra augue eu.
    //           </Typography>
    //           <Box sx={{ display: 'flex', padding: '15px' }}>
    //             <button className="btn" type="button">
    //               <strong>Get Started</strong>
    //               <div id="container-stars">
    //                 <div id="stars"></div>
    //               </div>
    //               <div id="glow">
    //                 <div className="circle"></div>
    //                 <div className="circle"></div>
    //               </div>
    //             </button>
    //           </Box>
    //           {/* <Button sx={{ background: '#FE6E06', color: 'white', borderRadius: '20px', paddingY: '13px', paddingX: '25px' }}>
    //             Get Started
    //           </Button> */}
    //         </Grid>
    //         <Grid item xs={12} md={5} paddingX={2}>
    //           <div className="star" />
    //           <div className="star" />
    //           <div className="star" />
    //           <div className="star" />
    //           <div className="star" />
    //           <Box sx={{ position: 'absolute', zIndex: 1, marginLeft: '5vh', marginTop: '5vh', }}>
    //             <div className="dashcircle"></div>
    //             <div className="dotthird"></div>
    //           </Box>
    //           <Box sx={{ position: 'absolute', zIndex: 1, marginLeft: '9vh', marginTop: '9vh' }}>
    //             <div className="dashcircleTwo"></div>
    //             <div className="dotsecond"></div>
    //           </Box>
    //           <Box sx={{ position: 'absolute', zIndex: 1, marginLeft: '13vh', marginTop: '13vh' }}>
    //             <div className="dashcircleThree"></div>
    //             <div className="dotfirst" />
    //           </Box>
    //           {/* <Box sx={{ position: 'absolute', zIndex: 1, marginLeft: '13vh', marginTop: '13vh' }}>
    //             <div className="box"></div>
    //           </Box> */}
    //           <Box alt="hello" className={classes.imagegirl} sx={{ width: { xs: '100%' }, height: { xs: '350px', sm: '70vh' } }} />
    //         </Grid>
    //         <Grid item xs={12} md={2} paddingX={2} gap={5}>
    //           <button className="button">
    //             <span className="text">Message</span>
    //             <span className="icon">
    //               <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" data-icon="paper-plane" width="20px" aria-hidden="true">
    //                 <path
    //                   d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"
    //                   fill="currentColor"
    //                 ></path>
    //               </svg>
    //             </span>
    //           </button>
    //           <button className="button">
    //             <span className="text">Message</span>
    //             <span className="icon">
    //               <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" data-icon="paper-plane" width="20px" aria-hidden="true">
    //                 <path
    //                   d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"
    //                   fill="currentColor"
    //                 ></path>
    //               </svg>
    //             </span>
    //           </button>
    //           <button className="button">
    //             <span className="text">Message</span>
    //             <span className="icon">
    //               <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" data-icon="paper-plane" width="20px" aria-hidden="true">
    //                 <path
    //                   d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"
    //                   fill="currentColor"
    //                 ></path>
    //               </svg>
    //             </span>
    //           </button>
    //         </Grid>
    //       </Grid>
    //     </Box>
    //   </Grid>
    // </>
    // // </AuthWrapper>
  );
};
{
  /* <Box sx={{ width: { xs: 650, md: 400 } }}> */
}
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh'
  },
  paper: {
    margin: theme.spacing(1, 4),
    maxWidth: '500px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
  },
  styleContainer: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  rightSideContainer: {
    display: 'flex',
    flexDirection: 'column-reverse',
    alignItems: 'left',
    marginBottom: '0px'
  },
  leftSideContainer: {
    paddingTop: '155px',
    paddingLeft: '20px',
    paddingRight: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  styeledTitle: {
    fontSize: '3rem',
    color: '#C0CED4',
    fontWeight: 'bold'
  },
  styledText: {
    fontSize: '1rem',
    color: '#7E8487'
  },
  image: {
    backgroundImage: `url(${dashboard})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%'
  },
  imagegirl: {
    position: 'relative',
    zIndex: 2,
    backgroundImage: `url(${girl})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'bottom'
  }
}));
export default LandingPage;
