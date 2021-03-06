import {Route, Routes} from "react-router-dom";
import "./App.css";
import {Page1} from "./pages/Page1";
import {Page2} from "./pages/Page2";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/bio" element={<Page2 />} />
      </Routes>
    </div>
  );
}

export default App;
