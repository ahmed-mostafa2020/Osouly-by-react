import './App.css';
import { Routes ,Route } from 'react-router-dom';
import Header from './components/Header';
import NavbarLarge from './components/NavbarLarge';
import Search from './components/Search';
import SliderPage from './pages/SliderPage';
import CardsPage from './pages/CardsPage';
import About from './components/About';
import ServicesPage from './pages/ServicesPage';

// import PropsCardsPage from './pages/PropsCardsPage';
import PropertiesPage from './pages/PropertiesPage';





import Footer from './components/Footer';

function App() {
  
  return (
    <>
      <Header />
      <NavbarLarge />
      <Routes>
        
        <Route path='/' element={
          <>
            <SliderPage />
            <Search />
            <CardsPage />
            <About />
            <ServicesPage />
          </>
        }>
          
        </Route>

        <Route path='/properties' element={<PropertiesPage />} ></Route>





      </Routes>
      <Footer />
    </>
  );
}

export default App;
