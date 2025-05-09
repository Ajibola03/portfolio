import { BrowserRouter, Route, Routes } from "react-router";
import './App.css'
import HomePage from "./pages/HomePage";
import ScrollManager from "./components/ScrollManager";
import NotFoundPage from "./pages/NotFoundPage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";

function App() {
  return <BrowserRouter>
    <ScrollManager />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/projects/:slug" element={<ProjectDetailsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
}

export default App
