import { Link } from "react-router-dom";
const MapDetails = ({ allData }) => {
  const { _id,image, title, pricePerNight, roomSize, availability, roomImages, specialOffers, reviewCount, bookNowButton, reviews, roomSummary } = allData;
  

      return (
        <div className="mb-20">
          <h1 className="text-5xl font-bold font-font1 mb-10 text-yellow-500 text-center pt-10">
            Here are Details{" "}
          </h1>
          <div className="carousel-item w-full">
            <img src={image} className=" w-full h-[85vh] object-cover" />
          </div>
          <h1 className="font-font1 text-5xl pt-3 text-black mb-4">{title}</h1>
          <h1 className="font-font1 text-2xl font-bold pt-3 text-yellow-600 mb-4">
            Special Offer :
            <span className="font-font2 text-2xl pt-3 text-black mb-4">
              {" " + specialOffers}
            </span>
          </h1>

          <div className="md:grid grid-cols-7 gap-10">
            <div className="col-span-5 ">
              <h2 className="font-font2 font-semibold"> {roomSummary}</h2>
              <h3 className="font-font1 text-3xl text-yellow-600 text-center mt-5 mb-5 font-semibold">
                More Photos{" "}
              </h3>
              <div className="md:grid grid-cols-2 gap-3">
                <img src={roomImages[0]} alt="" />
                <img src={roomImages[1]} alt="" />
              </div>
              <img
                src={roomImages[2]}
                alt=""
                className="w-full h-[40vh] object-cover mt-2"
              />
            </div>

            <div className="col-span-2 bg-black h-72">
              <h1 className="text-center bg-yellow-400 font-font1 font-font-bold text-2xl mb-4  text-black pt-5 pb-4">
                For Booking
              </h1>
              <div className="overflow-x-auto">
                <table className="table text-center">
                  {/* head */}
                  <tbody>
                    {/* row 1 */}
                    <tr>
                      <td className="font-font2 font-bold text-lg text-white">
                        Price Per Night :
                      </td>
                      <td className="font-font1 text-yellow-300 font-bold text-xl">
                        ${pricePerNight}
                      </td>
                    </tr>
                    {/* row 2 */}
                    <tr className="">
                      <td className="font-font2 font-bold text-lg  text-white">
                        Room Size:
                      </td>
                      <td className="font-font1 text-yellow-300 font-bold text-xl">
                        {roomSize}
                      </td>
                    </tr>
                    {/* row 3 */}
                    <tr>
                      <td className="font-font2 font-bold text-lg  text-white">
                        Available:
                      </td>
                      <td className="font-font1 text-yellow-300 font-bold text-xl">
                        {availability}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <Link to={`/myBookConfirm/${_id}`}>
                  {" "}
                  <button className="btn mt-10 bg-yellow-400 hover:bg-yellow-300 text-black font-font2 font-bold text-xl w-full">
                    {bookNowButton}
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold font-font1 underline mb-5 text-yellow-500 text-center pt-20 md:pt-10">
              Client Review
            </h1>
            <div className="md:flex justify-center gap-36 p-5">
              <h1 className="font-font1 font-bold text-lg text-yellow-400">
                <span className="font-font2 text-lg text-black">User :</span>
                {"  " + reviews[0].user}
              </h1>
              <p className="font-font2 text-lg text-black">
                {reviews[0].comment}
              </p>
            </div>
            <div className="md:flex justify-center gap-36 mt-4 p-5">
              <h1 className="font-font1 font-bold text-lg text-yellow-400">
                <span className="font-font2 text-lg text-black">User :</span>
                {"  " + reviews[1].user}
              </h1>
              <p className="font-font2 text-lg text-black">
                {reviews[1].comment}
              </p>
            </div>
          </div>
        </div>
      );
};

export default MapDetails;