import { Outlet } from "react-router-dom";
import Navber from "./Navber";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <>
      <Navber />
      <Outlet></Outlet>
      <Footer />
    </>
  );
};

export default MainLayout;
