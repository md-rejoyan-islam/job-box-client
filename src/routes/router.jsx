import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/main/Home";
import Jobs from "../pages/main/Jobs";
import JobDetails from "../pages/main/JobDetails";
import Login from "../pages/main/Login";
import Signup from "../pages/main/Signup";
import PrivateRoute from "./PrivateRoute";
import AccountCreator from "../pages/main//register/AccountCreator";
import AddJob from "../pages/dashboard/employeeDashboard/AddJob";
import EmployerRegistration from "../pages/main/register/EmployerRegistration";
import CandidateRegistration from "../pages/main/register/CandidateRegistration";
import AppliedJobs from "../pages/dashboard/candidateDashboard/AppliedJobs";
import PublicRoute from "./PublicRoute";
import EmployerAllJob from "../pages/dashboard/employeeDashboard/EmployerAllJob";
import AllApplicants from "../pages/dashboard//employeeDashboard/AllApplicants";
import NotFound from "../pages/NotFound";
import Dashboard from "../pages/dashboard/Dashboard";
import DashboardLayout from "../layout/DashboardLayout";
import MainLayout from "../layout/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/job-details/:id",
        element: <JobDetails />,
      },
      {
        path: "/login",
        element: (
          <PublicRoute>
            <Login />
          </PublicRoute>
        ),
      },
      {
        path: "/signup",
        element: (
          <PublicRoute>
            <Signup />
          </PublicRoute>
        ),
      },
      {
        path: "/register",
        element: (
          <PrivateRoute>
            <AccountCreator />
          </PrivateRoute>
        ),
      },
      {
        path: "/register/employer",
        element: (
          <PrivateRoute>
            <EmployerRegistration />
          </PrivateRoute>
        ),
      },
      {
        path: "/register/candidate",
        element: (
          <PrivateRoute>
            <CandidateRegistration />
          </PrivateRoute>
        ),
      },
      // {
      //   path: "/register/:type",
      //   element: (
      //     <PrivateRoute>
      //       <AccountCreator />
      //     </PrivateRoute>
      //   ),
      // },
    ],
  },
  {
    path: "/dashboard",
    errorElement: <NotFound />,
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "employer/add-job",
        element: <AddJob />,
      },
      {
        path: "employer/all-job",
        element: <EmployerAllJob />,
      },
      {
        path: "employer/all-applicants",
        element: <AllApplicants />,
      },
      {
        path: "candidate/my-jobs",
        element: <AppliedJobs />,
      },
    ],
  },
]);

export default router;
