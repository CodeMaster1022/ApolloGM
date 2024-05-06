// import { Link } from 'react-router-dom';

// material-ui
import './landing.css';
import './flow.css';
import { Grid, Typography, Divider, Box, useMediaQuery } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Logo from 'assets/images/analytics/target.svg';
import buttonIcon from './button.svg';
import { makeStyles } from '@material-ui/core/styles';
import dashboard from '../assets/images/landing/dashboard.jpg';
import girl from '../assets/images/landing/01.png';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import twoFlow from 'assets/images/landing/01(3).jpg';
import threeFlow from 'assets/images/landing/01(8).jpg';
import fourFlow from 'assets/images/landing/01(10).jpg';
import fiveFlow from 'assets/images/landing/03(1).jpg';
import sixFlow from 'assets/images/landing/03(5).jpg';
import sevenFlow from 'assets/images/landing/04(1).jpg';
// ================================|| LOGIN ||================================ //
import { Phone, LocationOn, OfflineBolt, Twitter, X, Facebook, RssFeed, Person, PeopleOutline } from '@mui/icons-material';
const LandingPage = () => {
  const isSmScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const classes = useStyles();
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    // <AuthWrapper>
    <>
      <AppBar position="static">
        <Toolbar variant="dense" sx={{ backgroundColor: '#262626' }}></Toolbar>
      </AppBar>
      <Grid container className={classes.image}>
        <Grid container style={{ display: isSmScreen ? 'none' : 'flex' }}>
          <Grid item xs={3.1} sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center', height: '50px', paddingX: '28px' }}>
            <Phone sx={{ fontSize: '18px', color: '#008080' }} />
            <Typography color="gray"> +800-123-4567 6587</Typography>
          </Grid>
          <Grid item xs={5.5} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '50px' }}>
            <Box
              style={{
                padding: '25px',
                borderLeft: '1px solid #E8E2DC',
                height: '100% ',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <LocationOn sx={{ fontSize: '18px', color: '#008080' }} />
              <Typography color="gray">Beverley, New York 224 USA</Typography>
            </Box>
            <Box
              sx={{
                paddingX: '25px',
                borderRight: '1px solid #E8E2DC',
                height: '100% ',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
              gap={4}
            >
              <Typography color="gray">Find us on :</Typography>
              <OfflineBolt
                sx={{
                  fontSize: '15px',
                  color: 'red',
                  transition: 'all 0.5s',
                  '&:hover': {
                    transform: 'scale(1.2) translate(0px, -3px)'
                  }
                }}
              />
            </Box>
          </Grid>
          <Grid item sx={{ width: '50px' }}>
            <Box
              sx={{
                borderRight: '1px solid #E8E2DC',
                height: '100% ',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Twitter
                sx={{
                  fontSize: '15px',
                  color: 'red',
                  transition: 'all 0.5s',
                  '&:hover': {
                    transform: 'scale(1.2) translate(0px, -3px)'
                  }
                }}
              />
            </Box>
          </Grid>
          <Grid item sx={{ width: '50px' }}>
            <Box
              sx={{
                borderRight: '1px solid #E8E2DC',
                height: '100% ',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <X
                sx={{
                  fontSize: '13px',
                  color: 'red',
                  transition: 'all 0.5s',
                  '&:hover': {
                    transform: 'scale(1.2) translate(0px, -3px)'
                  }
                }}
              />
            </Box>
          </Grid>
          <Grid item sx={{ width: '50px' }}>
            <Box
              sx={{
                borderRight: '1px solid #E8E2DC',
                height: '100% ',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Facebook
                sx={{
                  fontSize: '15px',
                  color: 'red',
                  transition: 'all 0.5s',
                  '&:hover': {
                    transform: 'scale(1.2) translate(0px, -3px)'
                  }
                }}
              />
            </Box>
          </Grid>
          <Grid item sx={{ width: '50px' }}>
            <Box
              sx={{
                height: '100% ',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <RssFeed
                sx={{
                  fontWeight: '1500px',
                  fontSize: '18px',
                  color: 'red',
                  transition: 'all 0.5s',
                  '&:hover': {
                    transform: 'scale(1.2) translate(0px, -3px)'
                  }
                }}
              />
            </Box>
          </Grid>
        </Grid>
        <Divider color="#E1E2DC" />
        <AppBar position="sticky" sx={{ backgroundColor: 'transparent', boxShadow: '0px 0px 0px 0px' }}>
          <Box
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', width: '100%', height: '92px' }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                padding: '19px',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backdropFilter: isScrolled ? 'blur(20px)' : 'none',
                boxShadow: isScrolled ? '2px 3px 2px 3px' : '0px 0px 0px 0px'
              }}
            >
              <Box sx={{ width: '1330px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex' }}>
                  <img src={Logo} alt="logo" />
                  <span>
                    <Typography sx={{ fontSize: '35px', color: '#1890FF', fontWeight: '700' }}>CapCE</Typography>
                  </span>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }} gap={4}>
                  <Typography sx={{ fontSize: '20px', color: 'gray', fontWeight: '700' }}>Home</Typography>
                  <Typography sx={{ fontSize: '20px', color: 'gray', fontWeight: '700' }}>Blog</Typography>
                  <Typography sx={{ fontSize: '20px', color: 'gray', fontWeight: '700' }}>Contact</Typography>
                  <Typography sx={{ fontSize: '20px', color: 'gray', fontWeight: '700' }}>Pages</Typography>
                  <Typography sx={{ fontSize: '20px', color: 'gray', fontWeight: '700' }}>Courses</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Button sx={{ backgroundColor: 'white', height: '50px', color: '#F16126', borderRadius: '0px', padding: '20px' }}>
                    <Person />
                    LOGIN
                  </Button>
                  <Button sx={{ backgroundColor: '#F16126', height: '50px', color: 'white', borderRadius: '0px' }}>
                    <PeopleOutline />
                    SIGN UP
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </AppBar>
        <Box sx={{ height: '50px' }} />
        <Grid sx={{ display: 'flex', justifyContent: 'center' }}>
          <Grid container sx={{ maxWidth: '1330px' }} justifyContent="center" alignItems="center">
            <Grid item sx={{ width: '500px' }}>
              <Typography variant="h1" sx={{ fontSize: 66, fontWeight: 680, padding: 0 }}>
                Learn The Skills You Need To Succeed
              </Typography>
              <Typography variant="h4" fontWeight="light">
                Free online courses from the world’s Leading experts. join 18+ million Learners today.
              </Typography>
              <Typography fontSize={20}></Typography>
              <Box sx={{ paddingY: '15px', width: '100%' }}>
                <button className="button">
                  <img src={buttonIcon} alt="icon" style={{ width: 15, height: 15 }} />
                  Get Started
                </button>
              </Box>
            </Grid>
            {/* </Box> */}
            <Grid item sx={{ flex: 1 }}>
              <div className="star" />
              <div className="star" />
              <div className="star" />
              <div className="star" />
              <div className="star" />
              <Box sx={{ position: 'absolute', zIndex: 1, marginLeft: '8vh', marginTop: '5vh' }}>
                <div className="dashcircle"></div>
                <div className="dotthird"></div>
              </Box>
              <Box sx={{ position: 'absolute', zIndex: 1, marginLeft: '12vh', marginTop: '9vh' }}>
                <div className="dashcircleTwo"></div>
                <div className="dotsecond"></div>
              </Box>
              <Box sx={{ position: 'absolute', zIndex: 1, marginLeft: '16vh', marginTop: '13vh' }}>
                <div className="dashcircleThree"></div>
                <div className="dotfirst" />
              </Box>
              <Box sx={{ position: 'relative', zIndex: 2, '& img': { marginBottom: -1 } }}>
                <img src={girl} alt="girl" />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Box sx={{ height: '120px', backgroundColor: '#FFF9F1' }}></Box>
      </Grid>
      <Grid display="flex" justifyContent="center">
        <Grid container justifyContent="center" alignItems="center" maxWidth="1330px">
          <div className="content">
            <div className="benefits">
              <div className="basic-marquee basic-marquee-1">
                <button className="button">
                  <img src={twoFlow} alt="one" />
                </button>
                <button className="button">
                  <img src={threeFlow} alt="one" />
                </button>
                <button className="button">
                  <img src={fourFlow} alt="one" />
                </button>
                <button className="button">
                  <img src={fiveFlow} alt="one" />
                </button>
                <button className="button">
                  <img src={sixFlow} alt="one" />
                </button>
                <button className="button">
                  <img src={sevenFlow} alt="one" />
                </button>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
    // </AuthWrapper>
  );
};
{
  /* <Box sx={{ width: { xs: 650, md: 400 } }}> */
}
const useStyles = makeStyles((theme) => ({
  // root: {
  //   height: '100vh'
  // },
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
    display: 'flex',
    flexDirection: 'column',
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
    backgroundSize: 'contain cover',
    backgroundPosition: 'bottom'
  }
}));
export default LandingPage;
