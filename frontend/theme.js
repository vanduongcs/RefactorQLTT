import { extendTheme } from '@mui/material/styles'


const NAV_BAR_HEIGHT = '60px'
const FOOTER_HEIGHT = '250px'

const theme = extendTheme({
  custome: {
    navBarHeight: NAV_BAR_HEIGHT,
    footerHeight: FOOTER_HEIGHT,
    textWhite: '#f5f6fa',
    board: '#5197fb',
    tableHeader: '#3a8aff',
    light: {
      main: 'red'
    },
    dark: {
      main: '#0f154263'
    }
  },

  palette: {
    mode: 'light', // hoặc 'dark'
    // ...các cấu hình khác
  },
  // ...các cấu hình khác
})

export default theme