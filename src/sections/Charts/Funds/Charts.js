import Chart from 'react-apexcharts';
import Checkbox from '@mui/material/Checkbox';
import { Grid, Box, InputLabel } from '@mui/material';
import { useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
export function PlotOptionChart() {
  const Datas = {
    options: {
      chart: {
        id: 'basic-bar'
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000]
      }
    },
    series: [
      {
        name: 'series-1',
        data: [-30000, -25000, 20000, 15000, 10000, 5000, 2500, 5000, 10000, 15000, 40000]
      }
    ]
  };

  return (
    <>
      <Chart options={Datas.options} series={Datas.series} type="bar" />
    </>
  );
}

export function CheckboxButtonGroup() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [checkedItems, setCheckedItems] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    checkbox5: false,
    checkbox6: false
  });

  const handleCheckboxChange = (event) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked
    });
  };

  return (
    <Grid xs={12} sx={{ display: 'flex', flexDirection: isSmallScreen ? 'row' : 'column' }}>
      <Box display="flex">
        <Checkbox checked={checkedItems.checkbox1} onChange={handleCheckboxChange} name="checkbox1" />
        <InputLabel sx={{ marginTop: '7px' }}>Net IRR %</InputLabel>
      </Box>
      <Box display="flex">
        <Checkbox checked={checkedItems.checkbox2} onChange={handleCheckboxChange} name="checkbox2" />
        <InputLabel sx={{ marginTop: '7px' }}>MOlC</InputLabel>
      </Box>
      <Box display="flex">
        <Checkbox checked={checkedItems.checkbox3} onChange={handleCheckboxChange} name="checkbox3" />
        <InputLabel sx={{ marginTop: '7px' }}>PIC %</InputLabel>
      </Box>
      <Box display="flex">
        <Checkbox checked={checkedItems.checkbox4} onChange={handleCheckboxChange} name="checkbox4" />
        <InputLabel sx={{ marginTop: '7px' }}>ADI</InputLabel>
      </Box>
      <Box display="flex">
        <Checkbox checked={checkedItems.checkbox5} onChange={handleCheckboxChange} name="checkbox5" />
        <InputLabel sx={{ marginTop: '7px' }}>RVPI</InputLabel>
      </Box>
      <Box display="flex">
        <Checkbox checked={checkedItems.checkbox6} onChange={handleCheckboxChange} name="checkbox6" />
        <InputLabel sx={{ marginTop: '7px' }}>Invested Capital</InputLabel>
      </Box>
    </Grid>
  );
}
