import '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Theme {
    distances: {
      editorDrawerWidth: string | number
      navBarHeight: string | number
    }

    icons: {
      toolbar: string
    }
  }

  interface ThemeOptions {
    distances?: {
      editorDrawerWidth?: string | number
      navBarHeight: string | number
    }

    icons: {
      toolbar: string
    }
  }
}
