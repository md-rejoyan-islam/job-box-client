import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main/Main";
import Home from "../pages/home/Home";
import Jobs from "../pages/Jobs";
import JobDetails from "../pages/JobDetails";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import PrivateRoute from "./PrivateRoute";
import AccountCreator from "../pages/register/AccountCreator";
import Dashboard from "../layout/dashboard/Dashboard";
import AddJob from "../pages/employeeDashboard/AddJob";
import EmployerDashboard from "../pages/employeeDashboard/EmployerDashboard";
import CandidateDashboard from "../pages/candidateDashboard/CandidateDashboard";
import EmployerRegistration from "../pages/register/EmployerRegistration";
import CandidateRegistration from "../pages/register/CandidateRegistration";
import AppliedJobs from "../pages/candidateDashboard/AppliedJobs";
import PublicRoute from "./PublicRoute";
import DashboardSidebar from "../layout/dashboard/DashboardSidebar";
import EmployerAllJob from "../pages/employeeDashboard/EmployerAllJob";
import AllApplicants from "../pages/employeeDashboard/AllApplicants";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
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
    element: (
      <PrivateRoute>
        <DashboardSidebar />
      </PrivateRoute>
    ),
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "add-job",
        element: <AddJob />,
      },
      {
        path: "employer",
        element: <EmployerDashboard />,
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
        path: "candidate",
        element: <CandidateDashboard />,
      },
      {
        path: "candidate/my-jobs",
        element: <AppliedJobs />,
      },
    ],
  },
]);

export default router;
