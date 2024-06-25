import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes/router";
import { ToastContainer } from "react-toastify";
import { useIsLoggedInQuery } from "./features/auth/AuthApi";
import Loader from "./components/reusable/loader/Loader";

function App() {
  const { isLoading } = useIsLoggedInQuery();

  if (isLoading) return <Loader />;

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
