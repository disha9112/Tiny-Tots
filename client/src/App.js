import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header.component";
import DiscussionForum from "./pages/discussion-forum.page";
import Profile from "./pages/profile/Profile";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/discussion-forum" element={<DiscussionForum />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
