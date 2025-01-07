import { Link } from "react-router-dom";
import Home from "../Home/Home";

const ErrorPage = () => {
  return (
    <div>
      <h3>This Page is not Found</h3>
      <button>
        <Link to="/"> Home Page</Link>
      </button>
    </div>
  );
};

export default ErrorPage;
