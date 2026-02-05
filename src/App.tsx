import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home.tsx';
import About from './pages/about/About.tsx';
import Error from './pages/notFound/NotFound.tsx';
import DefaultBar from './components/navigationBar/DefaultBar.tsx';
import defaultTheme from './themes/defaultTheme.ts';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <BrowserRouter>
        <DefaultBar></DefaultBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}></Route>
          <Route path="*" element={<Error></Error>}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
