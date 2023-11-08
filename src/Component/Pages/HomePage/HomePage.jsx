import { NavLink } from "react-router-dom";
import { FaHotel } from "react-icons/fa";
import HelmetPage from "../../ShareComponent/HelmetPage";
import Newsletter from "../../ShareComponent/Newsletter";
import Testimonial from "../../ShareComponent/Testimonial";
import Promotion from "../../ShareComponent/Promotion";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import HomeRoom from "../../ShareComponent/HomeRoom";

const HomePage = () => {
 
 
  const { user, logOut } = useContext(AuthContext)
  const handleLogOut = () => {
    Swal.fire("Logout Successful");
     logOut()
       .then((result) => {
         console.log(result.user);
        
       })
       .catch((error) => {
         console.log(error);
       });
  }
      const NavItem = (
        <>
          <li>
            <NavLink
              className="font-bold"
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "black" : "white",
                background: isActive ? "#facc15" : "",
              })}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="font-bold"
              to="/room"
              style={({ isActive }) => ({
                color: isActive ? "black" : "white",
                background: isActive ? "#facc15" : "",
              })}
            >
              Rooms
            </NavLink>
          </li>
          <li>
            <NavLink
              className="font-bold"
              to="/myBooking"
              style={({ isActive }) => ({
                color: isActive ? "black" : "white",
                background: isActive ? "#facc15" : "",
              })}
            >
              My Bookings
            </NavLink>
          </li>
        </>
      );
      return (
        <div>
          <HelmetPage title={"SuiteMinder | Home"} />
          <div className="relative h-screen">
            <div className="absolute w-full z-30">
              {/* Header */}
              <div className=" max-w-screen-xl mx-auto top-0 flex flex-col items-center  text-white ">
                <div className="md:navbar">
                  <div className="navbar-start flex gap-0">
                    <div className="dropdown ">
                      <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16"
                          />
                        </svg>
                      </label>
                      <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-yellow-400 rounded-box w-52"
                      >
                        {NavItem}
                      </ul>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaHotel className="text-3xl text-yellow-400"></FaHotel>
                      <a className=" normal-case text-2xl font-font1 p-0 text-[#fffcf5]">
                        SuiteMinder
                      </a>
                    </div>
                  </div>
                  <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">{NavItem}</ul>
                  </div>
                  <div className="md:navbar-end flex items-center z-30">
                    {user ? (
                      user.displayName ? (
                        <>
                          <img
                            src={user.photoURL}
                            alt=""
                            className="rounded-full w-10 mr-2"
                          />
                          <p className="btn uppercase  font-bold font-fon1 bg-[#ffe270] text-black items-center text-center mr-2">
                            {user.displayName}
                          </p>
                          <NavLink
                            onClick={handleLogOut}
                            style={({ isActive }) => ({
                              color: isActive ? "black" : "black",
                              background: isActive ? "#ffe270" : "#facc157c",
                            })}
                            className="btn bg-transparent uppercase font-bold font-fon1 text-black hover:bg-sky-400 items-center text-center "
                          >
                            Sign Out
                          </NavLink>
                        </>
                      ) : (
                        <>
                          <>
                            {user.photoURL ? (
                              <img
                                src={user.photoURL}
                                alt=""
                                className="rounded-full w-10 mr-2"
                              />
                            ) : (
                              ""
                            )}
                            <p className="btn uppercase font-bold font-fon1 bg-[#ffe270] text-black items-center text-center mr-2">
                              {user.email}
                            </p>
                            <NavLink
                              onClick={handleLogOut}
                              className="btn bg-[#ffe270]  uppercase font-bold font-fon1 text-black hover:bg-yellow-400 items-center text-center "
                            >
                              Sign Out
                            </NavLink>
                          </>
                        </>
                      )
                    ) : (
                      <>
                        <NavLink
                          to="/logIn"
                          style={({ isActive }) => ({
                            color: isActive ? "black" : "white",
                            background: isActive ? "#FACC15" : "#facc157c",
                          })}
                          className="btn border-none uppercase font-bold font-fon1 items-center text-center mr-2 "
                        >
                          Sign in
                        </NavLink>
                        <NavLink
                          to="/register"
                          style={({ isActive }) => ({
                            color: isActive ? "black" : "white",
                            background: isActive ? "#FACC15" : "#facc157c",
                          })}
                          className="btn border-none uppercase font-bold font-fon1 items-center text-center "
                        >
                          Register
                        </NavLink>
                      </>
                    )}
                  </div>
                </div>
              </div>
              {/* Hero Content */}
            </div>

            <div className="absolute top-0 left-0 w-full h-full z-10 ">
              <video
                className="object-cover w-full h-full "
                autoPlay
                muted
                loop
              >
                <source
                  src="/src/assets/Video/HeroSection.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col items-center justify-center text-white z-20">
              <div className=" p-10 rounded-lg text-center  mt-20 md:mt-0 bg-[#00000073] space-y-5">
                <h1 className=" font-bold mb-2 font-font1 text-5xl text-[#fffcf5]">
                  Seamless Hotel Room Booking at Your Fingertips!
                </h1>
                <p className="mb-4 max-w-5xl text-center mx-auto font-font2 text-sm">
                  Stress-free journey with our seamless hotel room booking
                  experience, where your perfect stay is just a few clicks away.
                  Our user-friendly platform ensures effortless reservations,
                  allowing you to plan your trip with ease.
                </p>
                <a className="btn  bg-yellow-500 text-black font-bold border-none font-font2">
                  For More
                </a>
                <div></div>
              </div>
            </div>
          </div>
          <Promotion></Promotion>
          <HomeRoom></HomeRoom>
          <Newsletter></Newsletter>
          <Testimonial></Testimonial>

        </div>
      );
};

export default HomePage;