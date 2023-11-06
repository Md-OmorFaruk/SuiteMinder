import { NavLink } from "react-router-dom";
import { FaHotel } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../Pages/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
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
                color: isActive ? "black" : "black",
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
                color: isActive ? "black" : "black",
                background: isActive ? "#facc15" : "",
              })}
            >
              Room
            </NavLink>
          </li>
          <li>
            <NavLink
              className="font-bold"
              to="/myBooking"
              style={({ isActive }) => ({
                color: isActive ? "black" : "black",
                background: isActive ? "#facc15" : "",
              })}
            >
              My Booking
            </NavLink>
          </li>
        </>
      );
      return (
        <div className="max-w-screen-xl mx-auto flex flex-col items-center sticky top-0 bg-white z-50">
          <div className="md:navbar ">
            <div className="navbar-start flex gap-0">
              <div className="dropdown">
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
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  {NavItem}
                </ul>
              </div>
              <div className="flex items-center gap-2">
                <FaHotel className="text-3xl "></FaHotel>
                <a className="btn btn-ghost normal-case text-2xl font-font1 p-0 text-yellow-400">
                  SuiteMinder
                </a>
              </div>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">{NavItem}</ul>
            </div>
            <div className="md:navbar-end flex items-center ">
              {user ? (
                user.displayName ? (
                  <>
                    <img
                      src={user.photoURL}
                      alt=""
                      className="rounded-full w-10 mr-2"
                    />
                    <p className="btn uppercase  font-bold font-fon1 bg-[#ffe270] text-black items-center text-center ">
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
                        className="btn bg-[#ffe270] uppercase font-bold font-fon1 text-black hover:bg-yellow-400 items-center text-center "
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
                      color: isActive ? "black" : "black",
                      background: isActive ? "#facc15" : "#facc157c",
                    })}
                    className="btn uppercase font-bold font-fon1 text-black items-center  text-center"
                  >
                    Sign in
                  </NavLink>
                  <NavLink
                    to="/register"
                    style={({ isActive }) => ({
                      color: isActive ? "black" : "black",
                      background: isActive ? "#facc15" : "#facc157c",
                    })}
                    className="btn uppercase font-bold font-fon1 text-black items-center text-center "
                  >
                    Register
                  </NavLink>
                </>
              )}
            </div>
          </div>
        </div>
      );
};

export default Header;