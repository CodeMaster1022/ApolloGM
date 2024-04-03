import { useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Box,
  // Button,
  Grid,
  // List,
  // ListItemButton,
  // ListItemText,
  MenuItem,
  // Select,
  Stack,
  TextField,
  // ToggleButton,
  // ToggleButtonGroup,
  Typography
} from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import IconButton from 'components/@extended/IconButton';
// import UsersCardChart from 'sections/dashboard/analytics/UsersCardChart';
// import OrdersCardChart from 'sections/dashboard/analytics/OrdersCardChart';
// import SalesCardChart from 'sections/dashboard/analytics/SalesCardChart';
// import MarketingCardChart from 'sections/dashboard/analytics/MarketingCardChart';
// import AnalyticsDataCard from 'components/cards/statistics/AnalyticsDataCard';

// import IncomeAreaChart from 'sections/dashboard/default/IncomeAreaChart';
// import MonthlyBarChart from 'sections/dashboard/default/MonthlyBarChart';

// import ReportChart from 'sections/dashboard/analytics/ReportChart';
import IncomeChart from 'sections/dashboard/analytics/IncomeChart';
import DoughnutChat from 'sections/dashboard/analytics/DoughnutChart';
import SalesChart from 'sections/dashboard/SalesChart';
// import AcquisitionChannels from 'sections/dashboard/analytics/AcquisitionChannels';
const status = [
  {
    value: 'today',
    label: 'Today'
  },
  {
    value: 'month',
    label: 'This Month'
  },
  {
    value: 'year',
    label: 'This Year'
  }
];
// assets
import { DownloadOutlined } from '@ant-design/icons';
// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = () => {
  const theme = useTheme();

  const [value, setValue] = useState('today');
  // const [slot, setSlot] = useState('week');
  // const [quantity, setQuantity] = useState('By volume');

  // const handleQuantity = (e) => {
  //   setQuantity(e.target.value);
  // };

  // const handleChange = (event, newAlignment) => {
  //   if (newAlignment) setSlot(newAlignment);
  // };

  return (
    <MainCard title="Sample Card">
      <Grid item xs={12} md={7} lg={5}>
        <MainCard content={false} sx={{ mt: 1.5 }}>
          <Grid item>
            <Grid container>
              <Grid item xs={12} sm={6}>
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                  justifyContent={{ xs: 'center', sm: 'flex-end' }}
                  sx={{ mt: 3, mr: 2 }}
                >
                  <IconButton
                    size="small"
                    sx={{
                      border: `1px solid ${theme.palette.grey[400]}`,
                      '&:hover': { backgroundColor: 'transparent' }
                    }}
                  >
                    <DownloadOutlined style={{ color: theme.palette.grey[900] }} />
                  </IconButton>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
          <Box sx={{ pt: 1 }}>
            <IncomeChart slot={slot} quantity={quantity} />
          </Box>
        </MainCard>
      </Grid>
      <Grid item xs={12} md={7} lg={8}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Sales Report</Typography>
          </Grid>
          <Grid item>
            <TextField
              id="standard-select-currency"
              size="small"
              select
              value={value}
              onChange={(e) => setValue(e.target.value)}
              sx={{ '& .MuiInputBase-input': { py: 0.75, fontSize: '0.875rem' } }}
            >
              {status.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
        <SalesChart />
      </Grid>
      <Grid>
        <DoughnutChat />
      </Grid>
    </MainCard>
  );
};

export default SamplePage;
