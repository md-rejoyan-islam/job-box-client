import { useParams } from "react-router-dom";
import meeting from "../assets/meeting.jpg";
import { BsArrowRightShort } from "react-icons/bs";
import {
  useApplyForJobMutation,
  useGetJobByIdQuery,
} from "../features/job/jobApi";
import Loading from "../components/reusable/Loading";
import { useSelector } from "react-redux";
import Chat from "./Chat";
const JobDetails = () => {
  const { id } = useParams();

  const { user, role } = useSelector((state) => state.userState);

  const [apply] = useApplyForJobMutation();

  const { data, isLoading } = useGetJobByIdQuery(id);

  const {
    companyName,
    position,
    location,
    experience,
    workLevel,
    employmentType,
    salaryRange,
    skills,
    requirements,
    responsibilities,
    overview,
    queries,
    employer,
  } = data?.data || {};

  if (isLoading) {
    return <Loading />;
  }

  // handle apply for job
  const handleApply = () => {
    const data = {
      user: user?._id,
      job: id,
      employer: employer,
    };

    apply(data);
  };

  return (
    <div className="pt-4 pb-6 grid grid-cols-12 gap-5">
      <div className="col-span-12 lg:col-span-8 mb-4 lg:mb-10">
        <div className="h-80 rounded-xl overflow-hidden">
          <img className="h-full w-full object-cover" src={meeting} alt="" />
        </div>
        <div className="space-y-5">
          <div className="flex justify-between items-center mt-5">
            <h1 className="text-xl font-semibold text-primary">{position}</h1>
            <button className="btn " onClick={handleApply}>
              Apply
            </button>
          </div>
          <div>
            <h1 className="text-primary text-lg font-semibold mb-3">
              Overview
            </h1>
            <p>{overview}</p>
          </div>
          <div>
            <h1 className="text-primary text-lg font-semibold mb-3">Skills</h1>
            <ul>
              {skills?.map((skill, index) => (
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
              {requirements?.map((skill, index) => (
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
              {responsibilities?.map((skill, index) => (
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
          <Chat queries={queries} id={id} />
        </div>
      </div>
      <div className="col-span-12 lg:col-span-4">
        <div className="rounded-xl border p-4 bg-primary/5 lg:bg-primary/10 lg:p-5 text-primary space-y-5">
          <div>
            <p>Experience</p>
            <h1 className="font-semibold text-lg">{experience}</h1>
          </div>
          <div>
            <p>Work Level</p>
            <h1 className="font-semibold text-lg">{workLevel}</h1>
          </div>
          <div>
            <p>Employment Type</p>
            <h1 className="font-semibold text-lg">{employmentType}</h1>
          </div>
          <div>
            <p>Salary Range</p>
            <h1 className="font-semibold text-lg">{salaryRange}</h1>
          </div>
          <div>
            <p>Location</p>
            <h1 className="font-semibold text-lg">{location}</h1>
          </div>
        </div>
        <div className="mt-5 rounded-xl  border p-4 bg-primary/5 lg:bg-primary/10 lg:p-5 text-primary space-y-5">
          <div>
            <h1 className="font-semibold text-lg">{companyName}</h1>
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
            <h1 className="font-semibold text-lg">Los Angeles</h1>
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
        <Chat queries={queries} id={id} />
      </div>
    </div>
  );
};

export default JobDetails;
