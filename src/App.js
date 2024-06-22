import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';  
import RegisterStudent from './RegisterStudent';
import { Typography } from '@mui/material';  
import './App.css';  

function App() {
  return (
    <Router>
      <div className="App">
        <Header />  
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register-student" element={<RegisterStudent />} />
            <Route path="/section1" element={<Section1 />} />
            <Route path="/section2" element={<Section2 />} />
            <Route path="/section3" element={<Section3 />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

const Home = () => (
  <section>
    <Typography variant="h4" component="h1" gutterBottom>
      CI CD testing
    </Typography>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </section>
);

const Section1 = () => (
  <section>
    <Typography variant="h4" component="h2" gutterBottom>
      Section 1
    </Typography>
    <Typography variant="body1">
      This is Section 1.
    </Typography>
  </section>
);

const Section2 = () => (
  <section>
    <Typography variant="h4" component="h2" gutterBottom>
      Section 2
    </Typography>
    <Typography variant="body1">
      This is Section 2.
    </Typography>
  </section>
);

const Section3 = () => (
  <section>
    <Typography variant="h4" component="h2" gutterBottom>
      Section 3
    </Typography>
    <Typography variant="body1">
      This is Section 3.
    </Typography>
  </section>
);

export default App;
