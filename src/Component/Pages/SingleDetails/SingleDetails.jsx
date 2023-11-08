import { useLoaderData } from "react-router-dom";
import Header from "../../ShareComponent/Header";
import MapDetails from "./MapDetails";

const SingleDetails = () => {
      const details = useLoaderData();
      return (
            <div>
                  <Header></Header>
                  <div className="max-w-screen-xl mx-auto">
                        {
                              details.map(allData => <MapDetails
                                    key={allData._id}
                                    allData={allData}
                              ></MapDetails>)
                        }
                 </div>
                  
            </div>
      );
};

export default SingleDetails;