import { useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom";
import loginImage from "../assets/login.svg";
import google from "../assets/google.png";
import {
  useLoginWithGoogleMutation,
  useUserLoginMutation,
} from "../features/auth/AuthApi";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const [userLogin, { isLoading, isSuccess }] = useUserLoginMutation();
  const [googleLogin, {}] = useLoginWithGoogleMutation();

  const onSubmit = (data) => {
    userLogin({ email: data.email, password: data.password });
  };

  const handleGoogleLogin = () => {
    googleLogin();
  };
  return (
    <div className="flex h-full items-center justify-center md:justify-normal py-8 gap-x-4">
      <div className="basis-1/2 hidden md:block">
        <img src={loginImage} className="h-full w-full" alt="" />
      </div>
      <div className=" basis-1/2 grid place-items-center">
        <div className="bg-[#FFFAF4] w-[83vw] sm:w-fit  sm:min-w-[380px] rounded-lg grid place-items-center p-7 shadow-md">
          <h1 className="mb-4 font-medium text-2xl">Login</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <div className="space-y-3">
              <div className="flex flex-col items-start">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  {...register("email")}
                  id="email"
                  className="form-input rounded-md w-full"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="flex flex-col items-start">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  {...register("password")}
                  className="form-input rounded-md w-full"
                  placeholder="Enter your password"
                />
              </div>
              <div className="relative !mt-8">
                <button
                  type="submit"
                  className="font-bold text-white py-3 rounded-md bg-primary w-full"
                >
                  {isLoading ? "Loading..." : "Login"}
                </button>
              </div>
              <div>
                <p>
                  Don&apos;t have an account?{" "}
                  <span
                    className="text-primary hover:underline cursor-pointer"
                    onClick={() => navigate("/signup")}
                  >
                    Sign up
                  </span>
                </p>
              </div>
              <div className="relative !mt-8">
                <button
                  type="button"
                  className="font-bold text-white  rounded-md  w-full flex  items-center  border border-blue-500 bg-blue-500 hover:bg-blue-600"
                  onClick={handleGoogleLogin}
                >
                  <figure className="h-full py-2.5   bg-white px-3 rounded-l-md">
                    <img src={google} className="w-7 " alt="Google" />
                  </figure>
                  <span className="block  text-white flex-1 h-full">
                    Sign in with Google
                  </span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
