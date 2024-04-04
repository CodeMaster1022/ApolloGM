import { Grid, Stack } from '@mui/material';
import PieChart from './Individual/PieChart';
import { MultilineChart } from './Individual/Muiltiline';
import { GDChart } from './Individual/GDChart';
export function IGRCharts() {
  return (
    <>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} md={6} lg={4}>
          <Stack spacing={2.5} sx={{ backgroundColor: 'white', borderRadius: '12px', padding: '10px' }}>
            <GDChart />
          </Stack>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Stack spacing={2.5} sx={{ backgroundColor: 'white', borderRadius: '12px', minHeight: '490px' }}>
            <PieChart />
          </Stack>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Stack spacing={2.5} sx={{ backgroundColor: 'white', borderRadius: '12px', padding: '10px' }}>
            <MultilineChart />
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}
