import React, { useState } from 'react';
import { Search } from '../Header/HeaderContent/Search';
import { Box } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { makeStyles } from '@material-ui/core/styles';
import { TuneOutlined } from '@mui/icons-material';
const InvestorHeader = () => {
  const classes = useStyles();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingX: '12px' }} gap={5}>
        <Search />
        <Button variant="outlined" color="info" endIcon={<ArrowDropDownIcon />} className={classes.styeledButton} onClick={handleClick}>
          <TuneOutlined fontSize="13px" />
          Filter
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          PaperProps={{
            style: {
              width: 160 // Set the width of the menu
            }
          }}
        >
          <MenuItem>
            {/* <PanoramaFishEyeIcon sx={{ fontSize: 'small' }} /> */}
            &nbsp;Item
          </MenuItem>
        </Menu>
      </Box>
    </>
  );
};
const useStyles = makeStyles(() => ({
  styeledButton: {
    height: '40px',
    borderRadius: '15px',
    '&:hover': {
      backgroundColor: 'info' // Darken color on hover
    }
  }
}));
export default InvestorHeader;
