import red from '@material-ui/core/colors/red'
import { createMuiTheme } from '@material-ui/core/styles'

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#384356',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#384356',
      paper: '#384356',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  overrides: {
    MuiPaper: {
      root: {
        backgroundColor: '#384356',
      },
    },
  },
})

export default theme
