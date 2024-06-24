// import JobCard from "../components/reusable/JobCard";
import { useGetAllJobsQuery } from "../features/job/jobApi";
import JobCard from "./JobCard";

const Jobs = () => {
  const { data, isLoading } = useGetAllJobsQuery();
  console.log(data);

  return (
    <div className="py-3 border-t">
      <div className=" p-5 rounded-2xl">
        <h1 className="font-bold text-3xl text-center">Jobs of the day</h1>
        <p className="text-black/65 py-1 text-center">
          Find your perfect job here
        </p>
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5 mt-5">
        {data?.data?.map((job, index) => (
          // <JobCard jobData={job} key={index} />
          <JobCard key={index} />
        ))}
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </div>
    </div>
  );
};

export default Jobs;
