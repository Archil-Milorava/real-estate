import { Route, Routes } from "react-router-dom";
import Navbar from "./features/navbar/Navbar";
import LoginPage from "./pages/LoginPage";
import ProperyListPage from "./pages/ProperyListPage";
import SearchPage from "./pages/SearchPage";
import SignupPage from "./pages/SignupPage";
import SinglePropertyPage from "./pages/SinglePropertyPage";
import UserPage from "./pages/UserPage";

const App = () => {

  return (
    <div className="font-Inter">

      <Navbar />
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/list" element={<ProperyListPage />} />
        <Route path="/profile" element={<UserPage />} />
        <Route path="/:id" element={<SinglePropertyPage />} />
        <Route path="/signin" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </div>
  );
};

export default App;
