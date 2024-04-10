import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import { Box, InputAdornment, Grid, Stack, Tab, Tabs, Typography } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ReactApexChart from 'react-apexcharts';
import { TableFunds, TableInvest } from 'pages/tables/FundTable';
import Vector from '../../assets/images/icons/vector.svg';
// import janny from '../../assets/images/users/janny.png';
// import Select from '@mui/material/Select';
// import FormControl from '@mui/material/FormControl';
import MainCard from 'components/MainCard';
import { DateRangePicker } from '@mui/x-date-pickers-pro';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import Button from '@mui/material/Button';
// import PortoCard from 'components/cards/CustomCard/pfrofil-card';
// import Chat from 'pages/apps/chat';
// import { PlotOptionChart, CheckboxButtonGroup } from 'sections/Charts/Funds/Charts';
import IconButton from 'components/@extended/IconButton';
function createData(name, content) {
  return { name, content };
}
//Capital Data
// function CcreateData(name, Issued, CDate, Amount, Purpose, Sent, Status) {
//   return { name, Issued, CDate, Amount, Purpose, Sent, Status };
// }
//Investor Data
function IcreateData(name, type, amount, cap, unfund, contact) {
  return { name, type, amount, cap, unfund, contact };
}
// //Document Data
// function DcreateData(Title, Date, Document, Access, Description) {
//   return { Title, Date, Document, Access, Description };
// }
// function BcreateData(Index, Mo, TMo, OYr, TYr, Result) {
//   return { Index, Mo, TMo, OYr, TYr, Result };
// }
// //Portfolio Data
// function PcreateData(company, on, currency, invest, industry, country, status) {
//   return { company, on, currency, invest, industry, country, status };
// }
//Card data
// const cardDatas = [
//   {
//     image: janny,
//     role: 'Project leader',
//     name: 'Savannah Nguyen',
//     content:
//       'With over 20 years of experience in the investment industry, John leads our firm with a keen eye for innovative opportunities and a commitment to sustainable growth. John holds an MBA from Harvard Business School.'
//   },
//   {
//     image: janny,
//     role: 'Full Stack Developer',
//     name: 'Savannah Nguyen',
//     content:
//       'With over 20 years of experience in the investment industry, John leads our firm with a keen eye for innovative opportunities and a commitment to sustainable growth. John holds an MBA from Harvard Business School.'
//   },
//   {
//     image: janny,
//     role: 'Full Stack Developer',
//     name: 'Savannah Nguyen',
//     content:
//       'With over 20 years of experience in the investment industry, John leads our firm with a keen eye for innovative opportunities and a commitment to sustainable growth. John holds an MBA from Harvard Business School.'
//   },
//   {
//     image: janny,
//     role: 'Full Stack Developer',
//     name: 'Savannah Nguyen',
//     content:
//       'With over 20 years of experience in the investment industry, John leads our firm with a keen eye for innovative opportunities and a commitment to sustainable growth. John holds an MBA from Harvard Business School.'
//   },
//   {
//     image: janny,
//     role: 'Project leader',
//     name: 'Savannah Nguyen',
//     content:
//       'With over 20 years of experience in the investment industry, John leads our firm with a keen eye for innovative opportunities and a commitment to sustainable growth. John holds an MBA from Harvard Business School.'
//   },
//   {
//     image: janny,
//     role: 'Full Stack Developer',
//     name: 'Savannah Nguyen',
//     content:
//       'With over 20 years of experience in the investment industry, John leads our firm with a keen eye for innovative opportunities and a commitment to sustainable growth. John holds an MBA from Harvard Business School.'
//   },
//   {
//     image: janny,
//     role: 'Full Stack Developer',
//     name: 'Savannah Nguyen',
//     content:
//       'With over 20 years of experience in the investment industry, John leads our firm with a keen eye for innovative opportunities and a commitment to sustainable growth. John holds an MBA from Harvard Business School.'
//   },
//   {
//     image: janny,
//     role: 'Full Stack Developer',
//     name: 'Savannah Nguyen',
//     content:
//       'With over 20 years of experience in the investment industry, John leads our firm with a keen eye for innovative opportunities and a commitment to sustainable growth. John holds an MBA from Harvard Business School.'
//   }
// ];

//for line Charts
const chartData = {
  series: [
    {
      name: 'Series 1',
      data: [-1000, -800, -600, -400, -200, 0, -200, 400, 600, 800, 1000]
    }
  ],
  options: {
    chart: {
      height: 50,
      type: 'line'
    },
    xaxis: {
      categories: ['January', 'Februry', 'March', 'April', 'May', 'June', 'July']
    }
  }
};
//Funds Table
const rows = [
  createData('Type', 'None'),
  createData('Inception', '2020'),
  createData('Strategy', 'Growth'),
  createData('Currency', 'Euro'),
  createData('Region', 'Eastern & western Europe')
];
const rows_R = [
  createData('Sector', 'Comms Cosumer'),
  createData('Indsutry', 'Staples, Financial, Industrial'),
  createData('Vintage', '2020'),
  createData('ESG', 'ESG Score 67.5'),
  createData('Ops Strategv', ' ')
];
//Capital Table
// const Crows = [
//   CcreateData(
//     'CC-2022-001',
//     '01/10/2024',
//     'July 10, 2022',
//     '$5,000,000',
//     'To finance Series A investment in FinTech Innovations Inc.',
//     '45 investor notices sent',
//     'Received $5,000,000 (100% of called capital)'
//   ),
//   CcreateData(
//     'CC-2022-001',
//     '01/10/2024',
//     'July 10, 2022',
//     '$5,000,000',
//     'To finance Series A investment in FinTech Innovations Inc.',
//     '45 investor notices sent',
//     'Received $5,000,000 (100% of called capital)'
//   )
// ];
// const Brows = [
//   BcreateData('CA Global ex US Dev Mkts PE/VC(USS)', '11.6', '33 4', '28.8', '24.9', 30),
//   BcreateData('CA Global ex US Dev Mkts PE/VC(USS)', '11.6', '33 4', '28.8', '24.9', 20),
//   BcreateData('CA Global ex US Dev Mkts PE/VC(USS)', '11.6', '33 4', '28.8', '24.9', 60),
//   BcreateData('CA Global ex US Dev Mkts PE/VC(USS)', '11.6', '33 4', '28.8', '24.9', 20),
//   BcreateData('CA Global ex US Dev Mkts PE/VC(USS)', '11.6', '33 4', '28.8', '24.9', 90),
//   BcreateData('CA Global ex US Dev Mkts PE/VC(USS)', '11.6', '33 4', '28.8', '24.9', 40),
//   BcreateData('CA Global ex US Dev Mkts PE/VC(USS)', '11.6', '33 4', '28.8', '24.9', 50),
//   BcreateData('CA Global ex US Dev Mkts PE/VC(USS)', '11.6', '33 4', '28.8', '24.9', 70),
//   BcreateData('CA Global ex US Dev Mkts PE/VC(USS)', '11.6', '33 4', '28.8', '24.9', 30),
//   BcreateData('CA Global ex US Dev Mkts PE/VC(USS)', '11.6', '33 4', '28.8', '24.9', 30),
//   BcreateData('CA Global ex US Dev Mkts PE/VC(USS)', '11.6', '33 4', '28.8', '24.9', 30),
//   BcreateData('CA Global ex US Dev Mkts PE/VC(USS)', '11.6', '33 4', '28.8', '24.9', 30),
//   BcreateData('CA Global ex US Dev Mkts PE/VC(USS)', '11.6', '33 4', '28.8', '24.9', 30),
//   BcreateData('CA Global ex US Dev Mkts PE/VC(USS)', '11.6', '33 4', '28.8', '24.9', 30),
//   BcreateData('CA Global ex US Dev Mkts PE/VC(USS)', '11.6', '33 4', '28.8', '24.9', 30),
//   BcreateData('CA Global ex US Dev Mkts PE/VC(USS)', '11.6', '33 4', '28.8', '24.9', 30),
//   BcreateData('CA Global ex US Dev Mkts PE/VC(USS)', '11.6', '33 4', '28.8', '24.9', 30),
//   BcreateData('CA Global ex US Dev Mkts PE/VC(USS)', '11.6', '33 4', '28.8', '24.9', 30),
//   BcreateData('CA Global ex US Dev Mkts PE/VC(USS)', '11.6', '33 4', '28.8', '24.9', 30),
//   BcreateData('CA Global ex US Dev Mkts PE/VC(USS)', '11.6', '33 4', '28.8', '24.9', 30)
// ];
//Document Table
// const Drows = [
//   DcreateData('CC-2022-001', '01/10/2024', ' Financial Report', '$5,000,000', 'To finance Series A investment in FinTech Innovations Inc.'),
//   DcreateData('CC-2022-001', '01/10/2024', ' Financial Report', '$5,000,000', 'To finance Series A investment in FinTech Innovations Inc.'),
//   DcreateData('CC-2022-001', '01/10/2024', ' Financial Report', '$5,000,000', 'To finance Series A investment in FinTech Innovations Inc.'),
//   DcreateData('CC-2022-001', '01/10/2024', ' Financial Report', '$5,000,000', 'To finance Series A investment in FinTech Innovations Inc.'),
//   DcreateData('CC-2022-001', '01/10/2024', ' Financial Report', '$5,000,000', 'To finance Series A investment in FinTech Innovations Inc.'),
//   DcreateData('CC-2022-001', '01/10/2024', ' Financial Report', '$5,000,000', 'To finance Series A investment in FinTech Innovations Inc.'),
//   DcreateData('CC-2022-001', '01/10/2024', ' Financial Report', '$5,000,000', 'To finance Series A investment in FinTech Innovations Inc.'),
//   DcreateData('CC-2022-001', '01/10/2024', ' Financial Report', '$5,000,000', 'To finance Series A investment in FinTech Innovations Inc.'),
//   DcreateData('CC-2022-001', '01/10/2024', ' Financial Report', '$5,000,000', 'To finance Series A investment in FinTech Innovations Inc.'),
//   DcreateData('CC-2022-001', '01/10/2024', ' Financial Report', '$5,000,000', 'To finance Series A investment in FinTech Innovations Inc.'),
//   DcreateData('CC-2022-001', '01/10/2024', ' Financial Report', '$5,000,000', 'To finance Series A investment in FinTech Innovations Inc.'),
//   DcreateData('CC-2022-001', '01/10/2024', ' Financial Report', '$5,000,000', 'To finance Series A investment in FinTech Innovations Inc.'),
//   DcreateData('CC-2022-001', '01/10/2024', ' Financial Report', '$5,000,000', 'To finance Series A investment in FinTech Innovations Inc.'),
//   DcreateData('CC-2022-001', '01/10/2024', ' Financial Report', '$5,000,000', 'To finance Series A investment in FinTech Innovations Inc.'),
//   DcreateData('CC-2022-001', '01/10/2024', ' Financial Report', '$5,000,000', 'To finance Series A investment in FinTech Innovations Inc.'),
//   DcreateData('CC-2022-001', '01/10/2024', ' Financial Report', '$5,000,000', 'To finance Series A investment in FinTech Innovations Inc.')
// ];
//Invest Table
const Invest_rows = [
  IcreateData(
    'Oaktree Capital Management',
    'Institutional Investor',
    '$20,000,000',
    '$15,000,000',
    '$5,000,000',
    'Jane Doe, Portfolio Manager'
  ),
  IcreateData(
    'Oaktree Capital Management',
    'Institutional Investor',
    '$20,000,000',
    '$15,000,000',
    '$5,000,000',
    'Jane Doe, Portfolio Manager'
  ),
  IcreateData(
    'Oaktree Capital Management',
    'Institutional Investor',
    '$20,000,000',
    '$15,000,000',
    '$5,000,000',
    'Jane Doe, Portfolio Manager'
  ),
  IcreateData(
    'Oaktree Capital Management',
    'Institutional Investor',
    '$20,000,000',
    '$15,000,000',
    '$5,000,000',
    'Jane Doe, Portfolio Manager'
  )
];
// const Prows = [
//   PcreateData('Sunday Natural Products', '01/10/2024', 'EUR', ' 800M', 'Retail Consumer Staples', 'German', true),
//   PcreateData('Sunday Natural Products', '01/10/2024', 'EUR', ' 800M', 'Retail Consumer Staples', 'German', true),
//   PcreateData('Sunday Natural Products', '01/10/2024', 'EUR', ' 800M', 'Retail Consumer Staples', 'German', false),
//   PcreateData('Sunday Natural Products', '01/10/2024', 'EUR', ' 800M', 'Retail Consumer Staples', 'German', true),
//   PcreateData('Sunday Natural Products', '01/10/2024', 'EUR', ' 800M', 'Retail Consumer Staples', 'German', true),
//   PcreateData('Sunday Natural Products', '01/10/2024', 'EUR', ' 800M', 'Retail Consumer Staples', 'German', true),
//   PcreateData('Sunday Natural Products', '01/10/2024', 'EUR', ' 800M', 'Retail Consumer Staples', 'German', true),
//   PcreateData('Sunday Natural Products', '01/10/2024', 'EUR', ' 800M', 'Retail Consumer Staples', 'German', false),
//   PcreateData('Sunday Natural Products', '01/10/2024', 'EUR', ' 800M', 'Retail Consumer Staples', 'German', false),
//   PcreateData('Sunday Natural Products', '01/10/2024', 'EUR', ' 800M', 'Retail Consumer Staples', 'German', true),
//   PcreateData('Sunday Natural Products', '01/10/2024', 'EUR', ' 800M', 'Retail Consumer Staples', 'German', true)
// ];
const Tab_Titles = ['Overview', 'Performance', 'Subscriptions', 'Capital Calls', 'Documents', 'Notes'];
// const theme = useTheme();
const InvestFundView = () => {
  const classes = useStyles();
  // const [expanded, setExpanded] = useState(false);
  // const theme = useTheme();
  const [value, setValue] = useState(0);
  // Date Picker
  // const [fromDate, setFromDate] = useState(null);
  // const [toDate, setToDate] = useState(null);
  // const AhandleChange = (panel) => (event, isExpanded) => {
  //   setExpanded(isExpanded ? panel : false);
  // };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const a11yProps = (index) => {
    return {
      id: `tab-${index}`,
      'aria-controls': `tabpanel-${index}`
    };
  };

  const TabPanel = ({ value, index, children }) => {
    return (
      <div role="tabpanel" hidden={value !== index} id={`tabpanel-${index}`} aria-labelledby={`tab-${index}`}>
        {value === index && <div>{children}</div>}
      </div>
    );
  };
  TabPanel.propTypes = {
    value: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
    children: PropTypes.node.isRequired
  };

  return (
    <div>
      <MainCard>
        {/* <BasicTable /> */}
        <Typography variant="body2" sx={{ fontSize: '20px', paddingBottom: '10px', fontWeight: 'bold' }}>
          Apex Growth Fund
        </Typography>
        <Typography variant="body2" sx={{ fontSize: '16px' }}>
          Global Tech Ventures III (GTV III) is our flagship fund focused on early-stage technology startups with the potential to disrupt
          markets. Our investment strategy revolves around nurturing innovation in the fintech, healthtech, and greentech sectors. Since its
          inception in 2015, GTV III has managed to consistently outperform benchmarks and deliver superior returns to our investors.
        </Typography>
      </MainCard>
      <Box>
        <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto" sx={{ paddingY: '20px' }}>
          {Tab_Titles.map((Tab_Title, index) => (
            <Tab
              key={index}
              label={Tab_Title}
              {...a11yProps(index)}
              sx={{
                color: (theme) => (theme.palette.mode === 'dark' ? '#008080' : '#7E8487'), // Default color
                '&.Mui-selected': {
                  color: (theme) => (theme.palette.mode === 'dark' ? '#ffab00' : '#008080') // Color for active tab
                }
              }}
            />
          ))}
        </Tabs>
        {/* Tabs */}
        {/* Ovierview Tab */}
        <TabPanel value={value} index={0}>
          <Accordion sx={{ borderRadius: '12px', border: 'white' }}>
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
              sx={{
                borderRadius: '12px',
                paddingY: '20px',
                backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#1E1E1E' : 'white')
              }}
            >
              <Typography variant="body1" fontSize={16} sx={{ color: (theme) => (theme.palette.mode === 'dark' ? 'white' : '#7E8487') }}>
                Fund Detail
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ border: 'white' }}>
              <Grid item xs={12}>
                <Grid container spacing={0} alignItems="center">
                  <Grid item xs={12} sm={6}>
                    <Stack spacing={0}>
                      <TableFunds rows={rows} />
                    </Stack>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Stack spacing={0} className={classes.tableWithBorder}>
                      <TableFunds rows={rows_R} />
                    </Stack>
                  </Grid>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
          <Box sx={{ paddingTop: '32px' }} />
          <Accordion sx={{ borderRadius: '12px', border: 'white' }}>
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
              sx={{
                borderRadius: '12px',
                paddingY: '20px',
                backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#1E1E1E' : 'white')
              }}
            >
              <Typography variant="body1" fontSize={16} sx={{ Color: (theme) => (theme.palette.mode === 'dark' ? 'white' : '#7E8487') }}>
                Financial Terms
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ border: 'white' }}>
              <Grid item xs={12}>
                <Grid container spacing={0} alignItems="center">
                  <Grid item xs={12} sm={6}>
                    <Stack spacing={0}>
                      <TableFunds rows={rows} />
                    </Stack>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Stack spacing={0} className={classes.tableWithBorder}>
                      <TableFunds rows={rows_R} />
                    </Stack>
                  </Grid>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
          <Box sx={{ paddingTop: '32px' }} />
          <Accordion sx={{ borderRadius: '12px', border: 'white' }}>
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
              sx={{
                borderRadius: '12px',
                paddingY: '20px',
                backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#1E1E1E' : 'white')
              }}
            >
              <Typography variant="body1" fontSize={16} sx={{ Color: (theme) => (theme.palette.mode === 'dark' ? 'white' : '#7E8487') }}>
                Performance
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ border: 'white' }}>
              <Grid item xs={12}>
                <Grid container spacing={0} alignItems="center">
                  <Grid item xs={12} sm={6}>
                    <Stack spacing={0}>
                      <TableFunds rows={rows} />
                    </Stack>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Stack spacing={0} className={classes.tableWithBorder}>
                      <TableFunds rows={rows_R} />
                    </Stack>
                  </Grid>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
          <Box sx={{ paddingTop: '32px' }} />
          <Accordion sx={{ borderRadius: '12px', border: 'white' }}>
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
              sx={{
                borderRadius: '12px',
                paddingY: '20px',
                backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#1E1E1E' : 'white')
              }}
            >
              <Typography variant="body1" fontSize={16} sx={{ Color: (theme) => (theme.palette.mode === 'dark' ? 'white' : '#7E8487') }}>
                Subscriptions
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ border: 'white' }}>
              <Grid item xs={12}>
                <Grid container spacing={0} alignItems="center">
                  <Grid item xs={12} sm={6}>
                    <Stack spacing={0}>
                      <TableFunds rows={rows} />
                    </Stack>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Stack spacing={0} className={classes.tableWithBorder}>
                      <TableFunds rows={rows_R} />
                    </Stack>
                  </Grid>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
          <Box sx={{ paddingTop: '32px' }} />
          <Accordion sx={{ borderRadius: '12px', border: 'white' }}>
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
              sx={{
                borderRadius: '12px',
                paddingY: '20px',
                backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#1E1E1E' : 'white')
              }}
            >
              <Typography variant="body1" fontSize={16} sx={{ color: (theme) => (theme.palette.mode === 'dark' ? 'white' : '#7E8487') }}>
                Holdings
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ border: 'white' }}>
              <Grid item xs={12}>
                <Grid container spacing={0} alignItems="center">
                  <Grid item xs={12} sm={6}>
                    <Stack spacing={0}>
                      <TableFunds rows={rows} />
                    </Stack>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Stack spacing={0} className={classes.tableWithBorder}>
                      <TableFunds rows={rows_R} />
                    </Stack>
                  </Grid>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        </TabPanel>
        {/* Performance Tab */}
        <TabPanel value={value} index={1}>
          <Grid sx={{ display: 'flex', justifyContent: 'center' }} gap={2}>
            <IconButton variant="shadow" color="secondary" sx={{ width: '52px', height: '43px', borderRadius: '15px' }}>
              <img src={Vector} alt="Description" />
            </IconButton>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateRangePicker
                calendars={1}
                localeText={{ start: 'From', end: 'To' }}
                slotProps={{
                  textField: {
                    InputProps: {
                      endAdornment: (
                        <InputAdornment
                          sx={{
                            borderRadius: '15px'
                          }}
                          position="end"
                        >
                          <ArrowDropDownIcon />
                        </InputAdornment>
                      )
                    }
                  }
                }}
              />
            </LocalizationProvider>
          </Grid>
          <Grid>
            <ReactApexChart options={chartData.options} series={chartData.series} type="line" height={350} />
          </Grid>
        </TabPanel>
        {/* Inverstor Tab */}
        <TabPanel value={value} index={2}>
          <TableInvest rows={Invest_rows} />
        </TabPanel>
        {/* <TabPanel value={value} index={3}>
          <TablePorto rows={Prows} />
        </TabPanel> */}
        {/* Charts Tab */}
        {/* <TabPanel value={value} index={4}>
          <Grid sx={{ display: 'flex', justifyContent: 'center' }} gap={2}>
            <Button variant="shadow" color="secondary" sx={{ width: '52px', height: '52px', borderRadius: '15px' }}>
              <img src={Vector} alt="Description" />
            </Button>
            <FormControl>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={contact}
                // onChange={handleChangeContact}
                // placeholder="Contact"
                sx={{ height: '53px', borderRadius: '12px', width: '200px' }}
              > */}
        {/* <MenuItem value={1}>
                  <h4>Hi</h4>
                </MenuItem> */}
        {/* </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <Grid container sx={{ width: '100%', display: 'flex', justifyContent: 'space-around' }}>
              <Grid item xs={12} sm={7}>
                <PlotOptionChart />
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <button style={{ width: '20px', height: '20px', border: 'none' }} />
                  <span>&nbsp;&nbsp;Invested&nbsp;&nbsp;</span>
                  <button style={{ width: '20px', height: '20px', border: 'none', backgroundColor: '#008080' }} />
                  <span>&nbsp;&nbsp;Profit&nbsp;&nbsp;</span>
                </Box>
              </Grid>
              <Grid item xs={12} sm={2} sx={{ display: 'flex', alignItems: 'center' }}>
                <CheckboxButtonGroup />
              </Grid>
            </Grid>
          </Grid>
        </TabPanel> */}
        {/* <TabPanel value={value} index={5}>
          <TableCap rows={Crows} />
        </TabPanel>
        <TabPanel value={value} index={6}>
          <TableDocument rows={Drows} />
        </TabPanel> */}
        {/* <TabPanel value={value} index={7}>
          <TableBench rows={Brows} />
        </TabPanel>
        <TabPanel value={value} index={8}>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <Grid container spacing={2} alignItems="center">
              {cardDatas.map((cardData, index) => (
                <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                  <Stack spacing={1}>
                    <PortoCard cardData={cardData} />
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={9}>
          <Chat />
        </TabPanel> */}
      </Box>
    </div>
  );
};
const useStyles = makeStyles(() => ({
  tableWithBorder: {
    borderLeft: '1px solid #e0e0e0', // Define the left border style here
    paddingLeft: '8px' // Optional: Add padding to separate the border from content
  }
}));
export default InvestFundView;
