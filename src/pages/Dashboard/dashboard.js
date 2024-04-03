// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Grid, MenuItem, Stack, TextField, Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import IconButton from 'components/@extended/IconButton';
import IncomeChart from 'sections/dashboard/analytics/IncomeChart';
import DoughnutChat from 'sections/dashboard/analytics/DoughnutChart';
import SalesChart from 'sections/dashboard/SalesChart';

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

const Dashboard = () => {
  const theme = useTheme();

  const value = 'today';
  const slot = 'week';
  const quantity = 'By volume';
  // const [value, setValue] = useState('today');
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

export default Dashboard;
