import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MeusAgendamentos from './pages/MeusAgendamentos';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/meus-agendamentos' element={<MeusAgendamentos/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
