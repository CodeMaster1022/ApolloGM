import { TableInvest } from 'pages/tables/FundTable';
function PcreateData(A, B, C, D, E, F, G, status) {
  return { A, B, C, D, E, F, G, status };
}
const Invest_rows = [
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
const Invest = () => {
  return (
    <>
      <TableInvest rows={Invest_rows} />
    </>
  );
};

export default Invest;
