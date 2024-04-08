import React from 'react';
import InvestorHeader from 'layout/MainLayout/SubHeader/investorHeader';
import { Grid, Typography } from '@mui/material';
import { FundViewDropdownButton } from 'components/FundButton';

const Investor = () => {
  return (
    <>
      <Grid sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
        <Typography sx={{ marginBottom: '17px', fontSize: '24px' }}>Performance by Funds</Typography>
        <InvestorHeader />
        <FundViewDropdownButton title="actions" />
      </Grid>
      <h1>This is the investor pages</h1>
    </>
  );
};

export default Investor;
