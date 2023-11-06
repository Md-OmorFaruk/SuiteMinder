import { Link } from "react-router-dom";
import errorImage from  "../../../assets/Image/error.jpg"
const ErrorPage = () => {
      return (
        <div>
          <div className="card w-full bg-base-100 mx-auto mt-10 lg:mt-20">
            <figure className="px-10 pt-5">
              <img
                src={errorImage}
                alt="Shoes"
                className="rounded-xl max-w-md"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-yellow-500 font-font1 text-4xl">
                Error!
              </h2>
              <p className="max-w-xl mb-3 font-font2">
                Oops! Something went wrong. We're sorry for the inconvenience.
                Our team has been notified and is working to fix the issue.
              </p>
              <div className="card-actions">
                <Link to="/">
                  <button className="btn btn-primary bg-yellow-500 text-white font-bold hover:bg-yellow-400">
                    Back to Home
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
};

export default ErrorPage;