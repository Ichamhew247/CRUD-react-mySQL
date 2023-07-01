import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import HomePage from "../page/HomePage";
import Header from "../layouts/Header";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Outlet />
        </>
      ),

      children: [
        {
          path: "/homepage",
          element: <HomePage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
