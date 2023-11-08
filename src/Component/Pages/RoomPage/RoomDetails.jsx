import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
const RoomDetails = ({ room }) => {
  const { _id, image, title, pricePerNight } = room;
  return (
    <div className="shadow-lg shadow-yellow-300 mt-14 md:mt-0 ">
      <Link to={`/details/${_id}`}>
        <div className="relative group cursor-pointer bg-white ">
          <img
            src={image}
            alt="Preview"
            className="w-full h-[300px] object-cover rounded-t-xl"
          />
          <div className="text-center h-[120px]">
            <h1 className="font-font1 text-2xl pt-3 text-black">{title}</h1>
            <h1 className="font-font2 text-xl pt-1 text-yellow-600  font-bold">
              Price Per Night: $
              <span className="font-font1 text-xl text-black">
                {" " + pricePerNight}
              </span>
            </h1>
           
          </div>
          <div>
              <button className="btn bg-yellow-400 hover:bg-yellow-600 text-black font-font1 font-normal  w-full">
                See Details
              </button>
            </div>
        </div>
      </Link>
    </div>
  );
};

export default RoomDetails;
