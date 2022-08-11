import { createTheme } from '@mui/material/styles'

const baseTheme = createTheme()

const theme = createTheme({
  palette: {
    primary: {
      light: '#4da749',
      main: '#378434',
      dark: '#236522',
      contrastText: '#fff',
    },
    secondary: {
      dark: '#E5E5E5',
      main: '#FAFAFA',
      contrastText: '#000',
    },
  },

  icons: {
    toolbar: '#545454',
  },

  shape: {
    borderRadius: 4,
  },

  distances: {
    editorDrawerWidth: '450px',
    navBarHeight: '64px',
  },

  typography: {
    fontSize: 13, // influences all rem based values

    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 500,
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 500,
    },
    h5: {
      fontSize: '1.125rem',
      fontWeight: 500,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: '1rem',
    },
  },

  // WARNING: overrides apparently do not get hot-reloaded, you need to
  // manually reload the application to see the changes
  components: {
    MuiCollapse: {
      styleOverrides: {
        root: {
          '& .SnackbarItem-variantSuccess': {
            background: 'white !important',
            color: `${baseTheme.palette.text.primary} !important`,

            '& svg': {
              color: `${baseTheme.palette.success.main} !important`,
            },
          },
          '& .SnackbarItem-variantError': {
            background: 'white !important',
            color: `${baseTheme.palette.text.primary} !important`,

            '& svg': {
              color: `${baseTheme.palette.error.main} !important`,
            },
          },
        },
      },
    },

    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },

    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
    },

    MuiAccordion: {
      defaultProps: {
        elevation: 0,
        square: true,
        disableGutters: true,
      },
      styleOverrides: {
        root: {
          border: `1px solid ${baseTheme.palette.grey[200]}`,
          '&:first-of-type': {
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
          },
          '&:last-of-type': {
            borderBottomLeftRadius: 4,
            borderBottomRightRadius: 4,
          },
          '&:not(:last-child)': {
            borderBottom: 0,
          },
          '&:before': {
            display: 'none',
          },
        },
      },
    },

    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },

    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          padding: baseTheme.spacing(1.5, 1, 1.5, 1.5),
          minHeight: 'initial',
        },

        content: {
          margin: 0,
          lineHeight: 1,
        },
      },
    },

    MuiToggleButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },

    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: baseTheme.spacing(0, 1, 1, 1),
        },
      },
    },
  },
})

export default theme
