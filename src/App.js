import './App.css';
import {  BrowserRouter as Router ,Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Personal from './Pages/Personal';
function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="" element={<Home/>}/>
            <Route path="/Personal" element={<Personal/>}/>
          </Routes>
        </Router>
    
    </div>
  );
}

export default App;
