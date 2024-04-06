import React, { useState } from 'react';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import { Modal, useMediaQuery } from '@mui/material';
import { Box, Typography, Grid, TextField, InputLabel, Stack } from '@mui/material';
import MainCard from 'components/MainCard';
import { Formik } from 'formik';
import { CalendarIcon } from '@mui/x-date-pickers';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Avatar from '../../assets/images/icons/avatar.svg';
import * as yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@mui/material/styles';
import UploadSingleFile from 'components/third-party/dropzone/SingleFile';

const Document_Modal = ({ documentOpen, handleDocumentClose }) => {
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
  return (
    <Modal open={documentOpen} onClose={handleDocumentClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <Box sx={modalstyle}>
        <Typography id="modal-modal-title" variant="h3" component="h2">
          Add Document title
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
                <InputLabel sx={{ paddingTop: '10px' }}>Add Document title </InputLabel>
                <TextField
                  margin="normal"
                  required
                  placeholder="Add Document title "
                  fullWidth
                  name="Add Document title"
                  id="password"
                  type="text"
                  InputProps={{
                    sx: {
                      padding: '6px',
                      borderRadius: '12px'
                    }
                  }}
                />
              </Stack>
              <Stack spacing={1}>
                <InputLabel sx={{ paddingTop: '10px' }}>Document Type</InputLabel>
                <TextField
                  margin="normal"
                  required
                  placeholder="Document Type"
                  fullWidth
                  name="Document Type"
                  id="Document Type"
                  type="text"
                  InputProps={{
                    sx: {
                      padding: '6px',
                      borderRadius: '12px'
                    }
                  }}
                />
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Stack spacing={1}>
                <InputLabel sx={{ paddingTop: '10px' }}>Date</InputLabel>
                <TextField
                  margin="normal"
                  required
                  placeholder="Date"
                  fullWidth
                  name="Date"
                  id="Date"
                  type="text"
                  InputProps={{
                    sx: {
                      padding: '6px',
                      borderRadius: '12px'
                    }
                  }}
                />
              </Stack>
              <Stack spacing={1}>
                <InputLabel sx={{ paddingTop: '8px' }}>Access Level</InputLabel>
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
                        <Box className={classes.avatarstyle} />
                        <Typography className={classes.textstyle}>&nbsp;Institutional Investor</Typography>
                      </Box>
                    </MenuItem>
                    <MenuItem value={2}>
                      <Box className={classes.textboxstyle}>
                        <Box className={classes.avatarstyle} />
                        <Typography className={classes.textstyle}>&nbsp;Pension Fund</Typography>
                      </Box>
                    </MenuItem>
                    <MenuItem value={3}>
                      <Box className={classes.textboxstyle}>
                        <Box className={classes.avatarstyle} />
                        <Typography className={classes.textstyle}>&nbsp;Family Office</Typography>
                      </Box>
                    </MenuItem>
                    <MenuItem value={4}>
                      <Box className={classes.textboxstyle}>
                        <Box className={classes.avatarstyle} />
                        <Typography className={classes.textstyle}>&nbsp;Venture Capital Firm</Typography>
                      </Box>
                    </MenuItem>
                    <MenuItem value={5}>
                      <Box className={classes.textboxstyle}>
                        <Box className={classes.avatarstyle} />
                        <Typography className={classes.textstyle}>&nbsp;Angel Group</Typography>
                      </Box>
                    </MenuItem>
                  </Select>
                </FormControl>
              </Stack>
            </Grid>
          </Grid>
          <MainCard sx={{ mt: '20px' }}>
            <Formik
              initialValues={{ files: null }}
              onSubmit={(values) => {
                // submit form
                console.log('dropzone upload - ', values);
              }}
              validationSchema={yup.object().shape({
                files: yup.mixed().required('Avatar is a required.')
              })}
            >
              {({ values, handleSubmit, setFieldValue, touched, errors }) => (
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <Stack spacing={1.5} alignItems="center">
                        <UploadSingleFile setFieldValue={setFieldValue} file={values.files} error={touched.files && !!errors.files} />
                        {touched.files && errors.files && (
                          <FormHelperText error id="standard-weight-helper-text-password-login">
                            {errors.files}
                          </FormHelperText>
                        )}
                      </Stack>
                    </Grid>
                  </Grid>
                </form>
              )}
            </Formik>
          </MainCard>
          {/* ----------------------------------------------This is part that have to fix--------------------------------------------- */}
          <Stack spacing={1}>
            <InputLabel sx={{ paddingTop: '10px' }}>Comment</InputLabel>
            <TextField
              multiline
              rows={4}
              margin="normal"
              required
              placeholder="Add Document Comment"
              fullWidth
              name="Comment"
              id="Comment"
              InputProps={{
                sx: {
                  padding: '6px',
                  borderRadius: '12px'
                }
              }}
            />
          </Stack>
          <Box sx={{ paddingTop: '20px', display: 'flex', justifyContent: 'center' }} gap={4}>
            <Button variant="outlined" color="secondary" className={classes.buttonstyle}>
              Discard
            </Button>
            <Button variant="contained" color="secondary" className={classes.buttonstyle}>
              Add
            </Button>
          </Box>
        </Grid>
      </Box>
    </Modal>
  );
};

Document_Modal.propTypes = {
  documentOpen: PropTypes.bool.isRequired,
  handleDocumentClose: PropTypes.func.isRequired
};

const useStyles = makeStyles(() => ({
  avatarstyle: {
    backgroundImage: `url(${Avatar})`,
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

export default Document_Modal;
