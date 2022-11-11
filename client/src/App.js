import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header.component";
import Signup from "./components/signup.component";
import Login from "./components/login.component";
import DiscussionForum from "./pages/discussion-forum.page";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/discussion-forum" element={<DiscussionForum />} />
      </Routes>
    </Router>
  );
}

export default App;
