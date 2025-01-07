import { useLoaderData, useParams } from "react-router-dom";
import { LuBadgeDollarSign } from "react-icons/lu";
import { ToastContainer, toast } from "react-toastify";
import { PiSubtitles } from "react-icons/pi";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { saveJobApplication } from "../../Utility/LocalStorage";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idINt = parseInt(id);
  const job = jobs.find((job) => job.id === idINt);
  const handleApplyJob = (e) => {
    saveJobApplication(idINt);
    toast("you have applied successfully ");
  };

  return (
    <div>
      <h2>Job details of:{id} </h2>
      <div className="grid gap-2 md:grid-cols-4">
        <div className="border col-span-3 px-10 py-8 flex flex-col gap-10 ">
          <div className="space-y-4">
            <p className="text-[16px] ">
              <span className="font-[700] text-[20px]">Job Description</span>: A
              UI/UX (User Interface/User Experience) designer is responsible for
              designing and creating engaging and effective interfaces for
              software and web applications. This includes designing the layout,
              visual design, and interactivity of the user interface.
            </p>
            <p>
              <span className="font-[700] text-[20px]">Job Responsibility</span>
              : Collaborating with cross-functional teams: UI/UX designers often
              work closely with other teams, including product management,
              engineering, and marketing, to ensure that the user interface is
              aligned with business and technical requirements. You will need to
              be able to effectively communicate your design ideas and gather
              feedback from other team members.
            </p>
            <h1 className="font-[700] text-[20px]">
              Educational Requirements:
            </h1>
            <p>Bachelor degree to complete any reputational university.</p>
            <p className="font-[700] text-[20px]">Experiences:</p>
            <p>2-3 Years in this field.</p>
          </div>
        </div>

        <div>
          <div
            className="border  w-full h-[88%] pl-3 pr-4 py-8 space-y-4 rounded-lg"
            style={{
              background:
                "linear-gradient(90deg, rgba(126, 144, 254, 0.10) 0%, rgba(152, 115, 255, 0.10) 100%)",
            }}
          >
            <h1 className="text-[20px] font-[800]">Job Details</h1>
            <br />
            <hr className="border-1 border-black " />
            <p className="text-[14px] font-[600] flex items-center">
              <LuBadgeDollarSign className=" mr-[6px] text-[20px]" />
              <span className="text-[18px] font-[800]">Salary</span> : 100K -
              150K (Per Month)
            </p>
            <p className="text-[15px] font-[600] flex items-center">
              <PiSubtitles className=" mr-[6px] text-[20px]" />
              <span className="text-[18px] font-[800]">Job Title</span> :
              Product Designer
            </p>
            <h2 className="text-[18px] font-[800]">Contact Information</h2>
            <hr className="border-1 border-black " />
            <h1 className="flex items-center">
              <FaPhoneAlt className=" mr-[6px] text-[20px]" />
              <span className="text-[18px] font-[800]">Phone</span> : 01750-00
              00 00
            </h1>
            <h2 className="flex items-center">
              <MdEmail className=" mr-[6px] text-[20px]" />
              <span className="text-[18px] font-[800]"> Email</span> :
              info@gmail.com
            </h2>
            <p className="flex text-[14px] ">
              <MdLocationPin className=" mr-[6px] text-[30px]" />
              <span className="text-[16px] -mt-[2px] font-[600]">Address </span>
              : Dhanmondi 32, Sukrabad Dhaka, Bangladesh
            </p>
          </div>
          <div>
            <button
              onClick={handleApplyJob}
              className="btn w-full h-full  bg-[#7E90FE] mt-[13px] py-[9px] rounded-lg"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;
