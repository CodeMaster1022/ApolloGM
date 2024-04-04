import { Grid, Stack } from '@mui/material';
import { MultilineChart } from './Individual/Muiltiline';
import { FundPerformChart } from './Individual/FundPerform';
export function HFChart() {
  return (
    <>
      <Grid container spacing={5} alignItems="center">
        <Grid item xs={12} lg={6}>
          <Stack spacing={2.5} sx={{ backgroundColor: 'white', borderRadius: '12px', padding: '10px' }}>
            <MultilineChart />
          </Stack>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Stack spacing={2.5} sx={{ backgroundColor: 'white', borderRadius: '12px', padding: '10px' }}>
            <FundPerformChart />
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}
