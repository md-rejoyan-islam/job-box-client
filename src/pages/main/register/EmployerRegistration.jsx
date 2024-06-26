import { useForm, useWatch } from "react-hook-form";
import { Link } from "react-router-dom";
import { FaRegIdCard, FaUserGraduate } from "react-icons/fa";
import { useUserRegisterMutation } from "../../../features/user/userApi";
import { useSelector } from "react-redux";

const EmployerRegistration = () => {
  const { user } = useSelector((state) => state.userState);

  const [userRegister] = useUserRegisterMutation();

  const { handleSubmit, register, control } = useForm({
    defaultValues: {
      email: user?.email,
    },
  });
  const term = useWatch({ control, name: "term" });

  const businessCategory = [
    "Automotive",
    "Business Support & Supplies",
    "Computers & Electronics",
    "Construction & Contractors",
    "Design Agency",
    "Education",
    "Entertainment",
    "Food & Dining",
    "Health & Medicine",
    "Home & Garden",
    "IT Farm",
    "Legal & Financial",
    "Manufacturing, Wholesale, Distribution",
    "Merchants (Retail)",
    "Miscellaneous",
    "Personal Care & Services",
    "Real Estate",
    "Travel & Transportation",
  ];

  const employeeRange = ["1 - 10", "11 - 50", "51 - 100", "Above 100"];

  const onSubmit = (values) => {
    const data = {
      ...values,
      role: "employer",
      employer: {
        companyName: values.companyName,
        companyCategory: values.companyCategory,
        employeeRange: values.employeeRange,
        roleInCompany: values.roleInCompany,
      },
    };

    // delete some data
    delete data.companyName;
    delete data.companyCategory;
    delete data.employeeRange;
    delete data.roleInCompany;

    // user register
    userRegister({
      ...data,
      applicants: [],
      queries: [],
    });
  };

  return (
    <div className="pt-3 pb-6">
      <div className="breadcrumbs text-sm">
        <ul>
          <li>
            <Link to={"/register"}>
              <FaRegIdCard className="text-[17px] mr-1" />
              Register
            </Link>
          </li>
          <li>
            <Link to={"/register/employer"}>
              <FaUserGraduate className="text-[17px] mr-1" />
              Employer
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex justify-center items-center overflow-auto p-3 sm:p-6 md:p-10">
        <form
          className="bg-secondary/20 shadow-lg p-5 sm:p-8 md:p-10 rounded-2xl flex flex-wrap gap-3 max-w-3xl   border justify-between"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="w-full text-2xl text-primary mb-5">Candidate</h1>
          <div className="flex flex-col w-full min-[854px]:max-w-xs">
            <label className="mb-2" htmlFor="firstName">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              {...register("firstName")}
              className="rounded-[4px] border border-gray-300 p-2 w-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          <div className="flex flex-col w-full min-[854px]:max-w-xs">
            <label className="mb-2" htmlFor="lastName">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              {...register("lastName")}
              className="rounded-[4px] border border-gray-300 p-2 w-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          <div className="flex flex-col w-full min-[854px]:max-w-xs">
            <label className="mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              disabled
              {...register("email")}
              className="rounded-[4px] border border-gray-300 p-2 w-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          <div className="flex flex-col w-full min-[854px]:max-w-xs">
            <h1 className="mb-3">Gender</h1>
            <div className="flex gap-3">
              <div>
                <input
                  type="radio"
                  id="male"
                  {...register("gender")}
                  value="male"
                />
                <label className="ml-2 text-lg" htmlFor="male">
                  Male
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="female"
                  {...register("gender")}
                  value="female"
                />
                <label className="ml-2 text-lg" htmlFor="female">
                  Female
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="other"
                  {...register("gender")}
                  value="other"
                />
                <label className="ml-2 text-lg" htmlFor="other">
                  Other
                </label>
              </div>
            </div>
          </div>
          <hr className="w-full mt-2 bg-black" />
          <div className="flex flex-col w-full min-[854px]:max-w-xs">
            <label className="mb-2" htmlFor="companyName">
              Company&apos;s name
            </label>
            <input
              type="text"
              {...register("companyName")}
              id="companyName"
              className="rounded-[4px] border border-gray-300 p-2 w-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          <div className="flex flex-col w-full min-[854px]:max-w-xs">
            <label className="mb-3" htmlFor="employeeRange">
              Number of employee
            </label>
            <select
              {...register("employeeRange")}
              id="employeeRange"
              className="rounded-[4px] border border-gray-300 p-2 w-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              {employeeRange
                .sort((a, b) => a.localeCompare(b))
                .map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
            </select>
          </div>

          <div className="flex flex-col w-full min-[854px]:max-w-xs">
            <label className="mb-3" htmlFor="companyCategory">
              Company&apos;s Category
            </label>
            <select
              {...register("companyCategory")}
              id="companyCategory"
              className="rounded-[4px] border border-gray-300 p-2 w-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              {businessCategory
                .sort((a, b) => a.localeCompare(b))
                .map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
            </select>
          </div>
          <div className="flex flex-col w-full min-[854px]:max-w-xs">
            <label className="mb-2" htmlFor="roleInCompany">
              Your role in company
            </label>
            <input
              type="text"
              {...register("roleInCompany")}
              id="roleInCompany"
              className="rounded-[4px] border border-gray-300 p-2 w-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          <div className="flex justify-between items-center w-full mt-3">
            <div className="flex  w-full min-[854px]:max-w-xs items-center">
              <input
                className="mr-3"
                type="checkbox"
                {...register("term")}
                id="terms"
              />
              <label htmlFor="terms">I agree to terms and conditions</label>
            </div>
            <button
              disabled={!term}
              className="rounded-md border  py-2 px-3 hover:text-white hover:scale-x-105 transition-all duration-100 hover:bg-blue-500 disabled:text-white disabled:bg-gray-300 disabled:hover:hidden "
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployerRegistration;
