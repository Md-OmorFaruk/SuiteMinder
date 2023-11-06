import newsLetter from "../../assets/Image/7119119_3459559-removebg-preview.png"
const Newsletter = () => {
      return (
        <div className="bg-white mb-16">
          <div>
            <h1 className="font-font1 font-bold text-5xl p-4 text-[#facc15] text-center mt-10 md:mt-0">
              Join Our Newsletter
            </h1>
            <p className="font-font2 text-sm max-w-2xl text-center mx-auto font-bold text-black p-3 md:p-0 ">
              Subscribe to our newsletter and dive into a world of endless
              possibilities. By joining our community, you'll stay in the loop
              with the latest trends, exclusive offers, and exciting updates
              delivered directly to your inbox.
            </p>
          </div>
          <div className="hero ">
            <div className="hero-content flex-col md:flex-row lg:gap-44">
              <div className="text-center lg:text-left">
                <img src={newsLetter} alt="" className="" />
              </div>
              <div className="card flex-shrink-0 w-full max-w-lg  bg-base-100">
                <form className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-font1 text-xl">
                        Email
                      </span>
                    </label>
                    <input
                      type="email"
                      placeholder="email"
                      className="input input-bordered"
                      required
                    />
                  </div>

                  <div className="form-control mt-6">
                    <button className="btn bg-[#facc15] font-font2">
                      Subscribe Now!
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
};

export default Newsletter;