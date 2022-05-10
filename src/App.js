import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Registeration from "./Components/Registeration";
import Login from "./Components//Login";
import Todo from "./Components/Todo";
import Index from "./Components/Index";
function App() {
  return (
    <div className="App">
     
      <Router>
        <Routes>
        <Route path="/" element={<Index />} />
          <Route path="/registeration" element={<Registeration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
