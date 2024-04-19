import { Link } from 'react-router-dom';

// material-ui
import { Grid, Stack, Typography } from '@mui/material';
// project import
import useAuth from 'hooks/useAuth';
// import AuthWrapper from 'sections/auth/AuthWrapper';
import AuthLogin from 'sections/auth/auth-forms/AuthLogin';
import { makeStyles } from '@material-ui/core/styles';
import dashboard from '../../assets/images/landing/dashboard.jpg';
// import { Email, Key, Lock } from '@mui/icons-material';
// import InputLabel from 'themes/overrides/InputLabel';
// ================================|| LOGIN ||================================ //

const Login = () => {
  const { isLoggedIn } = useAuth();
  const classes = useStyles();

  return (
    // <AuthWrapper>
    <Grid container className={classes.styleContainer}>
      <Grid item xs={12} sm={4} md={6} className={classes.leftSideContainer}>
        {/* <Grid item xs={12}> */}
        <div className={classes.paper}>
          <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 5 } }}>
            <Typography variant="h1" align="start">
              Login
            </Typography>
          </Stack>
          <AuthLogin />
          <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={3} sx={{ margin: 2 }}>
            <Typography align="start">Don’t have an account yet?</Typography>
            <Typography component={Link} to={isLoggedIn ? '/auth/register' : '/register'} variant="body1" color="#008080">
              Sign up
            </Typography>
          </Stack>
        </div>
      </Grid>
      {/* <Grid xs={false} sm={8} md={6} className={classes.rightSideContainer}>
        <Typography className={classes.styeledTitle}>
          Streamline Fund
          <br />
          Management, Gain
          <br />
          Actionable Insights,
          <br />
          Unlock Value
        </Typography>
        <Typography className={classes.styledText}>Manage your funds, investments and drive the difference</Typography>
        <Grid className={classes.image} fullWidth />
      </Grid> */}
    </Grid>
    // </AuthWrapper>
  );
};
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
    paddingTop: '95px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    height: '100vh'
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
    width: '100%',
    height: '100%'
  }
}));
export default Login;
