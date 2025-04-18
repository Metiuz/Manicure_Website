import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MeusAgendamentos from './pages/MeusAgendamentos';
import Agendar from './pages/Agendar';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/meus-agendamentos' element={<MeusAgendamentos/>}/>
          <Route path='/agendar' element={<Agendar/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
