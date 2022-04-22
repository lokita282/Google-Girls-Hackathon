import './App.css';
import { BrowserRouter as Router, Route, Routes, Outlet, Navigate } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Food from './Pages/TechAssistance/Food';
import Task from './Pages/Task';
import Support from './Pages/Support';
import AppGuide from './Pages/AppGuide';
import NewsPage from './Pages/NewsPage';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/food" element={<Food />} />
          <Route path="/task" element={<Task />} />
          <Route path="/support" element={<Support />} />
          <Route exact path='/' element={<Dashboard />} />
          <Route path='/news' element={<NewsPage />} />
          <Route path='/appguide' element={<AppGuide />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
