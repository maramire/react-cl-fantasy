import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Home from "./pages/Home";
import Clubs from "./pages/Clubs";
import PlayerDetail from "./pages/PlayerDetail";
import ClubDetail from "./pages/ClubDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="home" element={<Home />} />
        <Route path="clubs" element={<Clubs />} />
        <Route path="clubs/:id" element={<ClubDetail />} />
        <Route path="players/:id" element={<PlayerDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
