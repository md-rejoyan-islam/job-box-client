import { useGetAllJobsQuery } from "../features/job/jobApi";
import JobCard from "../components/job/JobCard";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Jobs = () => {
  const { data } = useGetAllJobsQuery();

  useGSAP(() => {
    gsap
      .timeline()
      .from(".job-title", {
        delay: 0.1,
        opacity: 0,
        y: 100,
      })
      .from(".job-para", {
        delay: 0.1,
        opacity: 0,
        y: 100,
      })
      .from(".job-cards", {
        opacity: 0,
        y: 100,
      })
      .from(".job-card", {
        opacity: 0,
        y: 100,
        stagger: 0.1,
      });
  });

  return (
    <div className="py-2 pb-6 border-t">
      <div className=" px-4 py-3 rounded-2xl">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl text-center job-title">
          Jobs of the day
        </h1>
        <p className="text-black/65 job-para py-1 text-[17px] text-center">
          Find your perfect job here
        </p>
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5 mt-4 job-cards">
        {data?.data?.map((job, index) => (
          <div key={index} className="job-card">
            <JobCard data={job} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
