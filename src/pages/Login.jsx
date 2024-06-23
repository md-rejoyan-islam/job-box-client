import { useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom";
import loginImage from "../assets/login.svg";
import {
  useLoginWithGoogleMutation,
  useUserLoginMutation,
} from "../features/auth/AuthApi";
import { useEffect } from "react";

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
    <div className="flex h-screen items-center">
      <div className="w-1/2">
        <img src={loginImage} className="h-full w-full" alt="" />
      </div>
      <div className="w-1/2 grid place-items-center">
        <div className="bg-[#FFFAF4] rounded-lg grid place-items-center p-10">
          <h1 className="mb-10 font-medium text-2xl">Login</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-3">
              <div className="flex flex-col items-start">
                <label htmlFor="email" className="ml-5">
                  Email
                </label>
                <input type="email" {...register("email")} id="email" />
              </div>
              <div className="flex flex-col items-start">
                <label htmlFor="password" className="ml-5">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  {...register("password")}
                />
              </div>
              <div className="relative !mt-8">
                <button
                  type="submit"
                  className="font-bold text-white py-3 rounded-full bg-primary w-full"
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
                  className="font-bold text-white py-3 rounded-full bg-primary w-full"
                  onClick={handleGoogleLogin}
                >
                  Login with Google
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
