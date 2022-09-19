import './App.css';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Pages from './pages/Pages';
import {BrowserRouter} from 'react-router-dom';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [searchFilter, setSearchFilter] = useState("Food");

  return(
    <BrowserRouter>
      <Navbar/>
      <Search setSearchFilter={setSearchFilter}/>
      <Pages searchFilter={searchFilter}/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
