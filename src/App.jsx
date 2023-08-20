
//import reactLogo from './assets/react.svg'
import {Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import AllPlayers from './components/AllPlayers';
import SinglePlayer from './components/SinglePlayer';
import NewPlayerForm from './components/NewPlayerForm';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/allplayers' element={<AllPlayers />}></Route>
      <Route path='/player/:id' element={<SinglePlayer />}></Route>
      <Route path='/newplayers' element={<NewPlayerForm />}></Route>
    </Routes>
      
    </>
  );
};

export default App;
