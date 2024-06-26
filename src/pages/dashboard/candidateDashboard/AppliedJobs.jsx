import { useSelector } from "react-redux";
import { useGetAppliedJobsQuery } from "../../../features/job/jobApi";
import Loader from "../../../components/reusable/loader/Loader";
import JobCard from "../../../components/job/JobCard";

const AppliedJobs = () => {
  const {
    user: { email },
  } = useSelector((state) => state.userState);
  const { data, isLoading } = useGetAppliedJobsQuery(email);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <h1 className="text-xl py-5">Applied jobs</h1>
      <div className="grid grid-cols-2 gap-5 pb-5">
        {data?.data?.map((job, index) => (
          <JobCard jobData={job} key={index} />
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
