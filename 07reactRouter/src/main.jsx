import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import ContactUs from "./components/ContactUs/ContactUs.jsx";
import User from "./components/User/User.jsx";
import Github, { githubInfoLoader } from "./components/GitHub/Github.jsx";

//1 WAY TO DO IT
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       { path: "", element: <Home /> },
//       { path: "about", element: <About /> },
//       {
//         path: "contact-us",
//         element: <ContactUs />,
//       },
//     ],
//   },
// ]);

//ANOTHER WAYS (EASY)

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact-us" element={<ContactUs />} />
      <Route path="user/:userid" element={<User />} />
      <Route path="github" element={<Github />} loader={githubInfoLoader} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
