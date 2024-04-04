import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import Investor_Modal from 'pages/Modal/addInvestor-modal';
import Portfolio_Modal from 'pages/Modal/addPortfolio-modal';
import Fund_Modal from 'pages/Modal/fund-modal';
import Capital_Modal from 'pages/Modal/addCapital-modal';
import Document_Modal from 'pages/Modal/addDocument-modal';
import PropTypes from 'prop-types';

export function FundViewDropdownButton(props) {
  const [documentOpen, setDocumentOpen] = useState(false);
  const handleDocumentOpen = () => setDocumentOpen(true);
  const handleDocumentClose = () => setDocumentOpen(false);

  const [capitalOpen, setCapitalOpen] = useState(false);
  const handleCapitalOpen = () => setCapitalOpen(true);
  const handleCapitalClose = () => setCapitalOpen(false);

  const [investorOpen, setInvestorOpen] = useState(false);
  const handleInvestorOpen = () => setInvestorOpen(true);
  const handleInvestorClose = () => setInvestorOpen(false);

  const [portfolioOpen, setPortfolioOpen] = useState(false);
  const handlePortfolioOpen = () => setPortfolioOpen(true);
  const handlePortfolioClose = () => setPortfolioOpen(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        endIcon={<ArrowDropDownIcon />}
        sx={{
          backgroundColor: '#008080',
          borderRadius: '12px',
          color: 'white',
          paddingX: '42px',
          '&:hover': {
            backgroundColor: '#005353' // Darken color on hover
          }
        }}
      >
        {props.title}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          style: {
            width: 150 // Set the width of the menu
          }
        }}
      >
        <MenuItem onClick={handleInvestorOpen}>
          <PanoramaFishEyeIcon sx={{ fontSize: 'small' }} />
          &nbsp;Assign Investor
        </MenuItem>
        <MenuItem onClick={handlePortfolioOpen}>
          <PanoramaFishEyeIcon sx={{ fontSize: 'small' }} />
          &nbsp;Assign Portfolio
        </MenuItem>
        <MenuItem>
          <PanoramaFishEyeIcon sx={{ fontSize: 'small' }} />
          &nbsp;Add Transaction
        </MenuItem>
        <MenuItem>
          <PanoramaFishEyeIcon sx={{ fontSize: 'small' }} />
          &nbsp;Add Subscription
        </MenuItem>
        <MenuItem onClick={handleCapitalOpen}>
          <PanoramaFishEyeIcon sx={{ fontSize: 'small' }} />
          &nbsp;Add Capital call
        </MenuItem>
        <MenuItem onClick={handleDocumentOpen}>
          <PanoramaFishEyeIcon sx={{ fontSize: 'small' }} />
          &nbsp;Add Document
        </MenuItem>
        <MenuItem>
          <PanoramaFishEyeIcon sx={{ fontSize: 'small' }} />
          &nbsp;Add Note
        </MenuItem>
      </Menu>
      <Investor_Modal investorOpen={investorOpen} handleInvestorClose={handleInvestorClose} />
      <Portfolio_Modal portfolioOpen={portfolioOpen} handlePortfolioClose={handlePortfolioClose} />
      <Capital_Modal capitalOpen={capitalOpen} handleCapitalClose={handleCapitalClose} />
      <Document_Modal documentOpen={documentOpen} handleDocumentClose={handleDocumentClose} />
    </div>
  );
}

export function FundButton(props) {
  const [add, setAddOpen] = useState(false);
  const handleAddOpen = () => setAddOpen(true);
  const handleAddClose = () => setAddOpen(false);
  return (
    <>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleAddOpen}
        sx={{
          backgroundColor: '#008080',
          borderRadius: '12px',
          color: 'white',
          paddingX: '42px',
          height: '42px',
          '&:hover': {
            backgroundColor: '#005353' // Darken color on hover
          }
        }}
      >
        {props.title}
      </Button>
      <Fund_Modal fundOpen={add} handleFundClose={handleAddClose} />
    </>
  );
}
FundButton.propTypes = {
  title: PropTypes.string.isRequired
};
FundViewDropdownButton.propTypes = {
  title: PropTypes.string.isRequired
};
