import { Link } from 'react-router-dom';

// material-ui
import { Grid, Stack, TextField, Checkbox, Typography, FormControlLabel } from '@mui/material';

// project import
import useAuth from 'hooks/useAuth';
// import AuthWrapper from 'sections/auth/AuthWrapper';
// import FirebaseRegister from 'sections/auth/auth-forms/AuthRegister';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
// import { ObjectSchema } from 'yup';
// import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import InputAdornment from '@mui/material/InputAdornment';
import { Email } from '@mui/icons-material';
import { LockOutlined } from '@ant-design/icons';
import { PhoneAndroid } from '@mui/icons-material';
import Button from '@mui/material/Button';
// import OTPInput from 'react-otp-input';
import OtpInput from 'react18-input-otp';
import Swal from 'sweetalert2';
// import { display } from '@mui/system';
import dashboard from '../../assets/images/landing/Dashboard.png';
// import { FixedSizeGrid } from 'react-window';
// ================================|| REGISTER ||================================ //
import InputLabel from '@mui/material/InputLabel';
const steps = ['Basic information', 'Mobile number', '2-step verification'];
const Register = () => {
  //Toast messgage
  const Toast = Swal.mixin({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timer: 5500,
    timerProgressBar: true
  });

  // Otp code
  const [otp, setOtp] = useState('');

  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [phone, setPhone] = useState('');
  const [recover, setRecoverEmail] = useState('');

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };
  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleFirst = () => {
    if (!email || !password || !recover) {
      Toast.fire({
        icon: 'error',
        text: 'please enter your all data field',
        title: 'Error!'
      });
      return;
    }
    if (password !== confirm) {
      Toast.fire({
        icon: 'error',
        text: 'Not Match password',
        title: 'Error!'
      });
      return;
    }
    if (password.length < 6) {
      Toast.fire({
        icon: 'error',
        text: 'Password must 6 digit',
        title: 'Error!'
      });
      return;
    } else {
      handleComplete();
    }
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };
  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };
  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  // const handleReset = () => {
  //   setActiveStep(0);
  //   setCompleted({});
  // };

  const { isLoggedIn } = useAuth();
  const classes = useStyles();
  return (
    <Grid container className={classes.styleContainer}>
      <Grid item xs={12} sm={4} md={6} className={classes.leftSideContainer}>
        <div className={classes.paper}>
          <InputLabel sx={{ fontSize: '25px' }}>Create Account</InputLabel>
          <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }} spacing={3}>
            <Typography>Already have an account?</Typography>
            <Typography
              component={Link}
              to={isLoggedIn ? '/auth/login' : '/login'}
              variant="body1"
              sx={{
                textDecoration: 'none',
                paddingTop: '10px'
              }}
              color="#008080"
            >
              Sign In
            </Typography>
          </Stack>
          <Stepper nonLinear activeStep={activeStep} sx={{ paddingTop: '20px' }}>
            {steps.map((label, index) => (
              <Step key={label} completed={completed[index]} color="red">
                <StepButton color="red" onClick={handleStep(index)}>
                  {label}
                </StepButton>
              </Step>
            ))}
          </Stepper>
          {activeStep == 0 && (
            <>
              <InputLabel sx={{ paddingTop: '40px' }}>Email</InputLabel>
              <TextField
                margin="normal"
                placeholder="Enter your Email"
                type="email"
                required
                fullWidth
                name="email"
                id="email"
                InputProps={{
                  sx: {
                    padding: '12px',
                    borderRadius: '12px'
                  },
                  endAdornment: (
                    <InputAdornment position="end">
                      <Email />
                    </InputAdornment>
                  )
                }}
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputLabel>Password</InputLabel>
              <TextField
                margin="normal"
                required
                placeholder="Enter Password"
                fullWidth
                name="password"
                id="password"
                type="password"
                InputProps={{
                  sx: {
                    padding: '9px',
                    borderRadius: '12px'
                  },
                  endAdornment: (
                    <InputAdornment position="end">
                      <LockOutlined />
                    </InputAdornment>
                  )
                }}
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputLabel>Confirm Password</InputLabel>
              <TextField
                margin="normal"
                required
                placeholder="Enter Confirm Password"
                fullWidth
                type="password"
                name="confirm"
                id="confirm"
                InputProps={{
                  sx: {
                    padding: '9px',
                    borderRadius: '12px'
                  },
                  endAdornment: (
                    <InputAdornment position="end">
                      <LockOutlined />
                    </InputAdornment>
                  )
                }}
                onChange={(e) => setConfirm(e.target.value)}
              />
              <InputLabel>Recover email</InputLabel>
              <TextField
                margin="normal"
                required
                placeholder="Enter Recover email"
                type="email"
                fullWidth
                name="recover"
                autoComplete="email"
                id="recover"
                InputProps={{
                  sx: {
                    padding: '9px',
                    borderRadius: '12px'
                  },
                  endAdornment: (
                    <InputAdornment position="end">
                      <Email />
                    </InputAdornment>
                  )
                }}
                onChange={(e) => setRecoverEmail(e.target.value)}
              />
              <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Keep me logged in" />
                <Typography component={Link} to={isLoggedIn ? '/auth/login' : '/login'} variant="body1" sx={{ margin: 1 }} color="primary">
                  ForgotPassword?
                </Typography>
              </Grid>
              <Button
                fullWidth
                variant="contained"
                color="secondary"
                sx={{
                  paddingY: '8px',
                  mt: 3,
                  borderRadius: '12px'
                }}
                onClick={handleFirst}
              >
                Next
              </Button>
            </>
            //  <FirebaseRegister />
          )}
          {activeStep == 1 && (
            <>
              <InputLabel>Phone Number</InputLabel>
              <TextField
                margin="normal"
                required
                fullWidth
                label="Enter your mobile number"
                name="email"
                autoComplete="email"
                id="email"
                InputProps={{
                  sx: {
                    paddingTop: '9px',
                    paddingBottom: '9px',
                    borderRadius: '12px'
                  },
                  endAdornment: (
                    <InputAdornment position="end">
                      <PhoneAndroid />
                    </InputAdornment>
                  )
                }}
                onChange={(e) => setPhone(e.target.value)}
              />
              <Button
                fullWidth
                variant="contained"
                color="secondary"
                sx={{
                  paddingY: '8px',
                  mt: 3,
                  borderRadius: '12px'
                }}
                onClick={handleFirst}
              >
                Next
              </Button>
            </>
            //  <FirebaseRegister />
          )}
          {activeStep == 2 && (
            <>
              <label>
                <h3>Enter verification code we sent on + {phone}</h3>
              </label>
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={5}
                separator={<span style={{ width: '8px' }}></span>}
                isInputNum={true}
                shouldAutoFocus={true}
                inputStyle={{
                  border: '1px solid #7E8487',
                  borderRadius: '8px',
                  width: '53px',
                  height: '60px',
                  fontSize: '12px',
                  color: '#000',
                  fontWeight: '400',
                  caretColor: 'blue'
                }}
                focusStyle={{
                  border: '1px solid #CFD3DB',
                  outline: 'none'
                }}
                // renderInput={(props) => <input {...props} />}
              ></OtpInput>
              <Button
                fullWidth
                variant="contained"
                color="secondary"
                sx={{
                  paddingY: '8px',
                  mt: 3,
                  borderRadius: '12px'
                }}
                onClick={handleNext}
              >
                Signup
              </Button>
            </>
          )}
        </div>
      </Grid>
      <Grid xs={false} sm={8} md={6} className={classes.rightSideContainer}>
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
      </Grid>
    </Grid>
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
    // justifyContent:"center",
    flexDirection: 'column'
    // alignItems: "center",
  },
  styleContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '100vh'
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
    alignItems: 'center',
    height: '100vh'
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

export default Register;
