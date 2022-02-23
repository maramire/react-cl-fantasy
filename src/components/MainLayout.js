import { useContext } from "react";
import { Outlet } from "react-router";
import Sidebar from "../common/Sidebar";
import Topbar from "../common/Topbar";
import AuthContext from "../store/auth-context";

function MainLayout() {
  const authContext = useContext(AuthContext);
  return (
    <>
      <Topbar />
      <div className="flex bg-slate-900 h-screen">
        {authContext.isLoggedIn && <Sidebar />}
        <Outlet />
      </div>
    </>
  );
}

export default MainLayout;
