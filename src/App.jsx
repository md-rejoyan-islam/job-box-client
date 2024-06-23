import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes/router";
import { ToastContainer } from "react-toastify";
import { useIsLoggedInQuery } from "./features/auth/AuthApi";
import Loading from "./components/reusable/Loading";

function App() {
  const { isLoading } = useIsLoggedInQuery();

  if (isLoading) return <Loading />;

  return (
    <>
      <RouterProvider router={router} />;
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
