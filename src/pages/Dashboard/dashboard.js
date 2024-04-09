// material-ui
import { HFChart } from 'sections/Charts/Dashboard/Two-Col';
import { IGRCharts } from 'sections/Charts/Dashboard/IGRCharts';
import { Typography, Box } from '@mui/material';
import { DFPChart } from 'sections/Charts/Dashboard/DFPCharts';
import { PortChart } from 'sections/Charts/Dashboard/PortoCharts';
// project import
import MainCard from 'components/MainCard';

// assets
// import { DownloadOutlined } from '@ant-design/icons';
// ==============================|| SAMPLE PAGE ||============================== //

const Dashboard = () => {
  return (
    <MainCard title="" sx={{ bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#000000' : '#E5F2F2') }}>
      <Box sx={{ backgroundColor: 'white', padding: '10px', borderRadius: '10px' }}>
        <HFChart />
      </Box>
      <Typography fontSize="20px" sx={{ padding: '20px' }}>
        Portfolio Company Metrics
      </Typography>
      <Box sx={{ backgroundColor: 'white', padding: '10px', borderRadius: '10px' }}>
        <IGRCharts />
      </Box>
      <Typography fontSize="20px" sx={{ padding: '20px' }}>
        Deal Flow and Pipeline
      </Typography>
      <DFPChart />
      <Typography fontSize="20px" sx={{ padding: '20px' }}>
        Portfolio Analysis
      </Typography>
      <PortChart />
    </MainCard>
  );
};

export default Dashboard;
