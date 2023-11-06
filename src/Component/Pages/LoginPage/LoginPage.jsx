import { Link, useLocation, useNavigate } from "react-router-dom";
import Header from "../../../Component/ShareComponent/Header";
import backgroundImage from "../../../assets/Image/32265.jpg";
import { FcGoogle } from "react-icons/fc";
import HelmetPage from "../../ShareComponent/HelmetPage"
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";


const LoginPage = () => {
  const navigate = useNavigate();
  const { logIn, google } = useContext(AuthContext);
  const location= useLocation()
    const handleSignIn = (e) => {
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;

      const registerInfo = { email, password };
      console.log(registerInfo);

      logIn(email, password)
        .then((result) => {
          console.log(result.user);
          Swal.fire("Login Successful");
          navigate(location?.state ? location?.state : "/");
        })
        .catch((error) => {
          console.log(error);
        });
      form.reset()
  };
  const handleGoogleSignIn = () => {
    google()
      .then((result) => {
        navigate("/");
        console.log(result.user);
      
      })
      .catch((error) => {
        console.log(error)
      });
  }
  return (
    <div>
      <HelmetPage title={"SuiteMinder | Login"} />
      <Header></Header>
      <div>
        <div
          className="bg-cover bg-center p-10 mt-10 md:mt-0"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        >
          <div>
            <div className="max-w-4xl mx-auto p-5 md:p-10 shadow-md shadow-yellow-500 bg-black bg-opacity-70 z-30">
              <div className="text-center mb-10">
                <h1 className="font-font1 font-bold text-5xl p-4 text-[#facc15]">
                  Sign In
                </h1>
                <p className="font-font2 text-white text-sm">
                  Welcome! Please sign in to access our services and enjoy a
                  personalized experience. Your journey with us begins here.
                  Thank you for choosing us.
                </p>
              </div>
              <form onSubmit={handleSignIn}>
                <div className="md:flex">
                  <button className="  hover:border-none join-item rounded-r-full font-font1 text-white min-w-[90px]">
                    Email:
                  </button>
                  <input
                    type="email"
                    name="email"
                    className="input input-bordered join-item  w-full"
                    placeholder="Email"
                  />
                </div>{" "}
                <br />
                <div className="md:flex">
                  <button className="  hover:border-none join-item rounded-r-full font-font1 text-white min-w-[90px]">
                    Pass:
                  </button>
                  <input
                    type="password"
                    name="password"
                    className="input input-bordered join-item w-full"
                    placeholder="Password"
                  />
                </div>
                <div className="text-center mt-5">
                  <input
                    type="submit"
                    value="Sign In"
                    className="text-black font-font1 bg-[#facc15] py-4 px-10 rounded-md hover:bg-sky-600"
                  />
                </div>
                <p className="text-white font-font1 text-md text-center pt-5">
                  New here? Click here to{" "}
                  <Link to="/register">
                    <span className="text-[#facc15]"> Registration</span>
                  </Link>
                </p>
                <div className="divider font-font1 text-[#facc15] font-bold">
                  OR
                </div>
                <div onClick={handleGoogleSignIn}>
                  <button className="text-black hover:bg-slate-300 font-font1 text-md text-center mt-5 bg-white rounded-xl flex items-center max-w-fit mx-auto py-5 px-7">
                    <FcGoogle className="text-2xl mr-2"></FcGoogle>
                    <p>Sign In with Google</p>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
