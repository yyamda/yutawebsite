import Home from "./components/HomePage/Home"
import ExperiencesPage from "./components/ExperiencePage/ExperiencesPage"
import Projects from "./components/ProjectsPage/Projects"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/experiences" element={<ExperiencesPage />}/>
      </Routes>
  </BrowserRouter>
  );
}

  export default App