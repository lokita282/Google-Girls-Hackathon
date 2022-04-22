import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
  Navigate,
} from 'react-router-dom'
import Dashboard from './Pages/Dashboard';
import Food from './Pages/TechAssistance/Food';
import Task from './Pages/Task';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/food" element={<Food />} />
          <Route path="/tasks" element={<Task />} />
        </Routes>
      </Router>
      {/* <Dashboard /> */}
    </>
  )
}

export default App;
