import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useSelector } from 'react-redux';

const MemeberTable=()=> {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const {allMembers} = useSelector((state)=> state.memberInfo)

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
        
                <TableCell>SN</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Role</TableCell>
                <TableCell>Department</TableCell>
                <TableCell>Phone no.</TableCell>
                <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              allMembers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((member, index) => {
                return (
                  <TableRow>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{member.name}</TableCell>
                    <TableCell>{member.role}</TableCell>
                    <TableCell>{member.department}</TableCell>
                    <TableCell>{member.phone}</TableCell>
                    <TableCell className={member.status==="active" ? "text-success":"red"}>{member.status}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={allMembers.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default MemeberTable;