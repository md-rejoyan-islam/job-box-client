import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import meeting from "../../assets/meeting.jpg";
import { BsArrowRightShort } from "react-icons/bs";
import {
  useApplyForJobMutation,
  useGetJobByIdQuery,
} from "../../features/job/jobApi";
import Loading from "../../components/reusable/loader/Loader";
import { useSelector } from "react-redux";
import Chat from "../../components/job/Chat";

const JobDetails = () => {
  const { id } = useParams();
  const pathLocation = useLocation();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.userState);

  const [apply] = useApplyForJobMutation();

  const { data: { data: job = {} } = {}, isLoading } = useGetJobByIdQuery(id, {
    // pollingInterval: 1000,
  });

  // handle apply for job
  const handleApply = () => {
    if (!user) {
      return navigate("/login", {
        state: { from: pathLocation },
      });
    }

    const data = {
      user: user?._id,
      job: id,
      employer: job?.employer,
    };

    apply(data);
  };

  if (isLoading) {
    return <Loading />;
  }

  if (!job) {
    return (
      <div className="h-[calc(100vh-67px)] w-full text-center grid place-content-center px-8">
        <div>
          <h3 className="text-8xl text-center  text-red-500 font-semibold">
            404
          </h3>
          <p className="text-lg py-4">Invalid job URL</p>
          <Link
            to={"/jobs"}
            className="bg-violet-500 text-white py-2 px-5 rounded-md"
          >
            Back
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-4 pb-6 grid grid-cols-12 gap-5">
      <div className="col-span-12 lg:col-span-8 mb-4 lg:mb-10">
        <div className="h-80 rounded-xl overflow-hidden">
          <img className="h-full w-full object-cover" src={meeting} alt="" />
        </div>
        <div className="space-y-5">
          <div className="flex justify-between items-center mt-5">
            <h1 className="text-xl font-semibold text-primary">
              {job?.position}
            </h1>
            <button className="btn " onClick={handleApply}>
              Apply
            </button>
          </div>
          <div>
            <h1 className="text-primary text-lg font-semibold mb-3">
              Overview
            </h1>
            <p>{job?.overview}</p>
          </div>
          <div>
            <h1 className="text-primary text-lg font-semibold mb-3">Skills</h1>
            <ul>
              {job?.skills?.map((skill, index) => (
                <li className="flex items-center gap-1" key={index}>
                  <BsArrowRightShort />
                  <span className="pb-[2px]"> {skill}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h1 className="text-primary text-lg font-semibold mb-3">
              Requirements
            </h1>
            <ul>
              {job?.requirements?.map((skill, index) => (
                <li className="flex items-center gap-1" key={index}>
                  <BsArrowRightShort />{" "}
                  <span className="pb-[2px]">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h1 className="text-primary text-lg font-semibold mb-3">
              Responsibilities
            </h1>
            <ul>
              {job?.responsibilities?.map((skill, index) => (
                <li className="flex items-center gap-1" key={index}>
                  <BsArrowRightShort />{" "}
                  <span className="pb-[2px]">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <hr className="my-5 hidden lg:block" />

        {/* // Chat component */}
        <div className="hidden lg:block">
          <Chat queries={job?.queries} id={id} />
        </div>
      </div>
      <div className="col-span-12 lg:col-span-4">
        <div className="rounded-xl border p-4 bg-primary/5  lg:p-5 text-primary space-y-5">
          <div>
            <p>Experience</p>
            <h1 className="font-semibold text-lg">{job?.experience}</h1>
          </div>
          <div>
            <p>Work Level</p>
            <h1 className="font-semibold text-lg">{job?.workLevel}</h1>
          </div>
          <div>
            <p>Employment Type</p>
            <h1 className="font-semibold text-lg">{job?.employmentType}</h1>
          </div>
          <div>
            <p>Salary Range</p>
            <h1 className="font-semibold text-lg">{job?.salaryRange}</h1>
          </div>
          <div>
            <p>Location</p>
            <h1 className="font-semibold text-lg">{job?.location}</h1>
          </div>
        </div>
        <div className="mt-5 rounded-xl  border p-4 bg-primary/5  lg:p-5 text-primary space-y-5">
          <div>
            <h1 className="font-semibold text-lg">{job?.companyName}</h1>
          </div>
          <div>
            <p>Company Size</p>
            <h1 className="font-semibold text-lg">Above 100</h1>
          </div>
          <div>
            <p>Founded</p>
            <h1 className="font-semibold text-lg">2001</h1>
          </div>
          <div>
            <p>Email</p>
            <h1 className="font-semibold text-lg">company.email@name.com</h1>
          </div>
          <div>
            <p>Company Location</p>
            <h1 className="font-semibold text-lg">{job?.location}</h1>
          </div>
          <div>
            <p>Website</p>
            <a className="font-semibold text-lg" href="#">
              https://website.com
            </a>
          </div>
        </div>
      </div>
      {/* // Chat component */}
      <div className="lg:hidden  col-span-12 ">
        <Chat queries={job?.queries} id={id} />
      </div>
    </div>
  );
};

export default JobDetails;
