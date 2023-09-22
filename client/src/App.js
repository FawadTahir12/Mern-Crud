import './App.css';
import { Route, Routes , BrowserRouter } from 'react-router-dom'
import User from './components/users';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<User/>} ></Route>
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
