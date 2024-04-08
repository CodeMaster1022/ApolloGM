/* eslint-disable react/prop-types */
import { FilteringTable } from 'pages/tables/react-table/filtering';
import MainCard from 'components/MainCard';
import ScrollX from 'components/ScrollX';
import Button from '@mui/material/Button';
import { useMemo } from 'react';
import { MoreHorizOutlined } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { DefaultColumnFilter, SelectColumnFilter, DateColumnFilter } from 'utils/react-table';
function PcreateData(A, B, C, D, E, F, G, status) {
  return { A, B, C, D, E, F, G, status };
}
const FundList = () => {
  const Fund_rows = useMemo(
    () => [
      PcreateData('Apex Growth Fund', '$500M', 'Apex Ventures', '$10M', '14%', '01/15/2022', '01/15/2022', true),
      PcreateData('Apex Growth Fund', '$500M', 'Apex Ventures', '$10M', '14%', '01/15/2022', '01/15/2022', true),
      PcreateData('Apex Growth Fund', '$500M', 'Apex Ventures', '$10M', '14%', '01/15/2022', '01/15/2022', true),
      PcreateData('Apex Growth Fund', '$500M', 'Apex Ventures', '$10M', '14%', '01/15/2022', '01/15/2022', true),
      PcreateData('Apex Growth Fund', '$500M', 'Apex Ventures', '$10M', '14%', '01/15/2022', '01/15/2022', true),
      PcreateData('Apex Growth Fund', '$500M', 'Apex Ventures', '$10M', '14%', '01/15/2022', '01/15/2022', true),
      PcreateData('Apex Growth Fund', '$500M', 'Apex Ventures', '$10M', '14%', '01/15/2022', '01/15/2022', true),
      PcreateData('Apex Growth Fund', '$500M', 'Apex Ventures', '$10M', '14%', '01/15/2022', '01/15/2022', true),
      PcreateData('Apex Growth Fund', '$500M', 'Apex Ventures', '$10M', '14%', '01/15/2022', '01/15/2022', true),
      PcreateData('Apex Growth Fund', '$500M', 'Apex Ventures', '$10M', '14%', '01/15/2022', '01/15/2022', true),
      PcreateData('Apex Growth Fund', '$500M', 'Apex Ventures', '$10M', '14%', '01/15/2022', '01/15/2022', true),
      PcreateData('Apex Growth Fund', '$500M', 'Apex Ventures', '$10M', '14%', '01/15/2022', '01/15/2022', true),
      PcreateData('Apex Growth Fund', '$500M', 'Apex Ventures', '$10M', '14%', '01/15/2022', '01/15/2022', true),
      PcreateData('Apex Growth Fund', '$500M', 'Apex Ventures', '$10M', '14%', '01/15/2022', '01/15/2022', true),
      PcreateData('Apex Growth Fund', '$500M', 'Apex Ventures', '$10M', '14%', '01/15/2022', '01/15/2022', true),
      PcreateData('Apex Growth Fund', '$500M', 'Apex Ventures', '$10M', '14%', '01/15/2022', '01/15/2022', true)
    ],
    []
  );
  const columns = useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'A',
        DefaultColumnFilter,
        Filter: SelectColumnFilter,
        Cell: ({ row }) => (
          <Link to={`/funds/fund-view`}>
            <Typography sx={{ color: (theme) => (theme.palette.mode === 'dark' ? 'white' : '#008080'), borderRadius: '5px' }}>
              {row.original.A}
            </Typography>
          </Link>
        )
      },
      {
        Header: 'Size',
        accessor: 'B'
      },
      {
        Header: 'GP Name',
        accessor: 'C'
      },
      {
        Header: 'Invest Amount',
        accessor: 'D'
      },
      {
        Header: 'Net IRR',
        accessor: 'E'
      },
      {
        Header: 'Investment Date',
        accessor: 'F',
        Filter: DateColumnFilter,
        filter: 'includes'
      },
      {
        Header: 'Maturity Date',
        accessor: 'G',
        Filter: DateColumnFilter,
        filter: 'includes'
      },
      {
        Header: 'Action',
        accessor: 'status',
        disableFilters: true,
        Cell: () => (
          <Button>
            <MoreHorizOutlined />
          </Button>
        )
      }
      // {
      //   Header: 'Age',
      //   accessor: 'age',
      //   className: 'cell-right',
      //   Filter: SliderColumnFilter,
      //   filter: 'equals'
      // },
      // {
      //   Header: 'Visits',
      //   accessor: 'visits',
      //   className: 'cell-right',
      //   Filter: NumberRangeColumnFilter,
      //   filter: 'between'
      // },
      // {
      //   Header: 'Status',
      //   accessor: 'status',
      //   Filter: SelectColumnFilter,
      //   filter: 'includes',
      //   Cell: StatusCell
      // },
      // {
      //   Header: 'Profile Progress',
      //   accessor: 'progress',
      //   Filter: SliderColumnFilter,
      //   filter: filterGreaterThan,
      //   Cell: CellProgress
      // }
    ],
    []
  );

  return (
    <MainCard content={false}>
      <ScrollX>
        <FilteringTable columns={columns} data={Fund_rows} />
      </ScrollX>
    </MainCard>
  );
};

export default FundList;
