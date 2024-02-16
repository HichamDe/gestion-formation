import { BrowserRouter, Routes, Route } from "react-router-dom";
import Employee from "./pages/Employee";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Employee />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

