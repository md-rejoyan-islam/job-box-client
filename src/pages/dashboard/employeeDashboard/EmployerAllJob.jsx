import { Link } from "react-router-dom";
import {
  useDeleteJobByIdMutation,
  useGetAllJobsQuery,
} from "../../../features/job/jobApi";
import { toast } from "react-toastify";

function EmployerAllJob() {
  const { data } = useGetAllJobsQuery();

  const [deleteJob] = useDeleteJobByIdMutation();

  // handle delete

  const handleDeleteJob = async (id) => {
    const payload = await deleteJob(id);

    console.log(payload);
    if (payload?.data?.success) {
      toast.success("Successfully delete a job");
    }
  };

  return (
    <section className="overflow-hidden px-4 py-10">
      <h1 className="w-full text-xl font-semibold sm:text-3xl text-center text-primary mb-7">
        Employer All Job
      </h1>

      <div className="overflow-x-scroll">
        <table className="border w-full border-collapse text-nowrap overflow-hidden">
          <thead>
            <tr className="border bg-blue-500/5">
              <th className="py-1 px-3 border">#</th>
              <th className="py-1 px-3 border">Job Title</th>
              <th className="py-1 px-3 border">Experince</th>
              <th className="py-1 px-3 border">Job Location</th>
              <th className="py-1 px-3 border">Employment Type</th>
              <th className="py-1 px-3 border">Salary</th>
              <th className="py-1 px-3 border">view</th>
              <th className="py-1 px-3 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.data.map((job, index) => (
              <tr key={index} className="cursor-pointer hover:bg-black/5">
                <td className="py-1 px-3 border">{index + 1}</td>
                <td className="py-1 px-3 border">{job?.position}</td>
                <td className="py-1 px-3 border">{job?.experience}</td>
                <td className="py-1 px-3 border">{job?.location}</td>
                <td className="py-1 px-3 border">{job?.employmentType}</td>
                <td className="py-1 px-3 border">{job?.salaryRange}</td>
                <td className="py-1 px-3 border text-center">
                  <Link to={"/job-details/" + job._id}>
                    <button className="text-[12px] bg-blue-500 hover:bg-blue-600 py-[3px] px-2 rounded-sm text-white">
                      View
                    </button>
                  </Link>
                </td>
                <td className="py-1 px-3 border flex gap-2">
                  <button className="text-[12px] bg-blue-500 hover:bg-blue-600 py-[3px] px-2 rounded-sm text-white">
                    Edit
                  </button>
                  <button
                    className="text-[12px] bg-red-500 hover:bg-red-600 py-[3px] px-2 rounded-sm text-white"
                    onClick={() => handleDeleteJob(job._id)}
                  >
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
}

export default EmployerAllJob;
