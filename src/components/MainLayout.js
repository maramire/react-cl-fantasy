import { Outlet } from "react-router";
import Navbar from "../common/Navbar";

function MainLayout() {
  return (
    <>
      <div className="flex bg-gray-100 h-screen">
        <Navbar />
        <div className="w-9/12 overflow-auto">
          <div className="p-4 text-gray-500">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainLayout;
