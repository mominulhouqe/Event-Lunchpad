import AdminLayout from "@/Layouts/AdminLayout";
import MainLayout from "@/Layouts/MainLayout";
import AddEvent from "@/pages/AdminPages/AddEvent";
import Dashboard from "@/pages/AdminPages/Dashboard";
import Home from "@/pages/Home/Home";
import { Navigate, createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path:"/admin",
    element:<AdminLayout />,

    children:[
      {
        index:true,
        element : <Navigate to="/admin/dashboard"></Navigate>
      },
      {
        path:"dashboard",
        element:<Dashboard />
      },
      {
        path:"add-event",
        element:<AddEvent />
      }
    ]
  }
]);
export default routes;
