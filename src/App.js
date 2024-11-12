import './App.css';
import GlobalStyle from './styles/globalStyle';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Genre from './pages/Signup/Genre';
import Complete from './pages/Signup/Complete';
import Write from './pages/Write/Write';
import Worry from './pages/Write/Worry';
import Success from './pages/Write/Success';
import DetailPage from './pages/ProjectDetail/projectDetailPage';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Genre" element={<Genre />} />
          <Route path="/Complete" element={<Complete />} />
          <Route path="/Write" element={<Write />} />
          <Route path="/Worry" element={<Worry />} />
          <Route path="/Success" element={<Success />} />
          <Route path="/DetailPage" element={<DetailPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
