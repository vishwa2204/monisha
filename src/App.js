
import './App.css';


//Default Components 
import { Route, Routes } from "react-router-dom";

// main components 
import Navbar  from './main-components/navbar/navbar';



// pages 
import About from './pages/about';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="about" element={<About />} />
      </Routes>

      {/* <Footer /> */}
    </>
  );
}

export default App;
