import { Grid, Stack, Box } from '@mui/material';
import GDChart from './Individual/GDChart';

const Flowdata = [
  { name: 'Prospecting', value: 20, np: 11 },
  { name: 'Initial Contact', value: 30, np: 15 },
  { name: 'Due Diligence', value: 40, np: 29 },
  { name: 'Negotiation', value: 10, np: 12 },
  { name: 'Closing', value: 30, np: 15 }
];
const FlowLabels = ['Stage of Investment', 'of Deals'];
const PipelineData = [
  { name: 'Prospecting', value: 20, np: 11 },
  { name: 'Initial Contact', value: 30, np: 15 },
  { name: 'Due Diligence', value: 40, np: 29 },
  { name: 'Negotiation', value: 10, np: 12 },
  { name: 'Closing', value: 30, np: 15 }
];
const PipLabels = ['Stage of Deal Process,', 'Value of Deals ($M)'];
export function DFPChart() {
  return (
    <>
      <Grid container spacing={5} alignItems="center">
        <Grid item xs={12} lg={6}>
          <Stack spacing={2.5} sx={{ backgroundColor: 'white', borderRadius: '12px', padding: '10px' }}>
            <Box height="40vh">
              <GDChart data={Flowdata} labels={FlowLabels} />
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Stack spacing={2.5} sx={{ backgroundColor: 'white', borderRadius: '12px', padding: '10px' }}>
            <Box height="40vh">
              <GDChart data={PipelineData} labels={PipLabels} />
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}
