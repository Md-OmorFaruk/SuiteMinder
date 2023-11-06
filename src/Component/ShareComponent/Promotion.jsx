import promotion from "../../assets/Image/Promo.jpg"


const Promotion = () => {
      return (
        <div className="mb-10">
          <h1 className="text-5xl font-bold font-font1 text-yellow-500 text-center pt-14">
            Special Offer
          </h1>
          <p className="font-font2 mt-3 text-sm max-w-2xl text-center mx-auto font-bold text-black p-3 md:p-0 ">
            Our dream getaway awaits with enticing discounts, extraordinary
            amenities, and unparalleled hospitality. Don't miss out on this
            limited-time opportunity – book now and create unforgettable
            memories at a fraction of the cost.
          </p>
          <div className="hero min-h-[65vh] mt-0">
            <div className="hero-content flex-col lg:flex-row-reverse gap-10">
              <img src={promotion} className="md:max-w-xl rounded-lg shadow-2xl" />
              <div>
                <h1 className="text-5xl font-bold font-font1 text-black ">
                  50% OFF!!!
                </h1>
                <p className="py-6 font-font2 font-bold text-black">
                  Indulge in luxury at half the price! Enjoy a lavish hotel room
                  experience with a 50% discount, where comfort meets
                  affordability. Book now and elevate your stay without breaking
                  the bank
                </p>
                <button className="btn bg-yellow-400 text-black font-font1 font-normal">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      );
};

export default Promotion;