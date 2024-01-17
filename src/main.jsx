import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ContactPage from "./pages/contactPage.jsx";
import MaintenancePage from "./pages/maintenancePage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ContactPage />,
  },
  {
    path: "/maintenance",
    element: <MaintenancePage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
