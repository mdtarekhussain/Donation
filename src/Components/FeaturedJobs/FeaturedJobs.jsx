import { useEffect, useState } from "react";
import Job from "../Job'/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div>
      <div className="text-center mt-16">
        <h3 className="text-[48px] font-[800]">Featured Jobs{jobs.length}</h3>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-4 mt-6 md:px-1 ">
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      <div className={dataLength === jobs.length && "hidden"}>
        <button
          onClick={() => setDataLength(jobs.length)}
          className="  mt-5 btn bg-[#4f5bac] text-[17px] text-stone-800 hover:text-pink-600  "
        >
          Show All jobs
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
