// material-ui
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import LinearWithLabel from 'components/@extended/progress/LinearWithLabel';
import MenuItem from '@mui/material/MenuItem';
import pings from 'assets/images/icons/pings.svg';
import circle from 'assets/images/icons/circle.svg';
import { EditOutlined } from '@mui/icons-material';
import Select from '@mui/material/Select';
import ActiveIcon from 'assets/images/icons/ButtonState/Active.svg';
import InactiveIcon from 'assets/images/icons/ButtonState/Inactive.svg';
import DraftIcon from 'assets/images/icons/ButtonState/Draft.svg';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
export const header = [
  { label: 'Capital Call ID', key: 'ID' },
  { label: 'Date Issued', key: 'Issued' },
  { label: 'Due Date', key: 'Due' },
  { label: 'Total Amount Called', key: 'Called' },
  { label: 'Purpose', key: 'Purpose' },
  { label: 'Notices Sent', key: 'Notices Sent' },
  { label: 'Status', key: 'Status' }
];
const columns = [
  { id: 'ID', label: 'Capital Call ID', minWidth: 50 },
  { id: 'Issued', label: 'Date Issued', minWidth: 50 },
  { id: 'Due', label: 'Due Date', minWidth: 80 },
  { id: 'Called', label: 'Total Amount Called', minWidth: 80 },
  { id: 'Purpose', label: 'Purpose', minWidth: 100 },
  { id: 'Notices', label: 'Notices Sent', minWidth: 100 },
  { id: 'Status', label: 'Status', minWidth: 100 }
];
const columns_Doc = [
  { id: 'Title', label: 'Title', minWidth: 170 },
  { id: 'Date', label: 'Date', minWidth: 100 },
  { id: 'Document', label: 'Document Type', minWidth: 100 },
  { id: 'Access', label: 'Access', minWidth: 100 },
  { id: 'Description', label: 'Description', minWidth: 100 }
];
const columns_Bench = [
  { id: 'Index', label: 'Index', minWidth: 100 },
  { id: '6 Mo', label: '6 Mo', minWidth: 100 },
  { id: '6 Mo', label: '6 Mo', minWidth: 100 },
  { id: '1Yr', label: '1Yr', minWidth: 100 },
  { id: '3 Yr', label: '3 Yr', minWidth: 100 },
  { id: 'Result', label: 'Result', minWidth: 100 }
];
const columns_Porto = [
  { id: 'Portfolio Company', label: 'Portfolio Company', minWidth: 100 },
  { id: 'Acquired On', label: '6 Mo', minWidth: 100 },
  { id: 'Currency', label: '6 Mo', minWidth: 100 },
  { id: 'Investment', label: '1Yr', minWidth: 100 },
  { id: 'Industry', label: '3 Yr', minWidth: 100 },
  { id: 'Country', label: 'Result', minWidth: 100 },
  { id: 'Status', label: 'Status', minWidth: 100 }
];
const columns_Fund = [
  { id: 'A', label: 'Name', minWidth: 100 },
  { id: 'B', label: 'Size', minWidth: 100 },
  { id: 'C', label: 'Incep date', minWidth: 100 },
  { id: 'D', label: '25 of Investment', minWidth: 100 },
  { id: 'E', label: 'Fund manager', minWidth: 100 },
  { id: 'F', label: 'Status', minWidth: 100 },
  { id: 'Status', label: 'Action', minWidth: 100 }
];
const columns_Invest = [
  { id: 'name', label: 'Name', minWidth: 100 },
  { id: 'type', label: 'Type', minWidth: 100 },
  { id: 'amount', label: 'Committed amount', minWidth: 100 },
  { id: 'cap', label: 'Capital paid-In', minWidth: 100 },
  { id: 'unfund', label: 'Unfunded Commitment', minWidth: 100 },
  { id: 'contact', label: 'Contact', minWidth: 100 }
];
const columns_List = [
  { id: 'A', label: 'Name', minWidth: 100 },
  { id: 'B', label: 'Size', minWidth: 100 },
  { id: 'C', label: 'GP Name', minWidth: 100 },
  { id: 'D', label: 'Investment Amount', minWidth: 100 },
  { id: 'E', label: 'Net IRR', minWidth: 100 },
  { id: 'F', label: 'Investment Date', minWidth: 100 },
  { id: 'G', label: 'Maturity Date', minWidth: 100 },
  { id: 'Status', label: 'Action', minWidth: 100 }
];
export function TableFunds({ rows }) {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 350 }} aria-label="simple table">
        <TableBody>
          {rows.map((row) => (
            <TableRow hover key={row.name}>
              <TableCell sx={{ pl: 3, pr: 3, fontSize: '14px', fontWeight: 'bold' }} component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left" sx={{ pl: 3, pr: 3, fontSize: '12px' }}>
                {row.content}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export function TableCap({ rows }) {
  const classes = useStyles();
  const theme = useTheme();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event?.target?.value);
    setPage(0);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  return (
    <>
      <TableContainer sx={{ maxHeight: 430, marginTop: '40px' }}>
        <Table sx={{ minWidth: 350, width: '100%' }} stickyHeader aria-label="sticky table">
          <TableHead
            sx={{
              '& th': {
                borderTop: `1px solid ${theme.palette.divider}`,
                borderBottom: `2px solid ${theme.palette.divider} !important`
              }
            }}
          >
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  sx={{ minWidth: column.minWidth, position: 'sticky !important', fontWeight: 'bold' }}
                  key={column.id}
                  align={column.align}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody sx={{ color: (theme) => (theme.palette.mode === 'dark' ? '#008080' : 'white'), borderRadius: '5px' }}>
            {/* <MainCard content={false} > */}
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <TableRow hover key={row.name}>
                <TableCell align="left" className={classes.styledcell}>
                  {row.name}
                </TableCell>
                <TableCell align="left" className={classes.styledcell}>
                  {row.Issued}
                </TableCell>
                <TableCell align="left" className={classes.styledcell}>
                  {row.CDate}
                </TableCell>
                <TableCell align="left" className={classes.styledcell}>
                  {row.Amount}
                </TableCell>
                <TableCell align="left" className={classes.styledcell}>
                  {row.Purpose}
                </TableCell>
                <TableCell align="left" className={classes.styledcell}>
                  {row.Sent}
                </TableCell>
                <TableCell align="left" className={classes.styledcell}>
                  {row.Status}
                </TableCell>
              </TableRow>
            ))}
            {/* </MainCard> */}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
}
export function TableInvest({ rows }) {
  const classes = useStyles();
  const theme = useTheme();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event?.target?.value);
    setPage(0);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  return (
    <>
      <TableContainer sx={{ maxHeight: 430, marginTop: '40px' }}>
        <Table sx={{ minWidth: 350, width: '100%' }} stickyHeader aria-label="sticky table">
          <TableHead
            sx={{
              '& th': {
                borderTop: `1px solid ${theme.palette.divider}`,
                borderBottom: `2px solid ${theme.palette.divider} !important`
              }
            }}
          >
            <TableRow>
              {columns_Invest.map((column) => (
                <TableCell
                  sx={{ minWidth: column.minWidth, position: 'sticky !important', fontWeight: 'bold' }}
                  key={column.id}
                  align={column.align}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody sx={{ color: (theme) => (theme.palette.mode === 'dark' ? '#008080' : 'white'), borderRadius: '5px' }}>
            {/* <MainCard content={false} > */}
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <TableRow hover key={row.name}>
                <TableCell align="left" className={classes.styledcell}>
                  {row.name}
                </TableCell>
                <TableCell align="left" className={classes.styledcell}>
                  {row.type}
                </TableCell>
                <TableCell align="left" className={classes.styledcell}>
                  {row.amount}
                </TableCell>
                <TableCell align="left" className={classes.styledcell}>
                  {row.cap}
                </TableCell>
                <TableCell align="left" className={classes.styledcell}>
                  {row.unfund}
                </TableCell>
                <TableCell align="left" className={classes.styledcell}>
                  {row.contact}
                </TableCell>
              </TableRow>
            ))}
            {/* </MainCard> */}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
}

export function TableDocument({ rows }) {
  const classes = useStyles();
  const theme = useTheme();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event?.target?.value);
    setPage(0);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  return (
    <>
      <TableContainer sx={{ maxHeight: 430, marginTop: '40px' }}>
        <Table sx={{ minWidth: 350, width: '100%' }} stickyHeader aria-label="sticky table">
          <TableHead
            sx={{
              '& th': {
                borderTop: `1px solid ${theme.palette.divider}`,
                borderBottom: `2px solid ${theme.palette.divider} !important`
              }
            }}
          >
            <TableRow>
              {columns_Doc.map((column) => (
                <TableCell
                  sx={{ minWidth: column.minWidth, position: 'sticky !important', fontWeight: 'bold' }}
                  key={column.id}
                  align={column.align}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody sx={{ color: (theme) => (theme.palette.mode === 'dark' ? '#008080' : 'white'), borderRadius: '5px' }}>
            {/* <MainCard content={false} > */}
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <TableRow hover key={row.name}>
                <TableCell align="left" className={classes.styledcell}>
                  {row.Title}
                </TableCell>
                <TableCell align="left" className={classes.styledcell}>
                  {row.Date}
                </TableCell>
                <TableCell align="left" className={classes.styledcell}>
                  {row.Document}
                </TableCell>
                <TableCell align="left" className={classes.styledcell}>
                  {row.Access}
                </TableCell>
                <TableCell align="left" className={classes.styledcell}>
                  {row.Description}
                </TableCell>
              </TableRow>
            ))}
            {/* </MainCard> */}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
}

export function TableBench({ rows }) {
  const classes = useStyles();
  const theme = useTheme();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event?.target?.value);
    setPage(0);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  return (
    <>
      <TableContainer sx={{ maxHeight: 430, marginTop: '40px' }}>
        <Table sx={{ minWidth: 350, width: '100%' }} stickyHeader aria-label="sticky table">
          <TableHead
            sx={{
              '& th': {
                borderTop: `1px solid ${theme.palette.divider}`,
                borderBottom: `2px solid ${theme.palette.divider} !important`
              }
            }}
          >
            <TableRow>
              {columns_Bench.map((column) => (
                <TableCell
                  sx={{ minWidth: column.minWidth, position: 'sticky !important', fontWeight: 'bold' }}
                  key={column.id}
                  align={column.align}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody sx={{ color: (theme) => (theme.palette.mode === 'dark' ? '#008080' : 'white'), borderRadius: '5px' }}>
            {/* <MainCard content={false} > */}
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <TableRow hover key={row.name}>
                <TableCell align="left" className={classes.styledcell}>
                  {row.Index}
                </TableCell>
                <TableCell align="left" className={classes.styledcell}>
                  {row.Mo}
                </TableCell>
                <TableCell align="left" className={classes.styledcell}>
                  {row.TMo}
                </TableCell>
                <TableCell align="left" className={classes.styledcell}>
                  {row.OYr}
                </TableCell>
                <TableCell align="left" sx={{ pl: 2, pr: 2, fontSize: '12px' }}>
                  {row.TYr}
                </TableCell>
                <TableCell align="left" sx={{ pl: 2, pr: 2, fontSize: '12px' }}>
                  <LinearWithLabel value={row.Result} color="info" sx={{ height: 12 }} />
                </TableCell>
              </TableRow>
            ))}
            {/* </MainCard> */}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
}

export function TablePorto({ rows }) {
  const classes = useStyles();
  const theme = useTheme();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event?.target?.value);
    setPage(0);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  return (
    <>
      <TableContainer sx={{ maxHeight: 630, marginTop: '40px' }}>
        <Table sx={{ minWidth: 350, width: '100%' }} stickyHeader aria-label="sticky table">
          <TableHead
            sx={{
              '& th': {
                borderTop: `1px solid ${theme.palette.divider}`,
                borderBottom: `2px solid ${theme.palette.divider} !important`
              }
            }}
          >
            <TableRow>
              {columns_Porto.map((column) => (
                <TableCell
                  sx={{ minWidth: column.minWidth, position: 'sticky !important', fontWeight: 'bold' }}
                  key={column.id}
                  align={column.align}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody sx={{ color: (theme) => (theme.palette.mode === 'dark' ? '#008080' : 'white'), borderRadius: '5px' }}>
            {/* <MainCard content={false} > */}
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <TableRow hover key={row.name}>
                <TableCell align="left" className={classes.styledcell}>
                  {row.company}
                </TableCell>
                <TableCell align="left" className={classes.styledcell}>
                  {row.on}
                </TableCell>
                <TableCell align="left" className={classes.styledcell}>
                  {row.currency}
                </TableCell>
                <TableCell align="left" className={classes.styledcell}>
                  {row.invest}
                </TableCell>
                <TableCell align="left" className={classes.styeledcell}>
                  {row.industry}
                </TableCell>
                <TableCell align="left" className={classes.styeledcell}>
                  {row.country}
                </TableCell>
                <TableCell align="left" sx={{ pl: 2, pr: 2, fontSize: '12px' }}>
                  {row.status == true ? (
                    <>
                      <Button variant="contained" color="secondary" sx={{ borderRadius: '12px' }}>
                        <img src={circle} alt="This" />
                        &nbsp;Active
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button variant="dashed" color="secondary" sx={{ borderRadius: '12px' }}>
                        <image src={circle} alt="this" />
                        Disable
                      </Button>
                    </>
                  )}
                </TableCell>
              </TableRow>
            ))}
            {/* </MainCard> */}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
}
export function TableFundList({ rows }) {
  const classes = useStyles();
  const theme = useTheme();
  const [filtername, setFilter] = useState(null);
  const handlefilter = (columnName) => {
    setFilter(columnName);
  };

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event?.target?.value);
    setPage(0);
  };
  const filterData = rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <>
      <TableContainer sx={{ maxHeight: 630, marginTop: '40px' }}>
        <Table sx={{ minWidth: 350, width: '100%' }} stickyHeader aria-label="sticky table">
          <TableHead
            sx={{
              '& th': {
                borderTop: `1px solid ${theme.palette.divider}`,
                borderBottom: `2px solid ${theme.palette.divider} !important`
              }
            }}
          >
            <TableRow>
              {columns_List.map((column) => (
                <TableCell
                  sx={{ minWidth: column.minWidth, position: 'sticky !important', fontWeight: 'bold' }}
                  key={column.id}
                  align={column.align}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableHead
            sx={{
              '& th': {
                borderTop: `1px solid ${theme.palette.divider}`,
                borderBottom: `2px solid ${theme.palette.divider} !important`
              }
            }}
          >
            <TableRow>
              <TableCell align="left" className={classes.styledcell}>
                <Button className={classes.styleIVButton} onClick={() => handlefilter('Apex Grow')}>
                  <img src={pings} alt="Description" />
                  Apex Grow...
                </Button>
              </TableCell>
              <TableCell align="left" className={classes.styledcell}>
                <Button className={classes.styleIVButton}>
                  <img src={pings} alt="Description" />
                </Button>
              </TableCell>
              <TableCell align="left" className={classes.styledcell}>
                <Button className={classes.styleIVButton}>
                  <img src={pings} alt="Description" />
                </Button>
              </TableCell>
              <TableCell align="left" className={classes.styledcell}>
                <Button className={classes.styleIVButton}>
                  <img src={pings} alt="Description" />
                </Button>
              </TableCell>
              <TableCell align="left" className={classes.styledcell}>
                <Button className={classes.styleIVButton}>
                  <img src={pings} alt="Description" />
                </Button>
              </TableCell>
              <TableCell align="left" className={classes.styledcell}>
                <Button className={classes.styleIVButton}>
                  <img src={pings} alt="Description" />
                </Button>
              </TableCell>
              <TableCell align="left" className={classes.styledcell}>
                <Button className={classes.styleIVButton}>
                  <img src={pings} alt="Description" />
                </Button>
              </TableCell>
              <TableCell align="left" sx={{ minWidth: '50px', position: 'sticky !important', fontWeight: 'bold' }}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ color: (theme) => (theme.palette.mode === 'dark' ? '' : 'white'), borderRadius: '5px' }}>
            {/* <MainCard content={false} > */}
            {filterData
              .filter((row) => (filtername ? row[filter] : true))
              .map((row) => (
                <TableRow hover key={row.name}>
                  <TableCell align="left" className={classes.styledcell}>
                    <Link to={'/funds/fund-view'}>
                      <Typography sx={{ color: (theme) => (theme.palette.mode === 'dark' ? 'white' : '#008080') }}>{row.A}</Typography>
                    </Link>
                  </TableCell>
                  <TableCell align="left" className={classes.styledcell}>
                    {row.B}
                  </TableCell>
                  <TableCell align="left" className={classes.styledcell}>
                    {row.C}
                  </TableCell>
                  <TableCell align="left" className={classes.styledcell}>
                    {row.D}
                  </TableCell>
                  <TableCell align="left" sx={{ pl: 2, pr: 2, fontSize: '12px' }}>
                    {row.E}
                  </TableCell>
                  <TableCell align="left" sx={{ pl: 2, pr: 2, fontSize: '12px' }}>
                    {row.F}
                  </TableCell>
                  <TableCell align="left" sx={{ pl: 2, pr: 2, fontSize: '12px' }}>
                    {row.G}
                  </TableCell>
                  <TableCell align="left" sx={{ pl: 2, pr: 2, fontSize: '12px' }}>
                    {row.status == true ? (
                      <>
                        <Button color="info">
                          <EditOutlined style={{ fontSize: '1.3rem' }} />
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button>
                          <EditOutlined style={{ fontSize: '1.3rem' }} />
                        </Button>
                      </>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            {/* </MainCard> */}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
}
export function TableFund({ rows }) {
  const classes = useStyles();
  const [actionState, setAction] = useState(1);
  const handleChangeAction = (event) => {
    event.preventDefault();
    setAction(event.target.value);
  };

  const theme = useTheme();
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event?.target?.value);
    setPage(0);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <>
      <TableContainer sx={{ maxHeight: 630, marginTop: '40px' }}>
        <Table sx={{ minWidth: 350, width: '100%' }} stickyHeader aria-label="sticky table">
          <TableHead
            sx={{
              '& th': {
                borderTop: `1px solid ${theme.palette.divider}`,
                borderBottom: `2px solid ${theme.palette.divider} !important`
              }
            }}
          >
            <TableRow>
              {columns_Fund.map((column) => (
                <TableCell
                  sx={{ minWidth: column.minWidth, position: 'sticky !important', fontWeight: 'bold' }}
                  key={column.id}
                  align={column.align}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableHead
            sx={{
              '& th': {
                borderTop: `1px solid ${theme.palette.divider}`,
                borderBottom: `2px solid ${theme.palette.divider} !important`
              }
            }}
          >
            <TableRow>
              <TableCell align="left">
                <Button variant="outlined" color="info" className={classes.styleIVButton}>
                  <img src={pings} alt="Description" />
                  GreenTech...
                </Button>
              </TableCell>
              <TableCell align="left">
                <Button variant="outlined" color="info" className={classes.styleIVButton}>
                  <img src={pings} alt="Description" />
                </Button>
              </TableCell>
              <TableCell align="left">
                <Button variant="outlined" color="info" className={classes.styleIVButton}>
                  <img src={pings} alt="Description" />
                </Button>
              </TableCell>
              <TableCell align="left">
                <Button variant="outlined" color="info" className={classes.styleIVButton}>
                  <img src={pings} alt="Description" />
                </Button>
              </TableCell>
              <TableCell align="left">
                <Button variant="outlined" color="info" className={classes.styleIVButton}>
                  <img src={pings} alt="Description" />
                </Button>
              </TableCell>
              <TableCell align="left">
                <Select
                  value={actionState}
                  sx={{
                    height: '53px',
                    borderRadius: '12px',
                    width: '155px',
                    background: 'white'
                  }}
                  onChange={handleChangeAction}
                >
                  <MenuItem value={1} sx={{ backgroundColor: 'white' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', padding: '3px' }}>
                      <img src={pings} alt="action" />
                      <img src={ActiveIcon} alt="action" />
                      &nbsp;
                      <Typography variant="h6" color="primary">
                        Active
                      </Typography>
                    </Box>
                  </MenuItem>
                  <MenuItem value={2} sx={{ backgroundColor: 'white' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', padding: '3px' }}>
                      <img src={pings} alt="action" />
                      <img src={InactiveIcon} alt="action" />
                      <Typography variant="h6" color="primary">
                        &nbsp;InActive
                      </Typography>
                    </Box>
                  </MenuItem>
                  <MenuItem value={3} sx={{ backgroundColor: 'white' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', padding: '3px' }}>
                      <img src={pings} alt="action" />
                      <img src={DraftIcon} alt="action" />
                      <Typography variant="h6" color="primary">
                        &nbsp;Draft
                      </Typography>
                    </Box>
                  </MenuItem>
                </Select>
              </TableCell>
              <TableCell align="left" sx={{ minWidth: '50px', position: 'sticky !important', fontWeight: 'bold' }}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ color: (theme) => (theme.palette.mode === 'dark' ? '#008080' : 'white'), borderRadius: '5px' }}>
            {/* <MainCard content={false} > */}
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <TableRow hover key={row.name}>
                <TableCell align="left" className={classes.styledcell}>
                  <Link to={'/investors/fund-view'}>
                    <Typography sx={{ color: (theme) => (theme.palette.mode === 'dark' ? 'white' : '#008080') }}>{row.A}</Typography>
                  </Link>
                </TableCell>
                <TableCell align="left" className={classes.styledcell}>
                  {row.B}
                </TableCell>
                <TableCell align="left" className={classes.styledcell}>
                  {row.C}
                </TableCell>
                <TableCell align="left" className={classes.styledcell}>
                  {row.D}
                </TableCell>
                <TableCell align="left" sx={{ pl: 2, pr: 2, fontSize: '12px' }}>
                  {row.E}
                </TableCell>
                <TableCell>
                  <Button variant="contained" color="secondary" sx={{ borderRadius: '12px' }}>
                    <img src={circle} alt="This" />
                    &nbsp;Active
                  </Button>
                </TableCell>
                <TableCell align="left" sx={{ pl: 2, pr: 2, fontSize: '12px' }}>
                  {row.status == true ? (
                    <>
                      <Button color="info">
                        <EditOutlined style={{ fontSize: '1.3rem' }} />
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button>
                        <EditOutlined style={{ fontSize: '1.3rem' }} />
                      </Button>
                    </>
                  )}
                </TableCell>
              </TableRow>
            ))}
            {/* </MainCard> */}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
}
const useStyles = makeStyles(() => ({
  styeledcell: {
    minWidth: '100px',
    position: 'sticky !important',
    fontWeight: 'bold',
    pb: 4
  },
  styleIVButton: {
    height: '52px',
    borderRadius: '15px',
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: 'info'
    }
  }
}));
TablePorto.propTypes = {
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      company: PropTypes.string,
      on: PropTypes.string,
      currency: PropTypes.string,
      invest: PropTypes.number,
      industry: PropTypes.string,
      country: PropTypes.string,
      status: PropTypes.bool
    })
  ).isRequired
};
TableFund.propTypes = {
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      A: PropTypes.string,
      B: PropTypes.string,
      C: PropTypes.string,
      D: PropTypes.number,
      F: PropTypes.string,
      G: PropTypes.string,
      status: PropTypes.bool
    })
  ).isRequired
};
TableCap.propTypes = {
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      company: PropTypes.string,
      on: PropTypes.string,
      currency: PropTypes.string,
      invest: PropTypes.number,
      industry: PropTypes.string,
      country: PropTypes.string,
      status: PropTypes.bool
    })
  ).isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  handleChangePage: PropTypes.func.isRequired,
  handleChangeRowsPerPage: PropTypes.func.isRequired
};
TableBench.propTypes = {
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      Index: PropTypes.string,
      Mo: PropTypes.string,
      TMo: PropTypes.string,
      OYr: PropTypes.string,
      TYr: PropTypes.string,
      Result: PropTypes.number
    })
  ).isRequired
};
TableDocument.propTypes = {
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      Title: PropTypes.string,
      Date: PropTypes.string,
      Document: PropTypes.string,
      Access: PropTypes.string,
      Description: PropTypes.string
    })
  ).isRequired
};
TableFunds.propTypes = {
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      content: PropTypes.string
    })
  ).isRequired
};
TableFundList.propTypes = {
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      content: PropTypes.string
    })
  ).isRequired
};
TableInvest.propTypes = {
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      cap: PropTypes.string,
      unfund: PropTypes.string,
      contact: PropTypes.string
    })
  ).isRequired
};
