import Table from '@mui/material/Table'
import TableContainer from '@mui/material/TableContainer'
import Paper from '@mui/material/Paper'

// Custome
import TableHeaderCustome from './TableHeaderCustome.jsx'
import TableBodyCustome from './TableBodyCustome.jsx'

function TableCustome() {

  const TableStyle = {
    width: '100%',
    boxShadow: '0 2px 8px 0 rgba(31, 38, 135, 0.10), 0 1.5px 3px 0 rgba(60,60,60,0.06)',
    borderRadius: '8px',
    backdropFilter: 'blur(4px)',
    margin: '32px auto'
  };

  return (
    <TableContainer sx={TableStyle} component={Paper}>
      <Table>
        <TableHeaderCustome />
        <TableBodyCustome />
      </Table>
    </TableContainer>
  )
}

export default TableCustome
