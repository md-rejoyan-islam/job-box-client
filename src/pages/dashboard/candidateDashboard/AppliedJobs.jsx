import { useSelector } from "react-redux";
import { useGetAppliedJobsQuery } from "../../../features/job/jobApi";
import Loader from "../../../components/reusable/loader/Loader";
import { Link } from "react-router-dom";

const AppliedJobs = () => {
  const {
    user: { email },
  } = useSelector((state) => state.userState);
  const { data, isLoading } = useGetAppliedJobsQuery(email);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className="overflow-hidden px-4 py-4">
      <h1 className="text-2xl font-semibold text-center pb-3">
        My Applied Jobs
      </h1>

      <div className="overflow-x-scroll">
        <table className="border w-full border-collapse text-nowrap overflow-hidden">
          <thead>
            <tr className="border bg-blue-500/5">
              <th className="py-1 px-3 border">#</th>
              <th className="py-1 px-3 border">Company Name</th>
              <th className="py-1 px-3 border">Position</th>

              <th className="py-1 px-3 border">Location</th>
              <th className="py-1 px-3 border">View</th>
              <th className="py-1 px-3 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.data.map((job, index) => (
              <tr key={index} className="cursor-pointer hover:bg-black/5">
                <td className="py-1 px-3 border">{index + 1}</td>
                <td className="py-1 px-3 border">{job?.job?.companyName}</td>
                <td className="py-1 px-3 border">{job?.job?.position}</td>
                <td className="py-1 px-3 border">{job?.job?.location}</td>

                <td className="py-1 px-3 border text-center">
                  <Link
                    to={`/job-details/${job?.job?._id}`}
                    className="text-[12px] bg-blue-500 hover:bg-blue-600 py-[3px] px-2 rounded-sm text-white"
                  >
                    View
                  </Link>
                </td>
                <td className="py-1 px-3 border flex gap-2">
                  <button className="text-[12px] bg-blue-500 hover:bg-blue-600 py-[3px] px-2 rounded-sm text-white">
                    Edit
                  </button>
                  <button className="text-[12px] bg-red-500 hover:bg-red-600 py-[3px] px-2 rounded-sm text-white">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AppliedJobs;
