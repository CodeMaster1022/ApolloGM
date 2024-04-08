import { TableFund } from 'pages/tables/FundTable';

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
const Funds = () => {
  return (
    <>
      <TableFund rows={Fund_rows} />
    </>
  );
};

export default Funds;
