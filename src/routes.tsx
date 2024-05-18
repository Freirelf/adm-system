import {
  createBrowserRouter,

} from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },

  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  
]);
