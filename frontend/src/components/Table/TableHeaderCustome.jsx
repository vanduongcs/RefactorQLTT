import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

function TableHeaderCustome() {

  const TableHeaderStyle = {
    bgcolor: (theme) => theme.custome.tableHeader,
  }

  const TableHeaderTextStyle = {
    fontWeight: 'bold',
    fontSize: 16, color: (theme) => theme.custome.textWhite
  }
  return (
    <TableHead sx={TableHeaderStyle}>
      <TableRow>
        <TableCell align="center" sx={TableHeaderTextStyle}>A</TableCell>
        <TableCell align="center" sx={TableHeaderTextStyle}>B</TableCell>
        <TableCell align="center" sx={TableHeaderTextStyle}>C</TableCell>
        <TableCell align="center" sx={TableHeaderTextStyle}>D</TableCell>
        <TableCell align="center" sx={TableHeaderTextStyle}>E</TableCell>
      </TableRow>
    </TableHead>
  )
}

export default TableHeaderCustome
