import { useLoaderData } from "react-router-dom";
import Header from "../../ShareComponent/Header";
import HelmetPage from "../../ShareComponent/HelmetPage";
import RoomDetails from "./RoomDetails";
import {  useState } from "react";


const RoomPage = () => {
  const allRoom = useLoaderData()
  const [sortOption, setSortOption] = useState("Sort By Price")
  console.log(sortOption)


     
      return (
        <div className="max-w-screen-xl mx-auto">
          <HelmetPage title={"SuiteMinder | Room"} />

          <Header></Header>
          <div>
            <h1 className="text-5xl font-bold font-font1 text-yellow-500 text-center pt-14">
              Our Exclusive Room
            </h1>
            <p className="font-font2 mt-3 text-sm max-w-2xl mb-5  text-center mx-auto font-bold text-black p-3 md:p-0 ">
              Experience opulence redefined in our exclusive rooms. Unveiling a
              realm of sophistication, these rooms are meticulously designed to
              indulge your senses.
            </p>
          </div>
          <div className="flex justify-end mb-10">
            <select
              className="select select-warning w-full max-w-xs font-font2 text-lg"
              onChange={(e) => setSortOption(e.target.value)}
              value={sortOption}
            >
              <option value="Sort By Price">Sort By Price</option>
              <option value="highToLow">Price High to Low</option>
              <option value="lowToHigh">Price Low to High</option>
            </select>
          </div>
          <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
            {allRoom.map((room) => (
              <RoomDetails key={room._id} room={room}></RoomDetails>
            ))}
          </div>
        </div>
      );
};

export default RoomPage;