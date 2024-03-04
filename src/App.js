import { BrowserRouter, Routes, Route } from "react-router-dom";
import Employee from "./pages/Employee";
import Formation from "./pages/Formation";
import Assign from "./pages/Assign";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Employee />} />
        <Route path="/formation" element={<Formation />} />
        <Route path="/assign" element={<Assign />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
