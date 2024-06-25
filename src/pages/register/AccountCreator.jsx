import { useNavigate } from "react-router-dom";
import candidate from "../../assets/candidate.svg";
import employer from "../../assets/employer.svg";

const AccountCreator = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen py-8 px-6">
      <h1 className="text-center my-10 text-2xl">Continue as ...</h1>
      <div className="flex justify-evenly md:flex-row flex-col gap-6">
        <div
          onClick={() => navigate("/register/candidate")}
          className="flex cursor-pointer flex-col justify-between transition-all rounded-lg p-5 border  hover:border-primary hover:shadow-2xl hover:scale-105 group"
        >
          <img className="h-5/6" src={candidate} alt="" />
          <p className="text-center text-3xl">Candidate</p>
        </div>
        <div
          onClick={() => navigate("/register/employer")}
          className="flex cursor-pointer flex-col justify-between transition-all rounded-lg p-5 border  hover:border-primary hover:shadow-2xl hover:scale-105 group"
        >
          <img className="h-[77%]" src={employer} alt="" />
          <p className="text-center text-3xl">Employer</p>
        </div>
      </div>
    </div>
  );
};

export default AccountCreator;
