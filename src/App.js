import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Task from './Task/Task';
import Contact from './Contact/Contact';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="Task" element={<Task />} />
        <Route path="Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
