import { Route, Routes } from "react-router-dom";
import ToppsWarCards from "./components/ToppsWarCards";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ToppsWarCards />} />
    </Routes>
  );
}

export default App;
