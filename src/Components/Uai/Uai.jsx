const Uai = ({ jobLocal }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    location,
    salary,
  } = jobLocal;
  return (
    <div className="flex w-full gap-8 border border-black p-8 rounded-[14px] ">
      <div className="flex items-center bg-slate-500 p-10 rounded-[20px]">
        <img className="flex justify-center w-[150px]" src={logo} alt="" />
      </div>
      <div className="flex justify-between w-full items-center ">
        <div className="space-y-4">
          <h2>{job_title}</h2>
          <p>{company_name}</p>
          <div className="flex">
            <button className="px-5  py-3 font-extrabold border text-[16px] rounded-lg border-[#7E90FE] mr-4">
              {remote_or_onsite}
            </button>
            <button className="px-5  py-3 font-extrabold border text-[16px] rounded-lg border-[#7E90FE] mr-4">
              {job_type}
            </button>
          </div>
          <div className="flex gap-4">
            <h1>{location}</h1>
            <h2>{salary}</h2>
          </div>
        </div>
        <div className="mr-3">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Uai;
