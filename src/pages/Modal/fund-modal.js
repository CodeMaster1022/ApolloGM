import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { Modal, Select, useMediaQuery } from '@mui/material';
import { Box, Typography, Grid, TextField, InputLabel, Stack } from '@mui/material';
import { CalendarIcon } from '@mui/x-date-pickers';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import LinearWithLabel from 'components/@extended/progress/LinearWithLabel';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { DatePicker } from '@mui/x-date-pickers-pro';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core/styles';

const steps = [
  { label: 'General Information' },
  { label: 'Fund Details' },
  { label: 'Financials' },
  { label: 'Fund Manager & LLC' },
  { label: 'Investor Information' }
];

const Fund_Modal = ({ fundOpen, handleFundClose }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));
  const modalstyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    borderRadius: '5px',
    boxShadow: 24,
    width: isMediumScreen ? 'auto' : '50%',
    maxHeight: '90vh',
    overflow: 'auto',
    p: 4
  };
  // stepper
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };

  // const handleReset = () => {
  //   setActiveStep(0);
  // };

  // const [type, setType] = useState('');
  // const handleChangeType = (event) => {
  //   event.preventDefault();
  //   setType(event.target.value);
  // };
  const [contact, setContact] = useState('');
  const handleChangeContact = (event) => {
    event.preventDefault();
    setContact(event.target.value);
  };
  return (
    <Modal open={fundOpen} onClose={handleFundClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <Box sx={modalstyle}>
        <Grid items xs={12}>
          <Grid container spacing={3} sx={{ padding: '10px' }}>
            <Grid item xs={12} sm={4}>
              <Typography id="modal-modal-title" variant="h3" component="h2" sx={{ color: '#008080' }}>
                GreenTech Growth Fund
              </Typography>
              <Typography id="modal-modal-title" sx={{ mt: 2, fontSize: '16px', color: '#7E8487' }}>
                Thursday
              </Typography>
              <Box sx={{ display: 'flex' }}>
                <CalendarIcon />
                <Typography sx={{ color: '#7E8487' }}>&nbsp;31/05/23</Typography>
              </Box>
              <Divider sx={{ paddingY: '15px' }} />
              <Box sx={{ height: '15px' }} />
              <LinearWithLabel value={25 * activeStep} color="info" sx={{ height: 12 }} />
              <Divider sx={{ paddingY: '20px' }} />
              <Stepper activeStep={activeStep} orientation="vertical" xs={false}>
                {steps.map((step, index) => (
                  <Step key={step.label}>
                    <StepLabel optional={index === 2 ? <Typography variant="caption">Last step</Typography> : null}>{step.label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Grid>
            {activeStep === 0 && (
              <Grid item xs={12} sm={8}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Stack spacing={1}>
                      <InputLabel sx={{ paddingTop: '20px' }}>Fund Name</InputLabel>
                      <TextField
                        margin="normal"
                        required
                        placeholder="Fund Name"
                        fullWidth
                        name="Fund Name"
                        id="Fund Name"
                        type="text"
                        InputProps={{
                          sx: {
                            padding: '6px',
                            borderRadius: '12px'
                          }
                        }}
                        // onChange={(e) => setPassword(e.target.value)}
                      />
                    </Stack>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Stack spacing={1}>
                      <InputLabel sx={{ paddingTop: '20px' }}>Value Proposition</InputLabel>
                      <TextField
                        margin="normal"
                        required
                        placeholder="Acquired On"
                        fullWidth
                        name="Acquired On"
                        id="Acquired On"
                        type="text"
                        InputProps={{
                          sx: {
                            padding: '6px',
                            borderRadius: '12px'
                          },
                          endAdornment: (
                            <InputAdornment position="end">
                              <CalendarIcon />
                            </InputAdornment>
                          )
                        }}
                        // onChange={(e) => setPassword(e.target.value)}
                      />
                    </Stack>
                  </Grid>
                </Grid>
                <Stack spacing={1}>
                  <InputLabel sx={{ paddingTop: '20px' }}>Fund Objectives</InputLabel>
                  <TextField
                    margin="normal"
                    required
                    placeholder="Fund Objectives"
                    fullWidth
                    name="Fund Objectives"
                    id="Fund Objectives"
                    type="text"
                    InputProps={{
                      sx: {
                        padding: '6px',
                        borderRadius: '12px'
                      }
                    }}
                    // onChange={(e) => setPassword(e.target.value)}
                  />
                </Stack>
                <Stack spacing={1}>
                  <InputLabel sx={{ paddingTop: '40px' }}>Description</InputLabel>
                  <TextField
                    multiline
                    rows={7}
                    margin="normal"
                    required
                    placeholder="Fund Objectives"
                    fullWidth
                    name="Fund Objectives"
                    id="Fund Objectives"
                    type="text"
                    InputProps={{
                      sx: {
                        padding: '6px',
                        borderRadius: '12px'
                      }
                    }}
                    // onChange={(e) => setPassword(e.target.value)}
                  />
                </Stack>
                <Box sx={{ marginTop: '50px', display: 'flex', justifyContent: 'center', height: '60px' }} gap={4}>
                  <Button variant="outlined" color="secondary" className={classes.buttonstyle}>
                    Cancel
                  </Button>
                  <Button variant="contained" color="secondary" className={classes.buttonstyle} onClick={handleNext}>
                    Next
                  </Button>
                </Box>
              </Grid>
            )}
            {activeStep === 1 && (
              <Grid item xs={12} sm={8} sx={{ mt: 2 }}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <Stack spacing={1}>
                      <InputLabel sx={{ paddingTop: '20px' }}>Fund Region</InputLabel>
                      <TextField
                        margin="normal"
                        required
                        placeholder="Fund Region"
                        fullWidth
                        name="Fund Region"
                        id="Fund Region"
                        type="text"
                        InputProps={{
                          sx: {
                            padding: '6px',
                            borderRadius: '12px'
                          }
                        }}
                        // onChange={(e) => setPassword(e.target.value)}
                      />
                    </Stack>
                    <Stack spacing={1}>
                      <InputLabel sx={{ paddingTop: '20px' }}>Fund Sector</InputLabel>
                      <TextField
                        margin="normal"
                        required
                        placeholder="Fund Sector"
                        fullWidth
                        name="Fund Sector"
                        id="Fund Sector"
                        type="text"
                        InputProps={{
                          sx: {
                            padding: '6px',
                            borderRadius: '12px'
                          }
                        }}
                        // onChange={(e) => setPassword(e.target.value)}
                      />
                    </Stack>
                    <Stack spacing={1}>
                      <InputLabel sx={{ paddingTop: '20px' }}>Fund Stage</InputLabel>
                      <TextField
                        margin="normal"
                        required
                        placeholder="Fund Stage"
                        fullWidth
                        name="Fund Stage"
                        id="Fund Stage"
                        type="text"
                        InputProps={{
                          sx: {
                            padding: '6px',
                            borderRadius: '12px'
                          }
                        }}
                        // onChange={(e) => setPassword(e.target.value)}
                      />
                    </Stack>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Stack spacing={1}>
                      <InputLabel sx={{ paddingTop: '30px' }}>Fund Strategy </InputLabel>
                      <Select
                        margin="normal"
                        required
                        fullWidth
                        name="Fund Strategy "
                        id="Fund Strategy "
                        type="text"
                        sx={{ height: '53px', borderRadius: '12px' }}
                        // onChange={(e) => setPassword(e.target.value)}
                      />
                    </Stack>
                    <Stack spacing={1}>
                      <InputLabel sx={{ paddingTop: '20px' }}>Capital paid-In</InputLabel>
                      <FormControl fullWidth>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={contact}
                          onChange={handleChangeContact}
                          placeholder="Contact"
                          sx={{ height: '53px', borderRadius: '12px' }}
                        ></Select>
                      </FormControl>
                    </Stack>
                    <Stack spacing={1}>
                      <InputLabel sx={{ paddingTop: '33px' }}>Fund Sub-Sector</InputLabel>
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                          label="Date"
                          // value={value}
                          // onChange={(newValue) => {
                          //   // setValue(newValue);
                          // }}
                          slotProps={{
                            textField: {
                              borderRadius: '20px'
                            }
                          }}
                        />
                      </LocalizationProvider>
                    </Stack>
                    {/* <Stack spacing={0} className={classes.tableWithBorder}></Stack> */}
                  </Grid>
                </Grid>
                <Stack spacing={1}>
                  <InputLabel sx={{ paddingTop: '20px' }}>Fund Strategy </InputLabel>
                  <Select
                    margin="normal"
                    required
                    fullWidth
                    name="Fund Strategy "
                    id="Fund Strategy "
                    type="text"
                    sx={{ height: '53px', borderRadius: '12px' }}
                    // onChange={(e) => setPassword(e.target.value)}
                  />
                </Stack>
                <Box sx={{ paddingTop: '50px', display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }} gap={4}>
                  <Button variant="outlined" color="secondary" className={classes.buttonstyle}>
                    Cancel
                  </Button>
                  <Button variant="contained" color="secondary" onClick={handleNext} className={classes.buttonstyle}>
                    Next
                  </Button>
                </Box>
              </Grid>
            )}
            {activeStep === 2 && (
              <Grid item xs={12} sm={8} sx={{ mt: 2 }}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <Stack spacing={1}>
                      <InputLabel sx={{ paddingTop: '20px' }}>Fund Size (Amount)</InputLabel>
                      <TextField
                        margin="normal"
                        required
                        placeholder="Fund Size (Amount)"
                        fullWidth
                        name="Fund Region"
                        id="Fund Region"
                        type="text"
                        InputProps={{
                          sx: {
                            padding: '6px',
                            borderRadius: '12px'
                          }
                        }}
                        // onChange={(e) => setPassword(e.target.value)}
                      />
                    </Stack>
                    <Stack spacing={1}>
                      <InputLabel sx={{ paddingTop: '20px' }}>Performance Fee </InputLabel>
                      <TextField
                        margin="normal"
                        required
                        placeholder="Performance Fee "
                        fullWidth
                        name="Fund Region"
                        id="Fund Region"
                        type="text"
                        InputProps={{
                          sx: {
                            padding: '6px',
                            borderRadius: '12px'
                          }
                        }}
                        // onChange={(e) => setPassword(e.target.value)}
                      />
                    </Stack>
                    <Stack spacing={1}>
                      <InputLabel sx={{ paddingTop: '20px' }}>Administration Fee</InputLabel>
                      <TextField
                        margin="normal"
                        required
                        placeholder="Administration Fee"
                        fullWidth
                        name="Fund Region"
                        id="Fund Region"
                        type="text"
                        InputProps={{
                          sx: {
                            padding: '6px',
                            borderRadius: '12px'
                          }
                        }}
                        // onChange={(e) => setPassword(e.target.value)}
                      />
                    </Stack>
                    <Stack spacing={1}>
                      <InputLabel sx={{ paddingTop: '20px' }}>Carried Interest</InputLabel>
                      <TextField
                        margin="normal"
                        required
                        placeholder="Carried Interest"
                        fullWidth
                        name="Fund Sector"
                        id="Fund Sector"
                        type="text"
                        InputProps={{
                          sx: {
                            padding: '6px',
                            borderRadius: '12px'
                          }
                        }}
                        // onChange={(e) => setPassword(e.target.value)}
                      />
                    </Stack>
                    <Stack spacing={1}>
                      <InputLabel sx={{ paddingTop: '20px' }}>Benchmark Index</InputLabel>
                      <TextField
                        margin="normal"
                        required
                        placeholder="Benchmark Index"
                        fullWidth
                        name="Fund Stage"
                        id="Fund Stage"
                        type="text"
                        InputProps={{
                          sx: {
                            padding: '6px',
                            borderRadius: '12px'
                          }
                        }}
                        // onChange={(e) => setPassword(e.target.value)}
                      />
                    </Stack>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Stack spacing={1}>
                      <InputLabel sx={{ paddingTop: '20px' }}>Fund Currency</InputLabel>
                      <TextField
                        margin="normal"
                        required
                        placeholder="Fund Currency"
                        fullWidth
                        name="Fund Region"
                        id="Fund Region"
                        type="text"
                        InputProps={{
                          sx: {
                            padding: '6px',
                            borderRadius: '12px'
                          }
                        }}
                        // onChange={(e) => setPassword(e.target.value)}
                      />
                    </Stack>
                    <Stack spacing={1}>
                      <InputLabel sx={{ paddingTop: '20px' }}>Management Fee</InputLabel>
                      <TextField
                        margin="normal"
                        required
                        placeholder="Management Fee "
                        fullWidth
                        name="Fund Region"
                        id="Fund Region"
                        type="text"
                        InputProps={{
                          sx: {
                            padding: '6px',
                            borderRadius: '12px'
                          }
                        }}
                        // onChange={(e) => setPassword(e.target.value)}
                      />
                    </Stack>
                    <Stack spacing={1}>
                      <InputLabel sx={{ paddingTop: '20px' }}>Transaction Fee</InputLabel>
                      <TextField
                        margin="normal"
                        required
                        placeholder="Transaction Fee"
                        fullWidth
                        name="Fund Region"
                        id="Fund Region"
                        type="text"
                        InputProps={{
                          sx: {
                            padding: '6px',
                            borderRadius: '12px'
                          }
                        }}
                        // onChange={(e) => setPassword(e.target.value)}
                      />
                    </Stack>
                    <Stack spacing={1}>
                      <InputLabel sx={{ paddingTop: '20px' }}>Catchup</InputLabel>
                      <TextField
                        margin="normal"
                        required
                        placeholder="Carried Interest"
                        fullWidth
                        name="Fund Sector"
                        id="Fund Sector"
                        type="text"
                        InputProps={{
                          sx: {
                            padding: '6px',
                            borderRadius: '12px'
                          }
                        }}
                        // onChange={(e) => setPassword(e.target.value)}
                      />
                    </Stack>
                    <Stack spacing={1}>
                      <InputLabel sx={{ paddingTop: '20px' }}>Target Returns</InputLabel>
                      <TextField
                        margin="normal"
                        required
                        placeholder="Target Returns"
                        fullWidth
                        name="Fund Stage"
                        id="Fund Stage"
                        type="text"
                        InputProps={{
                          sx: {
                            padding: '6px',
                            borderRadius: '12px'
                          }
                        }}
                        // onChange={(e) => setPassword(e.target.value)}
                      />
                    </Stack>
                  </Grid>
                </Grid>
                <Stack spacing={1}>
                  <InputLabel sx={{ paddingTop: '20px' }}>Above Catchup </InputLabel>
                  <TextField
                    margin="normal"
                    required
                    placeholder="Above Catchup"
                    fullWidth
                    name="Fund Stage"
                    id="Fund Stage"
                    type="text"
                    InputProps={{
                      sx: {
                        padding: '6px',
                        borderRadius: '12px'
                      }
                    }}
                    // onChange={(e) => setPassword(e.target.value)}
                  />
                </Stack>
                <Box sx={{ paddingTop: '20px', display: 'flex', justifyContent: 'center' }} gap={4}>
                  <Button variant="outlined" color="secondary" className={classes.buttonstyle}>
                    Cancel
                  </Button>
                  <Button variant="contained" color="secondary" onClick={handleNext} className={classes.buttonstyle}>
                    Next
                  </Button>
                </Box>
              </Grid>
            )}
            {activeStep === 3 && (
              <Grid item xs={12} sm={8} sx={{ mt: 2 }}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <Stack spacing={1}>
                      <InputLabel sx={{ paddingTop: '20px' }}>Fund Strategy </InputLabel>
                      <Select
                        margin="normal"
                        required
                        fullWidth
                        name="Fund Strategy "
                        id="Fund Strategy "
                        type="text"
                        sx={{ height: '53px', borderRadius: '12px' }}
                        // onChange={(e) => setPassword(e.target.value)}
                      />
                    </Stack>
                    <Stack spacing={1}>
                      <InputLabel sx={{ paddingTop: '20px' }}>Target Returns</InputLabel>
                      <TextField
                        margin="normal"
                        required
                        placeholder="Target Returns"
                        fullWidth
                        name="Fund Stage"
                        id="Fund Stage"
                        type="text"
                        InputProps={{
                          sx: {
                            padding: '6px',
                            borderRadius: '12px'
                          }
                        }}
                        // onChange={(e) => setPassword(e.target.value)}
                      />
                    </Stack>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Stack spacing={1}>
                      <InputLabel sx={{ paddingTop: '20px' }}>Catchup</InputLabel>
                      <TextField
                        margin="normal"
                        required
                        placeholder="Carried Interest"
                        fullWidth
                        name="Fund Sector"
                        id="Fund Sector"
                        type="text"
                        InputProps={{
                          sx: {
                            padding: '6px',
                            borderRadius: '12px'
                          }
                        }}
                        // onChange={(e) => setPassword(e.target.value)}
                      />
                    </Stack>
                    <Stack spacing={1}>
                      <InputLabel sx={{ paddingTop: '20px' }}>Target Returns</InputLabel>
                      <TextField
                        margin="normal"
                        required
                        placeholder="Target Returns"
                        fullWidth
                        name="Fund Stage"
                        id="Fund Stage"
                        type="text"
                        InputProps={{
                          sx: {
                            padding: '6px',
                            borderRadius: '12px'
                          }
                        }}
                        // onChange={(e) => setPassword(e.target.value)}
                      />
                    </Stack>
                  </Grid>
                </Grid>
                <Stack spacing={1}>
                  <InputLabel sx={{ paddingTop: '20px' }}>Above Catchup </InputLabel>
                  <TextField
                    margin="normal"
                    required
                    placeholder="Above Catchup"
                    fullWidth
                    name="Fund Stage"
                    id="Fund Stage"
                    type="text"
                    InputProps={{
                      sx: {
                        padding: '6px',
                        borderRadius: '12px'
                      }
                    }}
                    // onChange={(e) => setPassword(e.target.value)}
                  />
                </Stack>
                <Box
                  sx={{
                    paddingTop: '50px',
                    display: 'flex',
                    justifyContent: 'center',
                    mb: '10px',
                    height: '220px',
                    alignItems: 'flex-end'
                  }}
                  gap={4}
                >
                  <Button variant="outlined" color="secondary" className={classes.buttonstyle}>
                    Cancel
                  </Button>
                  <Button variant="contained" color="secondary" onClick={handleNext} className={classes.buttonstyle}>
                    Next
                  </Button>
                </Box>
              </Grid>
            )}
            {activeStep === 4 && (
              <Grid item xs={12} sm={8} sx={{ mt: 2 }}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <Stack spacing={1}>
                      <InputLabel sx={{ paddingTop: '20px' }}>Investor Profile</InputLabel>
                      <Select
                        margin="normal"
                        required
                        fullWidth
                        name="Fund Strategy "
                        id="Fund Strategy "
                        type="text"
                        sx={{ height: '53px', borderRadius: '12px' }}
                        // onChange={(e) => setPassword(e.target.value)}
                      />
                    </Stack>
                    <Stack spacing={1}>
                      <InputLabel sx={{ paddingTop: '20px' }}>Distribution Policy</InputLabel>
                      <TextField
                        margin="normal"
                        required
                        placeholder="Distribution Policy"
                        fullWidth
                        name="Fund Stage"
                        id="Fund Stage"
                        type="text"
                        InputProps={{
                          sx: {
                            padding: '6px',
                            borderRadius: '12px'
                          }
                        }}
                        // onChange={(e) => setPassword(e.target.value)}
                      />
                    </Stack>
                    <Stack spacing={1}>
                      <InputLabel sx={{ paddingTop: '20px' }}>Key Person Provisions</InputLabel>
                      <TextField
                        margin="normal"
                        required
                        placeholder="Key Person Provisions"
                        fullWidth
                        name="Fund Stage"
                        id="Fund Stage"
                        type="text"
                        InputProps={{
                          sx: {
                            padding: '6px',
                            borderRadius: '12px'
                          }
                        }}
                        // onChange={(e) => setPassword(e.target.value)}
                      />
                    </Stack>
                    <Stack spacing={1}>
                      <InputLabel sx={{ paddingTop: '20px' }}>ESG Criteria</InputLabel>
                      <TextField
                        margin="normal"
                        required
                        placeholder="ESG Criteria"
                        fullWidth
                        name="Fund Stage"
                        id="Fund Stage"
                        type="text"
                        InputProps={{
                          sx: {
                            padding: '6px',
                            borderRadius: '12px'
                          }
                        }}
                        // onChange={(e) => setPassword(e.target.value)}
                      />
                    </Stack>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Stack spacing={1}>
                      <InputLabel sx={{ paddingTop: '20px' }}>Capital Call Structure</InputLabel>
                      <TextField
                        margin="normal"
                        required
                        placeholder="Capital Call Structure"
                        fullWidth
                        name="Fund Sector"
                        id="Fund Sector"
                        type="text"
                        InputProps={{
                          sx: {
                            padding: '6px',
                            borderRadius: '12px'
                          }
                        }}
                        // onChange={(e) => setPassword(e.target.value)}
                      />
                    </Stack>
                    <Stack spacing={1}>
                      <InputLabel sx={{ paddingTop: '20px' }}>Co-Investment Opportunities</InputLabel>
                      <TextField
                        margin="normal"
                        required
                        placeholder="Co-Investment Opportunities"
                        fullWidth
                        name="Fund Stage"
                        id="Fund Stage"
                        type="text"
                        InputProps={{
                          sx: {
                            padding: '6px',
                            borderRadius: '12px'
                          }
                        }}
                        // onChange={(e) => setPassword(e.target.value)}
                      />
                    </Stack>
                    <Stack spacing={1}>
                      <InputLabel sx={{ paddingTop: '20px' }}>Reporting and Transparency</InputLabel>
                      <TextField
                        margin="normal"
                        required
                        placeholder="Reporting and Transparency"
                        fullWidth
                        name="Fund Stage"
                        id="Fund Stage"
                        type="text"
                        InputProps={{
                          sx: {
                            padding: '6px',
                            borderRadius: '12px'
                          }
                        }}
                        // onChange={(e) => setPassword(e.target.value)}
                      />
                    </Stack>
                    <Stack spacing={1}>
                      <InputLabel sx={{ paddingTop: '20px' }}>Conflict of Interest Policies</InputLabel>
                      <TextField
                        margin="normal"
                        required
                        placeholder="Conflict of Interest Policies"
                        fullWidth
                        name="Fund Stage"
                        id="Fund Stage"
                        type="text"
                        InputProps={{
                          sx: {
                            padding: '6px',
                            borderRadius: '12px'
                          }
                        }}
                        // onChange={(e) => setPassword(e.target.value)}
                      />
                    </Stack>
                  </Grid>
                </Grid>
                <Box sx={{ paddingTop: '50px', display: 'flex', justifyContent: 'center', mb: '10px' }} gap={4}>
                  <Button variant="outlined" color="secondary" className={classes.buttonstyle}>
                    Cancel
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    // onClick={handleNext}
                    className={classes.buttonstyle}
                  >
                    Save
                  </Button>
                </Box>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};
const useStyles = makeStyles(() => ({
  buttonstyle: {
    padding: '6px',
    borderRadius: '10px',
    width: '180px',
    height: '48px',
    marginTop: '20px'
  },
  textstyle: {
    fontSize: '14px',
    marginLeft: '12px'
  },
  textboxstyle: {
    display: 'flex',
    alignItems: 'center'
  }
}));
Fund_Modal.propTypes = {
  fundOpen: PropTypes.bool,
  handleFundClose: PropTypes.func
};
export default Fund_Modal;
