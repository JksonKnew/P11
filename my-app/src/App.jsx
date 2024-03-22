import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import Footer from './components/Footer';
import Error from './pages/Error';
import Login from './pages/Login';
import User from './pages/User';
import './App.css';

function App() {


  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user" element={<User/>}/>
          <Route path="/*" element={<Error />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
