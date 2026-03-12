import { createTheme } from '@mui/material/styles';

const lightPalette = {
   primary: {
      main: '#3f51b5',     
      light: '#757de8',
      dark: '#002984',
      superDark: '#001e3c',
      contrastText: '#fff',
   },
   background: {
      default: '#fcfcfc', 
      header: '#ffffff',
   },
   text: {
      primary: '#212121', 
      secondary: '#666666', 
   },
   divider: '#e0e0e0',   
   action: {
      hover: '#f1f3f9',  
   },
};

const darkPalette = {
   primary: {
      main: '#90caf9',     
      light: '#e3f2fd',
      dark: '#42a5f5',
      superDark: '#e3f2fd',
      contrastText: 'rgba(0, 0, 0, 0.87)',
   },
   background: {
      default: '#121212', 
      header: '#1e1e1e',   
      paper: '#1e1e1e',  
   },
   text: {
      primary: '#ffffff', 
      secondary: 'rgba(255, 255, 255, 0.7)', 
   },
   divider: 'rgba(255, 255, 255, 0.12)',
   action: {
      hover: 'rgba(255, 255, 255, 0.08)',
      active: '#90caf9',
   },
};

const theme = (mode) => createTheme({
   palette: {
      mode,
      ...(mode === 'light' ? lightPalette : darkPalette),
   },
   typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
   },
});

export default theme;