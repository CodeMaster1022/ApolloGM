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
    'Net Cashflow': -184
  },
  {
    name: 'Year2',
    Contribution: 100,
    Distribution: 12,
    'Net Cashflow': 174.6
  },
  {
    name: 'Year3',
    Contribution: 200,
    Distribution: -200,
    'Net Cashflow': 107
  },
  {
    name: 'Year4',
    Contribution: -20,
    Distribution: -50,
    'Net Cashflow': 133
  },
  {
    name: 'Year5',
    Contribution: -150,
    Distribution: -80,
    'Net Cashflow': 160
  },
  {
    name: 'Year6',
    Contribution: 149,
    Distribution: -130,
    'Net Cashflow': 191
  },
  {
    name: 'Year7',
    Contribution: 0,
    Distribution: 200,
    'Net Cashflow': 10
  }
];
const data1 = [
  {
    name: 'Year1',
    Contribution: 0,
    Distribution: 0,
    'Gross MOIC': -124,
    'Net TVPI': 200,
    'Net DPI': 190
  },
  {
    name: 'Year2',
    Contribution: 0,
    Distribution: 0,
    'Gross MOIC': -111,
    'Net TVPI': 193,
    'Net DPI': 185
  },
  {
    name: 'Year3',
    Contribution: 0,
    Distribution: 0,
    'Gross MOIC': -107,
    'Net TVPI': 188,
    'Net DPI': 173
  },
  {
    name: 'Year4',
    Contribution: -200,
    Distribution: 200,
    'Gross MOIC': -88,
    'Net TVPI': 183,
    'Net DPI': 173
  },
  {
    name: 'Year5',
    Contribution: -150,
    Distribution: -80,
    'Gross MOIC': -44,
    'Net TVPI': 192,
    'Net DPI': 183
  },
  {
    name: 'Year6',
    Contribution: 149,
    Distribution: -130,
    'Gross MOIC': -33,
    'Net TVPI': 184,
    'Net DPI': 173
  },
  {
    name: 'Year7',
    Contribution: 0,
    Distribution: 200,
    'Gross MOIC': 10,
    'Net TVPI': 188,
    'Net DPI': 174
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
