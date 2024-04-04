import { Grid, Stack } from '@mui/material';
import TreemapChart from './Individual/TreemapChart';
import ScatterChart from './Individual/ScatterChart';
export function PortChart() {
  return (
    <>
      <Grid container spacing={5} alignItems="center">
        <Grid item xs={12} lg={6}>
          <Stack spacing={2.5} sx={{ backgroundColor: 'white', borderRadius: '12px', padding: '10px' }}>
            <ScatterChart />
          </Stack>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Stack spacing={2.5} sx={{ backgroundColor: 'white', borderRadius: '12px', padding: '10px' }}>
            <TreemapChart />
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}
