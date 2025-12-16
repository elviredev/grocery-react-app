import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './page/Home/Home';
import Theme from './components/Theme/Theme';
import { ThemeContextProvider } from './contexts/ThemeContext';

function App() {
  return (
   <>
   <ThemeContextProvider>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>


      <Footer />
      <Theme />
    </ThemeContextProvider>
   </>
  );
}

export default App;

