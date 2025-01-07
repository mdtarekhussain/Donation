import { Link } from "react-router-dom";
import { IoLocation } from "react-icons/io5";
import { AiOutlineDollarCircle } from "react-icons/ai";
const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div className="card card-compact bg-base-100 w-full shadow-xl p-10">
      <div>
        <img src={logo} alt="Shoes" />
      </div>

      <div className="card-body">
        <h2 className="card-title text-[24px] font-[800]">{job_title}</h2>
        <p className="text-[20px] font-[600]">{company_name}</p>
        <div className=" mt-3">
          <button className="px-5  py-3 font-extrabold border text-[16px] rounded-lg border-[#7E90FE] mr-4">
            {remote_or_onsite}
          </button>
          <button className="px-5 py-3 font-extrabold border text-[16px]  mt-1 md:mt-0 rounded-lg border-[#7E90FE]">
            {job_type}
          </button>
        </div>
        <div className="flex text-[20px] gap-3 mt-3">
          <h2 className="flex">
            <IoLocation className="text-2xl mr-1" />
            {location}
          </h2>
          <h1 className="flex">
            <AiOutlineDollarCircle className="text-2xl mr-1" />
            {salary}
          </h1>
        </div>
        <div className="card-actions mt-3">
          <Link to={`/job/${id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Job;
