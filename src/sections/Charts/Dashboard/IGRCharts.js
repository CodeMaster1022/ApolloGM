import { Grid, Stack, Box } from '@mui/material';
import DonutChart from './Individual/PieChart';
import Multiline from './Individual/Muiltiline';
import GDChart from './Individual/GDChart';

const GDdata = [
  { name: 'North America', value: 20, np: 11 },
  { name: 'Europe', value: 30, np: 15 },
  { name: 'Asia', value: 40, np: 29 },
  { name: 'South America', value: 10, np: 12 },
  { name: 'Australia', value: 30, np: 15 },
  { name: 'Africa', value: 30, np: 11 }
];
const labels = ['Total investment value', 'of Companies'];
export function IGRCharts() {
  return (
    <>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={5} lg={3} sx={{}}>
          <Stack spacing={2.5} sx={{ backgroundColor: 'white', borderRadius: '12px' }}>
            <DonutChart />
          </Stack>
        </Grid>
        <Grid item xs={12} md={7} lg={4}>
          <Stack spacing={2.5} sx={{ backgroundColor: 'white', borderRadius: '12px', padding: '10px' }}>
            <Box height="40vh">
              <GDChart data={GDdata} labels={labels} />
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={12} md={12} lg={5}>
          <Stack spacing={2.5} sx={{ backgroundColor: 'white', borderRadius: '12px', padding: '10px' }}>
            <Box height="40vh">
              <Multiline />
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}
