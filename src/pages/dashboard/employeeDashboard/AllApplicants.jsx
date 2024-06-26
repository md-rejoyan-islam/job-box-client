import { Link } from "react-router-dom";
import { useGetJobsByEmployerIdQuery } from "../../../features/job/jobApi";
import { useSelector } from "react-redux";

function AllApplicants() {
  const { user } = useSelector((state) => state.userState);

  const { data } = useGetJobsByEmployerIdQuery(user?._id);
  return (
    <section className="overflow-hidden px-4 py-4">
      <h1 className="text-2xl font-semibold text-center pb-3">
        All Applicants
      </h1>

      <div className="overflow-x-scroll">
        <table className="border w-full border-collapse text-nowrap overflow-hidden">
          <thead>
            <tr className="border bg-blue-500/5">
              <th className="py-1 px-3 border">#</th>
              <th className="py-1 px-3 border">Name</th>
              <th className="py-1 px-3 border">Email</th>

              <th className="py-1 px-3 border">view</th>
              <th className="py-1 px-3 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.data.map((employer, index) => (
              <tr key={index} className="cursor-pointer hover:bg-black/5">
                <td className="py-1 px-3 border">{index + 1}</td>
                <td className="py-1 px-3 border">
                  {employer?.user?.firstName}
                </td>
                <td className="py-1 px-3 border">{employer?.user?.email}</td>

                <td className="py-1 px-3 border text-center">
                  <Link>
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

export default AllApplicants;
