import Box from '@mui/material/Box'
import NavBar from '../../../components/NavBar/NavBar.jsx'
import TCBoard from './TCBoard/TCBoard.jsx'
function TrangChu() {

  const bodyStyle = {
    height: (theme) => `calc(100vh - ${theme.custome.navBarHeight})`,
    bgcolor: (theme) => theme.palette.background.paper,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  return (
    <Box >
      <NavBar />
      <Box sx={bodyStyle}>
        <TCBoard />
      </Box>
    </Box>
  )
}

export default TrangChu
