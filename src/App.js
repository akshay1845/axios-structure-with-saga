import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { indexPattern } from './Routes';
import HomePage from './pages/HomePage';
import 'react-loading-skeleton/dist/skeleton.css'


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path={indexPattern}
            element={<HomePage />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
