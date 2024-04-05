import React, { useState } from 'react';
import Button from '@mui/material/Button';
// import Menu from '@mui/material/Menu';
import PropTypes from 'prop-types';
import MenuItem from '@mui/material/MenuItem';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import { Modal } from '@mui/material';
import { Box, Typography, Grid, TextField, InputLabel, Stack } from '@mui/material';
// import { width } from '@mui/system';
import { CalendarIcon } from '@mui/x-date-pickers';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import { EventBusyTwoTone } from '@mui/icons-material';
import Avatar from '../../assets/images/icons/avatar.svg';
// import Portfolio_Modal from './addPortfolio-modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  borderRadius: '5px',
  boxShadow: 24,
  maxHeight: '90vh',
  overflow: 'auto',
  p: 2
};
const avatar_style = {
  backgroundImage: `url(${Avatar})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  width: '30px',
  height: '30px'
};
const Investor_Modal = ({ investorOpen, handleInvestorClose }) => {
  const [type, setType] = useState('');
  const handleChangeType = (event) => {
    event.preventDefault();
    setType(event.target.value);
  };
  const [contact, setContact] = useState('');
  const handleChangeContact = (event) => {
    event.preventDefault();
    setContact(event.target.value);
  };
  return (
    <Modal open={investorOpen} onClose={handleInvestorClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h3" component="h2">
          Add Investor
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
                <InputLabel sx={{ paddingTop: '10px' }}>Name</InputLabel>
                <TextField
                  margin="normal"
                  required
                  placeholder="Name"
                  fullWidth
                  name="password"
                  id="password"
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
                <InputLabel sx={{ paddingTop: '10px' }}>Committed amount</InputLabel>
                <TextField
                  margin="normal"
                  required
                  placeholder="Committed amount"
                  fullWidth
                  name="Committed amount"
                  id="committed"
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
                <InputLabel sx={{ paddingTop: '10px' }}>Unfunded Commitment</InputLabel>
                <TextField
                  margin="normal"
                  required
                  placeholder="Unfunded Commitment"
                  fullWidth
                  name="Unfunded Commitment"
                  id="committed"
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
                <InputLabel sx={{ paddingTop: '10px' }}>Contact</InputLabel>
                <FormControl fullWidth>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={type}
                    onChange={handleChangeType}
                    placeholder="Type"
                    sx={{ height: '53px', borderRadius: '12px' }}
                  >
                    <MenuItem value={1}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <PanoramaFishEyeIcon sx={{ fontSize: 'small' }} />
                        <Typography sx={{ fontSize: '14px', ml: '12px' }}>Institutional Investor</Typography>
                      </Box>
                    </MenuItem>
                    <MenuItem value={2}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <PanoramaFishEyeIcon sx={{ fontSize: 'small' }} />
                        <Typography sx={{ fontSize: '14px', ml: '12px' }}>Pension Fund</Typography>
                      </Box>
                    </MenuItem>
                    <MenuItem value={3}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <PanoramaFishEyeIcon sx={{ fontSize: 'small' }} />
                        <Typography sx={{ fontSize: '14px', ml: '12px' }}>Family Office</Typography>
                      </Box>
                    </MenuItem>
                    <MenuItem value={4}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <PanoramaFishEyeIcon sx={{ fontSize: 'small' }} />
                        <Typography sx={{ fontSize: '14px', ml: '12px' }}>Venture Capital Firm</Typography>
                      </Box>
                    </MenuItem>
                    <MenuItem value={5}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <PanoramaFishEyeIcon sx={{ fontSize: 'small' }} />
                        <Typography sx={{ fontSize: '14px', ml: '12px' }}>Angel Group</Typography>
                      </Box>
                    </MenuItem>
                  </Select>
                </FormControl>
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
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box sx={avatar_style} />
                        <Typography sx={{ fontSize: '14px', ml: '12px' }}>Institutional Investor</Typography>
                      </Box>
                    </MenuItem>
                    <MenuItem value={2}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box sx={avatar_style} />
                        <Typography sx={{ fontSize: '14px', ml: '12px' }}>Pension Fund</Typography>
                      </Box>
                    </MenuItem>
                    <MenuItem value={3}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box sx={avatar_style} />
                        <Typography sx={{ fontSize: '14px', ml: '12px' }}>Family Office</Typography>
                      </Box>
                    </MenuItem>
                    <MenuItem value={4}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box sx={avatar_style} />
                        <Typography sx={{ fontSize: '14px', ml: '12px' }}>Venture Capital Firm</Typography>
                      </Box>
                    </MenuItem>
                    <MenuItem value={5}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box sx={avatar_style} />
                        <Typography sx={{ fontSize: '14px', ml: '12px' }}>Angel Group</Typography>
                      </Box>
                    </MenuItem>
                  </Select>
                </FormControl>
              </Stack>
              {/* <Stack spacing={0} className={classes.tableWithBorder}></Stack> */}
            </Grid>
          </Grid>
          <Box sx={{ paddingTop: '20px', display: 'flex', justifyContent: 'center' }} gap={4}>
            <Button variant="outlined" color="secondary" sx={{ padding: '6px', borderRadius: '10px', width: '180px', height: '48px' }}>
              Discard
            </Button>
            <Button variant="contained" color="secondary" sx={{ padding: '6px', borderRadius: '10px', width: '180px', height: '48px' }}>
              Add
            </Button>
          </Box>
        </Grid>
      </Box>
    </Modal>
  );
};

Investor_Modal.propTypes = {
  investorOpen: PropTypes.bool.isRequired,
  handleInvestorClose: PropTypes.func.isRequired
};
export default Investor_Modal;
