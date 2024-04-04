import { TableFund } from 'pages/tables/mui-table/basic';
function PcreateData(A, B, C, D, E, F, G, status) {
  return { A, B, C, D, E, F, G, status };
}
const Fund_rows = [
  PcreateData('Apex Growth Fund', '$500M', 'Apex Ventures', ' $10M', '14%', '01/15/2022', '01/15/2027', true),
  PcreateData('Apex Growth Fund', '$500M', 'Apex Ventures', ' $10M', '14%', '01/15/2022', '01/15/2027', true),
  PcreateData('Apex Growth Fund', '$500M', 'Apex Ventures', ' $10M', '14%', '01/15/2022', '01/15/2027', true),
  PcreateData('Apex Growth Fund', '$500M', 'Apex Ventures', ' $10M', '14%', '01/15/2022', '01/15/2027', true),
  PcreateData('Apex Growth Fund', '$500M', 'Apex Ventures', ' $10M', '14%', '01/15/2022', '01/15/2027', true),
  PcreateData('Apex Growth Fund', '$500M', 'Apex Ventures', ' $10M', '14%', '01/15/2022', '01/15/2027', true),
  PcreateData('Apex Growth Fund', '$500M', 'Apex Ventures', ' $10M', '14%', '01/15/2022', '01/15/2027', true),
  PcreateData('Apex Growth Fund', '$500M', 'Apex Ventures', ' $10M', '14%', '01/15/2022', '01/15/2027', true),
  PcreateData('Apex Growth Fund', '$500M', 'Apex Ventures', ' $10M', '14%', '01/15/2022', '01/15/2027', true),
  PcreateData('Apex Growth Fund', '$500M', 'Apex Ventures', ' $10M', '14%', '01/15/2022', '01/15/2027', true),
  PcreateData('Apex Growth Fund', '$500M', 'Apex Ventures', ' $10M', '14%', '01/15/2022', '01/15/2027', true),
  PcreateData('Apex Growth Fund', '$500M', 'Apex Ventures', ' $10M', '14%', '01/15/2022', '01/15/2027', true),
  PcreateData('Apex Growth Fund', '$500M', 'Apex Ventures', ' $10M', '14%', '01/15/2022', '01/15/2027', true),
  PcreateData('Apex Growth Fund', '$500M', 'Apex Ventures', ' $10M', '14%', '01/15/2022', '01/15/2027', true),
  PcreateData('Apex Growth Fund', '$500M', 'Apex Ventures', ' $10M', '14%', '01/15/2022', '01/15/2027', true),
  PcreateData('Apex Growth Fund', '$500M', 'Apex Ventures', ' $10M', '14%', '01/15/2022', '01/15/2027', true)
];
const Funds = () => {
  return (
    <>
      <TableFund rows={Fund_rows} />
    </>
  );
};

export default Funds;
