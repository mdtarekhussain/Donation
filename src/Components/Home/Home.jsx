import Banner from "../Banner/Banner";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import GoogleMap from "../GoogleMap/GoogleMap";
import JobList from "../JobLIst/JobList";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Career Hub | Home</title>
      </Helmet>
      <Banner></Banner>
      <JobList></JobList>
      <FeaturedJobs></FeaturedJobs>
      <h2>This is Home</h2>
    </div>
  );
};

export default Home;
