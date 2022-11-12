import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header.component";
import DiscussionForum from "./pages/discussion-forum.page";
import LandingPage from "./pages/landing.page";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/discussion-forum" element={<DiscussionForum />} />
      </Routes>
    </Router>
  );
}

export default App;
