import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const OrganizationTable=({org})=> {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell style={{ minWidth: "50" }}>SN</TableCell>
              <TableCell style={{ minWidth: "50" }}>Company Name</TableCell>
              <TableCell style={{ minWidth: "50" }}>Schema</TableCell>
              <TableCell style={{ minWidth: "50" }}>Address</TableCell>
              <TableCell style={{ minWidth: "50" }}>Phone</TableCell>
              <TableCell style={{ minWidth: "100" }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
                {
                    org.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((orgItem, i)=> <TableRow key={orgItem._id}>
                        <TableCell>{i+1}</TableCell>
                        <TableCell>{orgItem.name}</TableCell>
                        <TableCell>{orgItem.schema}</TableCell>
                        <TableCell>{orgItem.address}</TableCell>
                        <TableCell>{orgItem.phone}</TableCell>
                        <TableCell> 
                          <Link to={`/admin/organization/${orgItem.id}`}>
                          <Button variant='dark'>View details</Button>
                          </Link>
                        </TableCell>

                    </TableRow>)
                }
                
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={org.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default OrganizationTable;