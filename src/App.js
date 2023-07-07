import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './pages/hone/Main';
import Room from './pages/hone/room/Room';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path='/room/:roomId' element={<Room />} />
      </Routes>
    </div>
  );
}

export default App;
