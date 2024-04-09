import React from 'react';
import InvestorHeader from 'layout/MainLayout/SubHeader/investorHeader';
import { Grid, Typography, Box } from '@mui/material';
import { FundViewDropdownButton } from 'components/FundButton';
import FCChart from 'sections/Charts/Investor/Individual/FCCharts';
import MultilineChart from 'sections/Charts/Investor/Individual/MuiltipleChartLine';
import MainCard from 'components/MainCard';
const data = [
  {
    name: 'Year1',
    Contribution: -80,
    Distribution: -46,
    Cashflow: -184
  },
  {
    name: 'Year2',
    Contribution: 100,
    Distribution: 12,
    Cashflow: 174.6
  },
  {
    name: 'Year3',
    Contribution: 200,
    Distribution: -200,
    Cashflow: 107
  },
  {
    name: 'Year4',
    Contribution: -20,
    Distribution: -50,
    Cashflow: 133
  },
  {
    name: 'Year5',
    Contribution: -150,
    Distribution: -80,
    Cashflow: 160
  },
  {
    name: 'Year6',
    Contribution: 149,
    Distribution: -130,
    Cashflow: 191
  },
  {
    name: 'Year7',
    Contribution: 0,
    Distribution: 200,
    Cashflow: 10
  }
];
const data1 = [
  {
    name: 'Year1',
    Contribution: -80,
    Distribution: -46,
    Cashflow: -124,
    TVPI: 200,
    DPI: 190
  },
  {
    name: 'Year2',
    Contribution: 100,
    Distribution: 12,
    Cashflow: -111,
    TVPI: 193,
    DPI: 185
  },
  {
    name: 'Year3',
    Contribution: 200,
    Distribution: -200,
    Cashflow: -107,
    TVPI: 188,
    DPI: 173
  },
  {
    name: 'Year4',
    Contribution: -20,
    Distribution: -50,
    Cashflow: -88,
    TVPI: 183,
    DPI: 173
  },
  {
    name: 'Year5',
    Contribution: -150,
    Distribution: -80,
    Cashflow: -44,
    TVPI: 192,
    DPI: 183
  },
  {
    name: 'Year6',
    Contribution: 149,
    Distribution: -130,
    Cashflow: -33,
    TVPI: 184,
    DPI: 173
  },
  {
    name: 'Year7',
    Contribution: 0,
    Distribution: 200,
    Cashflow: 10,
    TVPI: 188,
    DPI: 174
  }
];
const Investor = () => {
  return (
    <>
      <Grid sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
        <Typography sx={{ marginBottom: '17px', fontSize: '24px' }}>Performance by Funds</Typography>
        <InvestorHeader />
        <FundViewDropdownButton title="actions" />
      </Grid>
      <MainCard spacing={3} sx={{ bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#000000' : '#E5F2F2') }}>
        <Box sx={{ backgroundColor: 'white', padding: '10px', borderRadius: '10px', marginTop: '5px' }} height="60vh">
          <h2>&nbsp;Fund Cashflows</h2>
          <FCChart data={data} />
        </Box>
        <Box sx={{ backgroundColor: 'white', padding: '10px', borderRadius: '10px', marginTop: '15px' }} height="60vh">
          <h2>&nbsp;Multiples and IRR</h2>
          <MultilineChart data={data1} />
        </Box>
      </MainCard>
    </>
  );
};

export default Investor;
