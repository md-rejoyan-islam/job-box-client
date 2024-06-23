import { useForm, useWatch } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import { useUserRegisterMutation } from "../../features/user/userApi";
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
  const navigate = useNavigate();

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
    <div className="pt-14">
      <div
        onClick={() => navigate("/register")}
        className="cursor-pointer w-fit mt-5 flex items-center"
      >
        <FaChevronLeft />
        <p>back</p>
      </div>
      <div className="flex justify-center items-center overflow-auto p-10">
        <form
          className="bg-secondary/20 shadow-lg p-10 rounded-2xl flex flex-wrap gap-3 max-w-3xl justify-between"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="w-full text-2xl text-primary mb-5">Candidate</h1>
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2" htmlFor="firstName">
              First Name
            </label>
            <input type="text" id="firstName" {...register("firstName")} />
          </div>
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2" htmlFor="lastName">
              Last Name
            </label>
            <input type="text" id="lastName" {...register("lastName")} />
          </div>
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2" htmlFor="email">
              Email
            </label>
            <input type="email" id="email" disabled {...register("email")} />
          </div>
          <div className="flex flex-col w-full max-w-xs">
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
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2" htmlFor="companyName">
              Company&apos;s name
            </label>
            <input type="text" {...register("companyName")} id="companyName" />
          </div>
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-3" htmlFor="employeeRange">
              Number of employee
            </label>
            <select {...register("employeeRange")} id="employeeRange">
              {employeeRange
                .sort((a, b) => a.localeCompare(b))
                .map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
            </select>
          </div>

          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-3" htmlFor="companyCategory">
              Company&apos;s Category
            </label>
            <select {...register("companyCategory")} id="companyCategory">
              {businessCategory
                .sort((a, b) => a.localeCompare(b))
                .map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
            </select>
          </div>
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2" htmlFor="roleInCompany">
              Your role in company
            </label>
            <input
              type="text"
              {...register("roleInCompany")}
              id="roleInCompany"
            />
          </div>

          <div className="flex justify-between items-center w-full mt-3">
            <div className="flex  w-full max-w-xs">
              <input
                className="mr-3"
                type="checkbox"
                {...register("term")}
                id="terms"
              />
              <label htmlFor="terms">I agree to terms and conditions</label>
            </div>
            <button disabled={!term} className="btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployerRegistration;
