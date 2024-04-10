import { TableFund } from 'pages/tables/FundTable';
import { FundViewDropdownButton } from 'components/FundButton';
import { Box } from '@mui/material';
function PcreateData(A, B, C, D, E, status) {
  return { A, B, C, D, E, status };
}
const Fund_rows = [
  PcreateData('GreenTech Growth Fund', '$150 Million', ' January 1, 2020', '25', 'John Doe', true),
  PcreateData('Apex Growth Fund', '$500M', 'Apex Ventures', ' $10M', '14%', '01/15/2022', true),
  PcreateData('GreenTech Growth Fund', '$150 Million', ' January 1, 2020', '25', 'John Doe', true),
  PcreateData('Apex Growth Fund', '$500M', 'Apex Ventures', ' $10M', '14%', '01/15/2022', true),
  PcreateData('GreenTech Growth Fund', '$150 Million', ' January 1, 2020', '25', 'John Doe', true),
  PcreateData('Apex Growth Fund', '$500M', 'Apex Ventures', ' $10M', '14%', '01/15/2022', true),
  PcreateData('GreenTech Growth Fund', '$150 Million', ' January 1, 2020', '25', 'John Doe', true),
  PcreateData('Apex Growth Fund', '$500M', 'Apex Ventures', ' $10M', '14%', '01/15/2022', true),
  PcreateData('GreenTech Growth Fund', '$150 Million', ' January 1, 2020', '25', 'John Doe', true),
  PcreateData('Apex Growth Fund', '$500M', 'Apex Ventures', ' $10M', '14%', '01/15/2022', true),
  PcreateData('GreenTech Growth Fund', '$150 Million', ' January 1, 2020', '25', 'John Doe', true),
  PcreateData('Apex Growth Fund', '$500M', 'Apex Ventures', ' $10M', '14%', '01/15/2022', true),
  PcreateData('GreenTech Growth Fund', '$150 Million', ' January 1, 2020', '25', 'John Doe', true),
  PcreateData('Apex Growth Fund', '$500M', 'Apex Ventures', ' $10M', '14%', '01/15/2022', true),
  PcreateData('GreenTech Growth Fund', '$150 Million', ' January 1, 2020', '25', 'John Doe', true),
  PcreateData('Apex Growth Fund', '$500M', 'Apex Ventures', ' $10M', '14%', '01/15/2022', true)
];
const IvenstFunds = () => {
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingX: '12px' }}>
        <h2>Funds</h2>
        <FundViewDropdownButton title="actions" />
      </Box>
      <TableFund rows={Fund_rows} />
    </>
  );
};

export default IvenstFunds;
