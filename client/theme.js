import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    palette: {
      primary: {
      light: '#FFD1D6',
      main: '#A4DDED',
      dark: '#B3CCE8',
      contrastText: '#fff',
    },
    secondary: {
      light: '#F7CDC9',
      main: '#B3CCE8',
      dark: '#749AD6',
      contrastText: '#fff',
    },
      openTitle: '#002f6c',
      protectedTitle: '#f50057',
      type: 'light'
    }
  })
  

  export default theme