import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header.component";
import DiscussionForum from "./pages/discussion-forum.page";
import Profile from "./pages/Profile";
import CrecheDetails from "./pages/CrecheDetails";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/discussion-forum" element={<DiscussionForum />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/details/:id" element={<CrecheDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
