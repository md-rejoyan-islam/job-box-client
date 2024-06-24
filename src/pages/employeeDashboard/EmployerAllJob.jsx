import { Link } from "react-router-dom";
import { useGetAllJobsQuery } from "../../features/job/jobApi";

function EmployerAllJob() {
  const { data } = useGetAllJobsQuery();
  return (
    <section className="overflow-hidden px-4 py-4">
      <h1 className="text-2xl font-semibold text-center pb-3">
        Employer All Job
      </h1>

      <div className="overflow-x-scroll">
        <table className="border w-full border-collapse text-nowrap overflow-hidden">
          <thead>
            <tr className="border ">
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
              <tr key={index}>
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
}

export default EmployerAllJob;
