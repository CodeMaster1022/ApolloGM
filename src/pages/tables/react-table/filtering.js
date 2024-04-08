import PropTypes from 'prop-types';
import { useMemo } from 'react';

// material-ui
import { Chip, Table, TableBody, TableCell, TableHead, TableRow, Box, Stack } from '@mui/material';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
// third-party
import { useTable, useFilters, useGlobalFilter, usePagination } from 'react-table';
import MenuItem from '@mui/material/MenuItem';
import IconButton from 'components/@extended/IconButton';
// project import
import MainCard from 'components/MainCard';
import ScrollX from 'components/ScrollX';
import LinearWithLabel from 'components/@extended/progress/LinearWithLabel';
import {
  GlobalFilter,
  DefaultColumnFilter,
  SelectColumnFilter,
  SliderColumnFilter,
  NumberRangeColumnFilter,
  renderFilterTypes,
  filterGreaterThan
} from 'utils/react-table';
import { MoreHorizOutlined } from '@mui/icons-material';
import { ArrowBackIosOutlined, ArrowBack, ArrowForward, ArrowForwardIosOutlined } from '@mui/icons-material';
// ==============================|| REACT TABLE ||============================== //

// function ReactTable({ columns, data }) {
//   const filterTypes = useMemo(() => renderFilterTypes, []);
//   const defaultColumn = useMemo(() => ({ Filter: DefaultColumnFilter }), []);
//   const initialState = useMemo(() => ({ filters: [{ id: 'status', value: '' }] }), []);

//   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, state, preGlobalFilteredRows, setGlobalFilter } = useTable(
//     {
//       columns,
//       data,
//       defaultColumn,
//       initialState,
//       filterTypes
//     },
//     useGlobalFilter,
//     useFilters
//   );

//   const sortingRow = rows.slice(0, 10);

//   return (
//     <>
//       <Table {...getTableProps()}>
//         <TableHead sx={{ borderTopWidth: 2 }}>
//           {headerGroups.map((headerGroup, i) => (
//             <TableRow key={i} {...headerGroup.getHeaderGroupProps()}>
//               {headerGroup.headers.map((column, index) => (
//                 <TableCell key={index} {...column.getHeaderProps([{ className: column.className }])}>
//                   {column.render('Header')}
//                 </TableCell>
//               ))}
//             </TableRow>
//           ))}
//         </TableHead>
//         <TableBody {...getTableBodyProps()}>
//           {headerGroups.map((group, i) => (
//             <TableRow key={i} {...group.getHeaderGroupProps()}>
//               {group.headers.map((column, index) => (
//                 <TableCell key={index} {...column.getHeaderProps([{ className: column.className }])}>
//                   {column.canFilter ? column.render('Filter') : null}
//                 </TableCell>
//               ))}
//             </TableRow>
//           ))}
//           {sortingRow.length > 0 ? (
//             sortingRow.map((row, i) => {
//               prepareRow(row);
//               return (
//                 <TableRow key={i} {...row.getRowProps()}>
//                   {row.cells.map((cell, index) => (
//                     <TableCell key={index} {...cell.getCellProps([{ className: cell.column.className }])}>
//                       {cell.render('Cell')}
//                     </TableCell>
//                   ))}
//                 </TableRow>
//               );
//             })
//           ) : (
//             <EmptyTable msg="No Data" colSpan={7} />
//           )}
//         </TableBody>
//       </Table>
//     </>
//   );
// }

// ReactTable.propTypes = {
//   columns: PropTypes.array,
//   data: PropTypes.array
// };
export function FilteringTable({ columns, data }) {
  const filterTypes = useMemo(() => renderFilterTypes, []);
  const defaultColumn = useMemo(() => ({ Filter: DefaultColumnFilter }), []);
  const initialState = useMemo(() => ({ filters: [{ id: 'status', value: '' }], pageIndex: 0, pageSize: 10 }), []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state,
    gotoPage,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageCount,
    setPageSize
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      initialState,
      filterTypes,
      autoResetPage: false
    },
    useGlobalFilter,
    useFilters,
    usePagination
  );

  return (
    <>
      {/* Table content */}
      <Table {...getTableProps()}>
        {/* Table header */}
        <TableHead>
          {headerGroups.map((headerGroup) => (
            <TableRow key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <TableCell key={column.id} {...column.getHeaderProps()}>
                  {column.render('Header')}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        {/* Table body */}
        <TableBody {...getTableBodyProps()}>
          {headerGroups.map((group, i) => (
            <TableRow key={i} {...group.getHeaderGroupProps()}>
              {group.headers.map((column, index) => (
                <TableCell key={index} {...column.getHeaderProps([{ className: column.className }])}>
                  {column.canFilter ? column.render('Filter') : null}
                </TableCell>
              ))}
            </TableRow>
          ))}
          {page.map((row) => {
            prepareRow(row);
            return (
              <TableRow key={row.id} {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <TableCell key={cell.id} {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </TableCell>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      {/* Pagination controls */}
      <Box display="flex" flexDirection="row-reverse" padding={2}>
        <div>
          <IconButton onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            <ArrowBackIosOutlined fontSize="12px" />
          </IconButton>
          <IconButton onClick={previousPage} disabled={!canPreviousPage}>
            <ArrowBack fontSize="14px" />
          </IconButton>
          <IconButton onClick={nextPage} disabled={!canNextPage}>
            <ArrowForward fontSize="14px" />
          </IconButton>
          <IconButton onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
            <ArrowForwardIosOutlined fontSize="12px" />
          </IconButton>
          <span>
            Page
            <strong>
              {state.pageIndex + 1} of {pageCount}{' '}
            </strong>
          </span>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={state.pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
            placeholder="Contact"
            sx={{ height: '30px', borderRadius: '5px' }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <MenuItem key={pageSize} value={pageSize}>
                Show {pageSize}
              </MenuItem>
            ))}
          </Select>
        </div>
      </Box>
    </>
  );
}

FilteringTable.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array
};

// ==============================|| REACT TABLE - FILTERING ||============================== //

// Progress
const CellProgress = ({ value }) => <LinearWithLabel value={value} sx={{ minWidth: 75 }} />;

CellProgress.propTypes = {
  value: PropTypes.number
};

// Status
const StatusCell = ({ value }) => {
  switch (value) {
    case 'Complicated':
      return <Chip color="error" label="Complicated" size="small" variant="light" />;
    case 'Relationship':
      return <Chip color="success" label="Relationship" size="small" variant="light" />;
    case 'Single':
    default:
      return <Chip color="info" label="Single" size="small" variant="light" />;
  }
};

StatusCell.propTypes = {
  value: PropTypes.string
};
// function PcreateData(A, B, C, D, E, F, status) {
//   return { A, B, C, D, E, F, status };
// }

// const FilteringTable = () => {
//   const Fund_rows = useMemo(
//     () => [
//       PcreateData('Apex Growth Fund', '$500M', 'Apex Ventures', ' $10M', '14%', '01/15/2022', true),
//       PcreateData('Apex Growth Fund', '$500M', 'Apex Ventures', ' $10M', '14%', '01/15/2022', true),
//       PcreateData('Apex Growth Fund', '$500M', 'Apex Ventures', ' $10M', '14%', '01/15/2022', true),
//       PcreateData('Apex Growth Fund', '$500M', 'Apex Ventures', ' $10M', '14%', '01/15/2022', true),
//       PcreateData('Apex Growth Fund', '$500M', 'Apex Ventures', ' $10M', '14%', '01/15/2022', true),
//       PcreateData('Apex Growth Fund', '$500M', 'Apex Ventures', ' $10M', '14%', '01/15/2022', true),
//       PcreateData('Apex Growth Fund', '$500M', 'Apex Ventures', ' $10M', '14%', '01/15/2022', true),
//       PcreateData('Apex Growth Fund', '$500M', 'Apex Ventures', ' $10M', '14%', '01/15/2022', true),
//       PcreateData('Apex Growth Fund', '$500M', 'Apex Ventures', ' $10M', '14%', '01/15/2022', true),
//       PcreateData('Apex Growth Fund', '$500M', 'Apex Ventures', ' $10M', '14%', '01/15/2022', true),
//       PcreateData('Apex Growth Fund', '$500M', 'Apex Ventures', ' $10M', '14%', '01/15/2022', true),
//       PcreateData('Apex Growth Fund', '$500M', 'Apex Ventures', ' $10M', '14%', '01/15/2022', true),
//       PcreateData('Apex Growth Fund', '$500M', 'Apex Ventures', ' $10M', '14%', '01/15/2022', true),
//       PcreateData('Apex Growth Fund', '$500M', 'Apex Ventures', ' $10M', '14%', '01/15/2022', true),
//       PcreateData('Apex Growth Fund', '$500M', 'Apex Ventures', ' $10M', '14%', '01/15/2022', true),
//       PcreateData('Apex Growth Fund', '$500M', 'Apex Ventures', ' $10M', '14%', '01/15/2022', true),
//       PcreateData('Apex Growth Fund', '$500M', 'Apex Ventures', ' $10M', '14%', '01/15/2022', true),
//       PcreateData('Apex Growth Fund', '$500M', 'Apex Ventures', ' $10M', '14%', '01/15/2022', true),
//       PcreateData('Apex Growth Fund', '$500M', 'Apex Ventures', ' $10M', '14%', '01/15/2022', true),
//       PcreateData('Apex Growth Fund', '$500M', 'Apex Ventures', ' $10M', '14%', '01/15/2022', true),
//       PcreateData('Apex Growth Fund', '$500M', 'Apex Ventures', ' $10M', '14%', '01/15/2022', true)
//     ],
//     []
//   );
//   const columns = useMemo(
//     () => [
//       {
//         Header: 'Name',
//         accessor: 'A'
//       },
//       {
//         Header: 'GP Name',
//         accessor: 'B'
//       },
//       {
//         Header: 'Size',
//         accessor: 'C'
//       },
//       {
//         Header: 'Net IRR',
//         accessor: 'D'
//       },
//       {
//         Header: 'Investment Date',
//         accessor: 'E'
//       },
//       {
//         Header: 'Maturity Date',
//         accessor: 'F'
//       },
//       {
//         Header: 'Action',
//         accessor: 'status',
//         disableFilters: true,
//         Cell: ({ row }) => (
//           <Button>
//             <MoreHorizOutlined />
//           </Button>
//         )
//       }
//       // {
//       //   Header: 'Age',
//       //   accessor: 'age',
//       //   className: 'cell-right',
//       //   Filter: SliderColumnFilter,
//       //   filter: 'equals'
//       // },
//       // {
//       //   Header: 'Visits',
//       //   accessor: 'visits',
//       //   className: 'cell-right',
//       //   Filter: NumberRangeColumnFilter,
//       //   filter: 'between'
//       // },
//       // {
//       //   Header: 'Status',
//       //   accessor: 'status',
//       //   Filter: SelectColumnFilter,
//       //   filter: 'includes',
//       //   Cell: StatusCell
//       // },
//       // {
//       //   Header: 'Profile Progress',
//       //   accessor: 'progress',
//       //   Filter: SliderColumnFilter,
//       //   filter: filterGreaterThan,
//       //   Cell: CellProgress
//       // }
//     ],
//     []
//   );

//   return (
//     <MainCard content={false}>
//       <ScrollX>
//         <ReactTable columns={columns} data={Fund_rows} />
//       </ScrollX>
//     </MainCard>
//   );
// };

export default FilteringTable;
