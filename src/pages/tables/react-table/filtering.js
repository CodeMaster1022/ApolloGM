import PropTypes from 'prop-types';
import { useMemo } from 'react';

// material-ui
import { Chip, Table, TableBody, TableCell, TableHead, TableRow, Box } from '@mui/material';
import Select from '@mui/material/Select';
// third-party
import { useTable, useFilters, useGlobalFilter, usePagination } from 'react-table';
import MenuItem from '@mui/material/MenuItem';
import IconButton from 'components/@extended/IconButton';
// project import
import LinearWithLabel from 'components/@extended/progress/LinearWithLabel';
import { DefaultColumnFilter, renderFilterTypes } from 'utils/react-table';
import { ArrowBackIosOutlined, ArrowBack, ArrowForward, ArrowForwardIosOutlined } from '@mui/icons-material';

// ==============================|| REACT TABLE ||============================== //

// Status
export function StatusCell({ value }) {
  switch (value) {
    case 'Complicated':
      return <Chip color="error" label="Complicated" size="small" variant="light" />;
    case 'Relationship':
      return <Chip color="success" label="Relationship" size="small" variant="light" />;
    case 'Single':
    default:
      return <Chip color="info" label="Single" size="small" variant="light" />;
  }
}

StatusCell.propTypes = {
  value: PropTypes.string
};
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

export default FilteringTable;
