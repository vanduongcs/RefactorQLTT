import Box from '@mui/material/Box'

// Custome
import TableCustome from '../Table/TableCustome'

function AdminPage({ FormComponent, Content }) {

  const AdminPageStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '32px auto'
  }

  const LeftPart = {
    display: 'flex',
    mx: 'auto',
    width: '70%'
  }

  const RightPart = {
    mr: 6,
    width: '20%'
  }

  return (
    <Box sx={AdminPageStyle}>
      <Box sx={LeftPart}>
        <TableCustome />
      </Box>
      <Box sx={RightPart}>
        <FormComponent Content={Content} />
      </Box>
    </Box>
  )
}

export default AdminPage
