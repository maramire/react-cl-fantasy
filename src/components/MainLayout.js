import { useContext } from "react";
import { Outlet } from "react-router";
import Sidenav from "../components/Nav/Sidenav";
import Topnav from "../components/Nav/Topnav";
import AuthContext from "../store/auth-context";

function MainLayout() {
  const authContext = useContext(AuthContext);
  return (
    <>
      <Topnav />
      <div className="flex bg-slate-900 h-screen">
        {authContext.isLoggedIn && <Sidenav />}
        <Outlet />
      </div>
    </>
  );
}

export default MainLayout;
