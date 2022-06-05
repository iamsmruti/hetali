import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Layout from './components/Layout';
import About from './pages/About';
import { createTheme, ThemeProvider } from '@mui/material';
import { indigo, lightBlue } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: indigo,
    secondary: lightBlue
  },
  typography: {
    fontFamily: 'Roboto Flex',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Routes>
            <Route path='/' exact element={<About />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
