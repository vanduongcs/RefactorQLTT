// MUI
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

// Custome
import NavRoute from './NavRoute.jsx'

function NavBar() {

  const NavBarContainerStyle = {
    height: (theme) => theme.custome.navBarHeight,
    bgcolor: (theme) => theme.palette.primary.main,
    color: (theme) => theme.custome.textWhite,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    px: 4,
    marginBottom: 2
  }

  const ButtonListStyle = {
    display: 'flex',
    flexDirection: 'row',
    gap: 3
  }

  const ButtonNavStyle = {
    color: (theme) => theme.custome.textWhite,
    fontWeight: 'bold',
    fontSize: '1rem',
    textTransform: 'none',
    transition: 'background 0.2s, color 0.2s',
    '&:hover': {
      backgroundColor: (theme) => theme.palette.primary.dark
    },
  }

  return (
    <Box sx={NavBarContainerStyle}>

      <NavRoute ButtonListStyle={ButtonListStyle} ButtonNavStyle={ButtonNavStyle} />

      <Button sx={ButtonNavStyle}>Đăng xuất</Button>
    </Box>
  )
}

export default NavBar
