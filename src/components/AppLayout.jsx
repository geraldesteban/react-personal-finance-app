import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";

function AppLayout() {
  return (
    <div className="bg-beige-100 flex min-h-screen">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default AppLayout;
