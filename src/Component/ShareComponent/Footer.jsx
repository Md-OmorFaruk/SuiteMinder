import { FaHotel } from "react-icons/fa";
const Footer = () => {
      return (
        <div className=" bg-gray-800">
          <footer className="footer p-10  text-base-content max-w-screen-xl mx-auto">
            <aside>
              <FaHotel className="text-3xl text-yellow-400"></FaHotel>
              <p className="text-3xl text-white font-font1">
                SuiteMinder
                <br />
                <span className="text-base text-white font-font2">
                  Providing reliable Hotel Service since 1992
                </span>
              </p>
            </aside>
            <nav>
              <header className="footer-title opacity-100 text-yellow-400">
                Services
              </header>
              <a className="link link-hover text-white">Branding</a>
              <a className="link link-hover text-white">Design</a>
              <a className="link link-hover text-white">Marketing</a>
              <a className="link link-hover text-white">Advertisement</a>
            </nav>
            <nav>
              <header className="footer-title opacity-100 text-yellow-400">
                Company
              </header>
              <a className="link link-hover text-white">About us</a>
              <a className="link link-hover text-white">Contact</a>
              <a className="link link-hover text-white">Jobs</a>
              <a className="link link-hover text-white">Press kit</a>
            </nav>
            <nav>
              <header className="footer-title opacity-100 text-yellow-400">
                Legal
              </header>
              <a className="link link-hover text-white">Terms of use</a>
              <a className="link link-hover text-white">Privacy policy</a>
              <a className="link link-hover text-white">Cookie policy</a>
            </nav>
          </footer>
        </div>
      );
};

export default Footer;