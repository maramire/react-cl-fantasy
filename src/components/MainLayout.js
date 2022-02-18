import { Outlet } from "react-router";
import Sidebar from "../common/Sidebar";
import Topbar from "../common/Topbar";

function MainLayout() {
  return (
    <>
      <Topbar />
      <div className="flex bg-gray-100 h-screen">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
}

export default MainLayout;
