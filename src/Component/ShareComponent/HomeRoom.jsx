import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

const HomeRoom = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      "https://hotel-management-server-9gq04ah9z-mdomor-faruks-projects.vercel.app/rooms"
    )
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  const displayedData = data
    .map(({ _id, image, title, pricePerNight }) => ({
      _id,
      image,
      title,
      pricePerNight,
    }))
    .slice(0, 3);
  return (
    <div className="max-w-screen-xl mx-auto mb-20">
      <div className="container mx-auto mt-28 mb-32">
        <div>
          <h1 className="font-font1 font-bold text-5xl p-4 text-[#facc15] text-center mt-10 md:mt-0">
            Most Expensive Suites
          </h1>
          <p className="font-font2 text-sm max-w-2xl text-center mx-auto font-bold text-black p-3 md:p-0 mb-10">
            Experience opulence redefined in our exclusive rooms. Unveiling a
            realm of sophistication, these rooms are meticulously designed to
            indulge your senses.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {displayedData.map(({ _id, image, title, pricePerNight }) => (
            <div key={title} className="shadow-lg shadow-yellow-500">
              <Link to={`/myBookConfirm/${_id}`}>
                <div className="relative group cursor-pointer bg-[#ffffffbe] pb-8 rounded-xl">
                  <img
                    src={image}
                    alt="Preview"
                    className="w-full h-[300px]  object-cover rounded-t-xl"
                  />
                  <div className=" text-center">
                    <h1 className="font-font1 text-2xl pt-3 text-black">
                      {title}
                    </h1>
                    <h1 className="font-font2 text-lg pt-1 text-black font-bold">
                      Price Per Night: $
                      <span className="text-yellow-400 font-font1 text-xl">
                        {pricePerNight}
                      </span>
                    </h1>
                  </div>
                </div>{" "}
                <Link to={`/myBookConfirm/${_id}`}>
                  <button className="btn bg-yellow-400 hover:bg-yellow-600 text-black font-font1 font-normal pt-4 pb-4 w-full">
                    Book Now
                  </button>
                </Link>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeRoom;
