import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Modal, useMediaQuery } from '@mui/material';
import { Box, Typography, Grid, TextField, InputLabel, Stack } from '@mui/material';
import { CalendarIcon } from '@mui/x-date-pickers';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import country from '../../assets/images/icons/country.svg';
import InputAdornment from '@mui/material/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@mui/material/styles';

const Portfolio_Modal = ({ portfolioOpen, handlePortfolioClose }) => {
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

  const [contact, setContact] = useState('');
  const handleChangeContact = (event) => {
    event.preventDefault();
    setContact(event.target.value);
  };
  const ModalClose = () => {
    handlePortfolioClose();
  };
  return (
    <Modal
      open={portfolioOpen}
      onClose={handlePortfolioClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalstyle}>
        <Typography id="modal-modal-title" variant="h3" component="h2">
          Add Portfolio
        </Typography>
        <Typography id="modal-modal-title" sx={{ mt: 2, fontSize: '16px', color: '#7E8487' }}>
          Thursday
        </Typography>
        <Box sx={{ display: 'flex' }}>
          <CalendarIcon />
          <Typography sx={{ color: '#7E8487' }}>&nbsp;31/05/23</Typography>
        </Box>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} sm={6}>
              <Stack spacing={1}>
                <InputLabel sx={{ paddingTop: '10px' }}>Portfolio Company</InputLabel>
                <TextField
                  margin="normal"
                  required
                  placeholder="Portfolio Company"
                  fullWidth
                  name="portfolio"
                  id="portfolio"
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
                <InputLabel sx={{ paddingTop: '10px' }}>Currency</InputLabel>
                <TextField
                  margin="normal"
                  required
                  placeholder="Currency"
                  fullWidth
                  name="Currency"
                  id="Currency"
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
                <InputLabel sx={{ paddingTop: '10px' }}>Industry</InputLabel>
                <TextField
                  margin="normal"
                  required
                  placeholder="Industry"
                  fullWidth
                  name="Industry"
                  id="Industry"
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
                <InputLabel sx={{ paddingTop: '10px' }}>Acquired On</InputLabel>
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
              <Stack spacing={1}>
                <InputLabel sx={{ paddingTop: '10px' }}>Capital paid-In</InputLabel>
                <TextField
                  margin="normal"
                  required
                  placeholder="Capital paid-In"
                  fullWidth
                  name="Capital paid-In"
                  id="Capital"
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
                <InputLabel sx={{ paddingTop: '8px' }}>Contact</InputLabel>
                <FormControl fullWidth>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={contact}
                    onChange={handleChangeContact}
                    placeholder="Contact"
                    sx={{ height: '53px', borderRadius: '12px' }}
                  >
                    <MenuItem value={1}>
                      <Box className={classes.textboxstyle}>
                        <Box className={classes.countrystyle} />
                        <Typography className={classes.textstyle}>Institutional Investor</Typography>
                      </Box>
                    </MenuItem>
                    <MenuItem value={2}>
                      <Box className={classes.textboxstyle}>
                        <Box className={classes.countrystyle} />
                        <Typography className={classes.textstyle}>Pension Fund</Typography>
                      </Box>
                    </MenuItem>
                    <MenuItem value={3}>
                      <Box className={classes.textboxstyle}>
                        <Box className={classes.countrystyle} />
                        <Typography className={classes.textstyle}>Family Office</Typography>
                      </Box>
                    </MenuItem>
                    <MenuItem value={4}>
                      <Box className={classes.textboxstyle}>
                        <Box className={classes.countrystyle} />
                        <Typography className={classes.textstyle}>Venture Capital Firm</Typography>
                      </Box>
                    </MenuItem>
                    <MenuItem value={5}>
                      <Box className={classes.textboxstyle}>
                        <Box className={classes.countrystyle} />
                        <Typography className={classes.textstyle}>Angel Group</Typography>
                      </Box>
                    </MenuItem>
                  </Select>
                </FormControl>
              </Stack>
              {/* <Stack spacing={0} className={classes.tableWithBorder}></Stack> */}
            </Grid>
          </Grid>
          <Stack spacing={1}>
            <InputLabel sx={{ paddingTop: '10px' }}>Status</InputLabel>
            <TextField
              margin="normal"
              required
              placeholder="Status"
              fullWidth
              name="Status"
              id="Status"
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
            <Button variant="outlined" color="secondary" className={classes.buttonstyle} onClick={handlePortfolioClose}>
              Discard
            </Button>
            <Button variant="contained" color="secondary" className={classes.buttonstyle} onClick={ModalClose}>
              Add
            </Button>
          </Box>
        </Grid>
      </Box>
    </Modal>
  );
};
const useStyles = makeStyles(() => ({
  countrystyle: {
    backgroundImage: `url(${country})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    width: '30px',
    height: '30px'
  },
  buttonstyle: {
    padding: '6px',
    borderRadius: '10px',
    width: '180px',
    height: '48px'
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

Portfolio_Modal.propTypes = {
  portfolioOpen: PropTypes.bool.isRequired,
  handlePortfolioClose: PropTypes.func.isRequired
};
export default Portfolio_Modal;
