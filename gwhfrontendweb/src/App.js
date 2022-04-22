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
import Support from './Pages/Support';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/food" element={<Food />} />
          <Route path="/task" element={<Task />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </Router>
      {/* <Dashboard /> */}
    </>
  )
}

export default App;
