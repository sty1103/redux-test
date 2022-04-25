import { BrowserRouter, Router, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Todos from './pages/Todos';
import Users from './pages/Users';
import history from './history';

function App() {
  return (
    <BrowserRouter navigate={history}>
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/todos' element={<Todos />} />
        <Route path='/users' element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
