import './App.css';
import { Routes ,Route } from 'react-router-dom';
import Header from './components/Header';
import NavbarLarge from './components/NavbarLarge';
import Search from './components/Search';
import SliderList from './pages/SliderList';
import About from './components/About';
import ServicesList from './pages/ServicesList';

import Properties from './pages/Properties';





import Footer from './components/Footer';
import CardsList from './pages/CardsList';

function App() {
  
  return (
    <>
      <Header />
      <NavbarLarge />
      <Routes>
        
        <Route path='/' element={
          <>
            <SliderList />
            <Search />
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
