import { Link } from "react-router-dom";
import Header from "../../../Component/ShareComponent/Header"
import  backgroundImage  from "../../../assets/Image/blurred-messy-bed-with-white-linens-vintage-tone.jpg";
import HelmetPage from "../../ShareComponent/HelmetPage";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const RegisterPage = () => {
  const {createUser} = useContext(AuthContext)
  const handleRegister = e => {
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const email = form.email. value;
    const password = form.password.value;

    const registerInfo = { name, email, password }
    console.log(registerInfo);

    createUser(email, password)
      .then(result => {
        console.log(result.user)
        Swal.fire("Register Successful");
      })
      .catch(error => {
      console.log(error)
      })
     form.reset();
  }
      return (
        <div>
          <HelmetPage title={"SuiteMinder | Register"} />
          <Header></Header>
          <div
            className="bg-cover bg-center mt-5 p-5 md:mt-0 pb-20  h-full"
            style={{
              backgroundImage: `url(${backgroundImage})`,
            }}
          >
            <h1>hi</h1>
            <div>
              <div>
                <div className="max-w-4xl mx-auto p-5 md:p-20   shadow-xl shadow-yellow-500 bg-black bg-opacity-50 z-30">
                  <div className="text-center mb-10">
                    <h1 className="font-font1 font-bold text-5xl p-4 text-[#facc15]">
                      Register Here
                    </h1>
                    <p className="font-font2 text-white text-sm">
                      Ready to unlock exclusive benefits? Register now to create
                      your account and join our community! Enjoy seamless access
                      to our services, updates, and personalized offers.
                    </p>
                  </div>
                  <form onSubmit={handleRegister}>
                    <div className="md:flex">
                      <button className=" join-item  hover:border-none rounded-r-full font-font1 text-white min-w-[90px]">
                        Name:
                      </button>
                      <input
                        type="text"
                        name="name"
                        className="input input-bordered join-item  w-full"
                        placeholder="Name"
                      />
                    </div>
                    <br />
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
                        value="Register"
                        className="text-black font-font1 bg-[#facc15] py-4 px-10 rounded-md hover:bg-sky-600"
                      />
                    </div>
                    <p className="font-font1 text-md text-center pt-5 text-white">
                      Already Registered? Click here to{" "}
                      <Link to="/logIn">
                        <span className=" text-lg text-yellow-500">login</span>
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
};

export default RegisterPage;