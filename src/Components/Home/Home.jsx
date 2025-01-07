import Banner from "../Banner/Banner";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import JobList from "../JobLIst/JobList";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <JobList></JobList>
      <FeaturedJobs></FeaturedJobs>
      <h2>This is Home</h2>
    </div>
  );
};

export default Home;
