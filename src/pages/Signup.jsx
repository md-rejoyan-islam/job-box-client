import { useEffect, useState } from "react";
import loginImage from "../assets/login.svg";
import { useForm, useWatch } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useUserRegisterMutation } from "../features/auth/AuthApi";

const Signup = () => {
  const { handleSubmit, register, control, reset } = useForm();
  const password = useWatch({ control, name: "password" });
  const confirmPassword = useWatch({ control, name: "confirmPassword" });
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(true);

  const [userRegister, { isLoading, isSuccess }] = useUserRegisterMutation();

  useEffect(() => {
    if (password && password === confirmPassword) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [password, confirmPassword]);

  useEffect(() => {
    if (isSuccess) {
      reset();
    }
  }, [isSuccess, reset]);

  const onSubmit = (data) => {
    userRegister(data);
  };

  return (
    <div className="flex  items-center justify-center md:justify-normal py-8 gap-x-6 px-6">
      <div className="w-1/2 hidden md:block">
        <img src={loginImage} className="h-full w-full" alt="" />
      </div>
      <div className="md:w-1/2 grid place-items-center">
        <div className="bg-[#FFFAF4] w-[83vw] sm:w-fit sm:min-w-[360px] rounded-lg grid place-items-center p-7 shadow-md">
          <h1 className="mb-10 font-medium text-2xl">Sign up</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <div className="space-y-3">
              <div className="flex flex-col items-start">
                <label htmlFor="email" className="ml-5">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-input rounded-md w-full"
                  placeholder="Enter your email address"
                  {...register("email")}
                />
              </div>

              <div className="flex flex-col items-start">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  className="form-input rounded-md w-full"
                  {...register("password")}
                />
              </div>
              <div className="flex flex-col items-start">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input
                  type="password"
                  id="confirm-password"
                  placeholder="Confirm your password"
                  className="form-input rounded-md w-full"
                  {...register("confirmPassword")}
                />
              </div>
              <div className="!mt-8 ">
                <button
                  type="submit"
                  className="font-bold text-white py-3 rounded-md bg-primary w-full disabled:bg-gray-300 disabled:cursor-not-allowed"
                  disabled={disabled}
                >
                  {isLoading ? "Loading..." : "Sign up"}
                </button>
              </div>
              <div>
                <p>
                  Already have an account?{" "}
                  <span
                    className="text-primary hover:underline cursor-pointer"
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </span>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
