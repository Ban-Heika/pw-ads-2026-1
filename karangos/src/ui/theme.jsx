import { createTheme } from '@mui/material/styles'
import { yellow, pink } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FFC500'
    },
    secondary: {
      main: '#1A1A1A'
    }
  },
  typography: {
    h1: {
      fontSize: '2.5rem',
      fontWeight: 'bold'
    }
  }
})

export default theme