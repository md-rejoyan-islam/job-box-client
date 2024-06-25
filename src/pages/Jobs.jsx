import { useGetAllJobsQuery } from "../features/job/jobApi";
import JobCard from "./JobCard";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Jobs = () => {
  const { data, isLoading } = useGetAllJobsQuery();

  useGSAP(() => {
    gsap
      .timeline()
      .from(".job-title", {
        delay: 0.1,
        opacity: 0,
        y: 100,
      })
      .from(".job-cards", {
        opacity: 0,
        y: 100,
      })
      .from(".job-box", {
        opacity: 0,
        y: 100,
        stagger: 0.1,
      });
  });

  return (
    <div className="py-3 border-t">
      <div className=" p-5 rounded-2xl">
        <h1 className="font-bold text-3xl text-center job-title">
          Jobs of the day
        </h1>
        <p className="text-black/65 py-1 text-center">
          Find your perfect job here
        </p>
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5 mt-5 job-cards">
        {data?.data?.map((job, index) => (
          <div key={index} className="job-box">
            <JobCard data={job} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
