import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './contact';
import Login from './Login';
import Signup from './Signup';
import Error from './Error';
import Create from './components/create';
import Read from './components/Read';
import Update from './components/Update';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path='/' element={<Create />}></Route>
          <Route path='/Read' element={<Read />} />
          <Route path='/edit/:id' element={<Update />} />
          <Route path="/About" element={<About />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Signup" element={<Signup />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
