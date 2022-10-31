import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom"; 
import './App.css';
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
   return (
     <Router>
      <nav>
         <Link to="/">Home</Link>
         <Link to="/about">About</Link>
         <Link to="/profile">Profile</Link>
      </nav>
       <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/profile/:username" element={<Profile/>}/>
          <Route path="*" element={<ErrorPage/>}/>
       </Routes>
       <div>Footer</div>
     </Router>
    
   );
 }

export default App;
