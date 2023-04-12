import './App.css';
import { Routes ,Route } from 'react-router-dom';
import Header from './components/Header';
import NavbarLarge from './components/NavbarLarge';
import SearchBox from './components/SearchBox';
import SliderList from './pages/SliderList';
import About from './components/About';
import ServicesList from './pages/ServicesList';

import Properties from './pages/Properties';





import Footer from './components/Footer';
import CardsList from './pages/CardsList';
// import { createContext } from 'react';

function App() {
  // const apiContext = createContext();




  
  return (
    <>
      <Header />
      <NavbarLarge />
      <Routes>
        
        <Route path='/' element={
          <>
            <SliderList />
            <SearchBox />
            <CardsList />
            <About />
            <ServicesList />
          </>
        }>
          
        </Route>

        <Route path='/properties' element={<Properties />} ></Route>


      </Routes>

      <Footer />
    </>
  );
}

export default App;
