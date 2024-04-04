import { Grid, Stack } from '@mui/material';
import { GDChart } from './Individual/GDChart';
export function DFPChart() {
  return (
    <>
      <Grid container spacing={5} alignItems="center">
        <Grid item xs={12} lg={6}>
          <Stack spacing={2.5} sx={{ backgroundColor: 'white', borderRadius: '12px', padding: '10px' }}>
            <GDChart />
          </Stack>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Stack spacing={2.5} sx={{ backgroundColor: 'white', borderRadius: '12px', padding: '10px' }}>
            <GDChart />
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}
