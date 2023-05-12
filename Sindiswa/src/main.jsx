import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Newsletter from './Pages/Newsletter';
import Thecollections from './Pages/Thecollections';
import Venues from './Pages/Venues';
import Events from './Pages/Events';
import AboutUs from './Pages/AboutUs';
import Home from './Pages/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/aboutUs",
    element: <AboutUs/>,
  },
  {
    path: "/events",
    element: <Events/>,
  },
  {
    path: "/venues",
    element: <Venues/>,
  },
  {
    path: "/thecollections",
    element: <Thecollections/>,
  },
  {
    path: "/newsletter",
    element: <Newsletter/>,
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
