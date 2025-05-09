import { Route, Routes } from "react-router-dom";
import Navbar from "./features/navbar/Navbar";
import ProperyListPage from "./pages/ProperyListPage";
import SearchPage from "./pages/SearchPage";
import SinglePropertyPage from "./pages/SinglePropertyPage";

const App = () => {
  return (
    <div className="font-Inter">
      <Navbar />
      <Routes>
        <Route path="/list" element={<ProperyListPage />} />
        <Route path="/" element={<SearchPage />} />
        <Route path="/:id" element={<SinglePropertyPage />} />
      </Routes>
    </div>
  );
};

export default App;
