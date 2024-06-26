import { IoMdTime } from "react-icons/io";
import { IoBriefcaseOutline } from "react-icons/io5";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function JobCard({ data }) {
  return (
    <div
      className={`rounded-md bg-[#f8faff] border hover:border-gray-300 hover:-translate-y-[2px] hover:bg-white transition-all duration-300 p-4 job-box-card box-card `}
    >
      <div className="card-header">
        <h4 className="text-lg font-semibold">{data?.position}</h4>
        <div className="flex gap-x-4 gap-y-1 pt-3 text-sm items-center text-black/50 flex-wrap">
          <span className="flex gap-1 items-center">
            <IoBriefcaseOutline /> Full Time
          </span>
          <span className="flex gap-1 items-center">
            <IoMdTime /> Posted one year ago
          </span>
        </div>
      </div>
      <div className=" text-black/50 py-2">
        <p>{data?.overview}</p>
      </div>
      <div className="card-footer pt-3">
        <ul className="flex gap-4 flex-wrap pb-4">
          {data?.requirements?.map((req, index) => (
            <li key={index}>
              <span className="bg-[#ebf1fe] rounded-md hover:text-blue-400 text-black/50 py-1 px-2 text-sm">
                {req}
              </span>
            </li>
          ))}
        </ul>
        <div className="flex pt-4 justify-end">
          <Link
            to={"/job-details/" + data._id}
            className="job-card-btn text-blue-500 bg-[#e0e6f7] rounded-md hover:bg-blue-500 py-2 px-3 text-sm hover:text-white"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}

JobCard.propTypes = {
  data: PropTypes.object,
};

export default JobCard;
