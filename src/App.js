import { BrowserRouter, Routes, Route } from "react-router-dom";
import Employee from "./pages/Employee";
import Formation from "./pages/Formation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Employee />} />
        <Route path="/formation" element={<Formation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
