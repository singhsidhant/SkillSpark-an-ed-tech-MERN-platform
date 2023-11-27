import "./App.css";
import {Route, Routes} from "react-router-dom"

//pages Import 
import Home from "./pages/Home"
function App() {
  return (
    //Main Page where all the section are stored
    <div className="flex min-h-screen w-screen flex-col bg-richblack-900 font-inter">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
