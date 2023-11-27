import './App.css';
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom'
import PeoplePage from './containers/PeoplePage/PeoplePage';
import { HomePage } from './containers/HomePage/HomePage';
import { Header } from './components/Header/Header';
function App() {
  return (
    <div className="App">
      <>
        <BrowserRouter>
        <div className='wrapper'>
        <Header/>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/people' element={<PeoplePage />} />

          </Routes>
        </div>
       
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
