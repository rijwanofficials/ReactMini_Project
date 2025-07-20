import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import CategoryViewPage from "./pages/CategoryViewPage";
import ProfilePage from "./pages/ProfilePage";
import ViewPage from "./pages/ViewPage";
import SearchPage from "./pages/SearchPage";
import Login from "./pages/Login";
import SignUP from "./pages/SignUp";
import Welcome from "./pages/Welcome";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/:productId/view" element={<ViewPage />} />
        <Route path="/categories" element={<CategoryViewPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<p>Oops... Page not found!</p>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUP />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;