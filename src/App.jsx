import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./Home";
import About from "./About";
import NoPage from "./NoPage";
import NavBar from "./NavBar";
import './App.css'

function App() {
  return (
    // Set the basename to your repository name
    <BrowserRouter basename="/React-Final-Challenge">
      < NavBar /> {/* Always visible */}

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="*" element={<NoPage />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
