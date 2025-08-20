import { extendTheme } from '@mui/material/styles'


const NAV_BAR_HEIGHT = '60px'
const FOOTER_HEIGHT = '350px'

const theme = extendTheme({
  custome: {
    navBarHeight: NAV_BAR_HEIGHT,
    footerHeight: FOOTER_HEIGHT,
    textWhite: '#f5f6fa',
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