import './App.css';

import Feed from './Containers/feed'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  



  return (
    <Router>
      <Routes>
        <Route exact path={'/'} element={<Feed />}/>
      </Routes>
    </Router>
  );
}

export default App;
