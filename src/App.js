import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import MyFantasyTeam from "./pages/MyFantasyTeam";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="my-fantasy-team" element={<MyFantasyTeam />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
