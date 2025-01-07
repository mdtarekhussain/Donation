import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/LocalStorage";
import Uai from "../Uai/Uai";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJob, setAppliedJob] = useState([]);
  const [display, setDisplay] = useState([]);
  const handleJobFilter = (filter) => {
    if (filter === "all") {
      setDisplay(appliedJob);
    } else if (filter === "remote") {
      const remote = appliedJob.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplay(remote);
    } else if (filter === "onsite") {
      const onsiteJob = appliedJob.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplay(onsiteJob);
    }
  };
  useEffect(() => {
    const storedJobId = getStoredJobApplication();
    if (jobs.length > 0) {
      // const jobsApplied = jobs.filter((job) => storedJobId.includes(job.id));
      const jobApplied = [];
      for (const id of storedJobId) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          jobApplied.push(job);
        }
      }
      setAppliedJob(jobApplied);
      setDisplay(jobApplied);
      // console.log(jobs, storedJobId, jobApplied);
    }
  }, [jobs]);
  return (
    <div>
      <h3>Applied Jobs : {appliedJob.length}</h3>
      <div className="dropdown dropdown-hover  flex justify-end mt-2">
        <div tabIndex={0} role="button" className="btn m-1">
          Hover
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li onClick={() => handleJobFilter("all")}>
            <a>All</a>
          </li>
          <li onClick={() => handleJobFilter("remote")}>
            <a>Remote</a>
          </li>
          <li onClick={() => handleJobFilter("onsite")}>
            <a>Onsite</a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-5  mt-5">
        {display.map((jobLocal) => (
          <Uai key={jobLocal.id} jobLocal={jobLocal}></Uai>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
