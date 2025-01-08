import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root";
import Home from "./Components/Home/Home";
import AppliedJobs from "./Components/Applied/AppliedJobs";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import JobDetails from "./Components/JobDetails/JobDetails";
import { HelmetProvider } from "react-helmet-async";
import JobList from "./Components/JobLIst/JobList";
import FeaturedJobs from "./Components/FeaturedJobs/FeaturedJobs";

import GoogleMap from "./Components/GoogleMap/GoogleMap";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/applied",
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch("../jobs.json"),
      },
      {
        path: "/job/:id",
        element: <JobDetails></JobDetails>,
        loader: () => fetch("../jobs.json"),
      },
      {
        path: "/statistics",
        element: <JobList></JobList>,
      },
      {
        path: "/job",
        element: <FeaturedJobs></FeaturedJobs>,
      },
      {
        path: "/blog",
        element: <GoogleMap></GoogleMap>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>
);
