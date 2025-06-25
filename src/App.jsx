import React from "react";
import { createHashRouter, RouterProvider, Navigate } from "react-router-dom";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";

// NavigationButtons component
import { useNavigate } from "react-router-dom";

const NavigationButtons = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/home")}>Home</button>
      <button onClick={() => navigate("/about")}>About</button>
      <button onClick={() => navigate("/contact")}>Contact</button>
    </div>
  );
};

// Wrapper layout to include navigation + route content
const Layout = ({ children }) => {
  return (
    <>
      <NavigationButtons />
      {children}
    </>
  );
};

// Define routes using createHashRouter
const router = createHashRouter([
  {
    path: "/",
    element: <Navigate to="/home" replace />,
  },
  {
    path: "/home",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/about",
    element: (
      <Layout>
        <About />
      </Layout>
    ),
  },
  {
    path: "/contact",
    element: (
      <Layout>
        <Contact />
      </Layout>
    ),
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
