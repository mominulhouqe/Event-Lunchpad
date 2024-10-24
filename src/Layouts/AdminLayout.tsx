import { Outlet } from "react-router-dom";
import Sidenavber from "./Sidenavber";

const AdminLayout = () => {
  return (
    <div className="grid grid-cols-12">
      <Sidenavber />
      <div className="col-span-10 bg-slate-100 p-2">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default AdminLayout;
