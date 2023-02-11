import './App.css';
import {  BrowserRouter as Router ,Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Personal from './Pages/Personal';
import HeadPage from './Pages/HeadPage';
function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="" element={<Home/>}/>
            <Route path="/HeadPage" element={<HeadPage/>}/>
          </Routes>
        </Router>
    
    </div>
  );
}

export default App;
