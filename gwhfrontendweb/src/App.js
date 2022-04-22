import './App.css';
import { BrowserRouter as Router, Route, Routes, Outlet, Navigate } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import AppGuide from './Pages/AppGuide';
import NewsPage from './Pages/NewsPage';
import Webinars from './Pages/Webinars';
import PerformTask from './Pages/PerformTask'


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Dashboard />} />
          <Route path='/news' element={<NewsPage />} />
          <Route path='/appguide' element={<AppGuide />} />
          <Route path='/webinars' element={<Webinars />} />
          <Route path='/task' element={<PerformTask />} />

        </Routes>
      </Router>
    </>
  )
}

export default App;
