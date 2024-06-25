import { useForm, useWatch } from "react-hook-form";
import { Link } from "react-router-dom";
import { FaRegIdCard, FaUserGraduate } from "react-icons/fa";
import { useUserRegisterMutation } from "../../features/user/userApi";
import { useSelector } from "react-redux";
import { useGetCountriesQuery } from "../../features/others/otherApi";
import Loading from "../../components/reusable/loader/Loader";

const CandidateRegistration = () => {
  const { user } = useSelector((state) => state.userState);

  const { handleSubmit, register, control } = useForm({
    defaultValues: {
      email: user?.email,
      country: "Bangladesh",
    },
  });
  const term = useWatch({ control, name: "term" });

  const [userRegister] = useUserRegisterMutation();

  const { data: countries, isLoading } = useGetCountriesQuery();

  const onSubmit = (values) => {
    const data = {
      ...values,
      role: "candidate",
      candidate: {
        skills: values.skills,
        experience: values.experience,
        education: values.education,
        country: values.country,
        address: values.address,
        city: values.city,
        postcode: values.postcode,
      },
    };
    userRegister(data);
  };

  if (isLoading) return <Loading />;

  return (
    <div className="pt-2 px-1 pb-6">
      <div className="breadcrumbs text-sm">
        <ul>
          <li>
            <Link to={"/register"}>
              <FaRegIdCard className="text-[17px] mr-1" />
              Register
            </Link>
          </li>
          <li>
            <Link to={"/register/candidate"}>
              <FaUserGraduate className="text-[17px] mr-1" />
              Candidate
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
          {/* <hr className="w-full mt-2 bg-black" /> */}
          <div className="flex flex-col w-full min-[854px]:max-w-xs">
            <label className="mb-3" htmlFor="country">
              Country
            </label>
            <select
              {...register("country")}
              id="country"
              defaultValue={
                // bangladesh selected by default
                countries?.length &&
                countries?.find(
                  (country) => country.name?.common === "Bangladesh"
                )?.name?.common
              }
              className="rounded-[4px] border border-gray-300 p-2 w-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              {countries?.length &&
                [...countries]
                  ?.sort((a, b) => a.name?.common.localeCompare(b.name?.common))
                  ?.map(({ name }, index) => (
                    <option key={index} value={name?.common}>
                      {name?.common}
                    </option>
                  ))}
            </select>
          </div>
          <div className="flex flex-col w-full min-[854px]:max-w-xs">
            <label className="mb-2" htmlFor="address">
              Street Address
            </label>
            <input
              type="text"
              {...register("address")}
              id="address"
              className="rounded-[4px] border border-gray-300 p-2 w-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          <div className="flex flex-col w-full min-[854px]:max-w-xs">
            <label className="mb-2" htmlFor="city">
              City
            </label>
            <input
              type="text"
              {...register("city")}
              id="city"
              className="rounded-[4px] border border-gray-300 p-2 w-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          <div className="flex flex-col w-full min-[854px]:max-w-xs">
            <label className="mb-2" htmlFor="postcode">
              Postal Code
            </label>
            <input
              type="text"
              {...register("postcode")}
              id="postcode"
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

export default CandidateRegistration;
