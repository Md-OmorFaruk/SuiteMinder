import testimonial from "../../assets/Image/blurtesti.jpg"
import image from "../../assets/Image/card.jpg"
import image2 from "../../assets/Image/card2.jpg";
import image3 from "../../assets/Image/card3.jpg";
import image4 from "../../assets/Image/card4.jpg";

const Testimonial = () => {
      return (
        <div
          className="bg-cover bg-center mt-10 md:mt-0 h-full relative"
          style={{
            backgroundImage: `url(${testimonial})`,
          }}
        >
          <div className="hero bg-black opacity-80 h-full ">
            <div className="hero-content flex-col-reverse lg:flex-row-reverse justify-between w-full">
              {/*  */}
              <div>
                <div>
                  <div className="md:grid grid-cols-2 relative gap-5 p-16">
                    <div className="card bg-base-200 shadow-xl">
                      <figure>
                        <div className="avatar absolute">
                          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={image} />
                          </div>
                        </div>
                      </figure>
                      <div className="card-body max-w-md">
                        <h2 className="card-title font-font1">Abdul</h2>
                        <p className="font-font2">
                          Incredible professionalism, outstanding outcomes –
                          SuiteMinder transformed our vision into a
                          reality,creating an experience that surpassed all
                          expectations...
                        </p>
                      </div>
                    </div>
                    <div className="card bg-base-100 shadow-x mt-20 md:mt-0">
                      <figure>
                        <div className="avatar absolute">
                          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={image2} />
                          </div>
                        </div>
                      </figure>
                      <div className="card-body max-w-md">
                        <h2 className="card-title font-font1">Kader</h2>
                        <p className="font-font2">
                          Incredible professionalism, outstanding outcomes –
                          SuiteMinder transformed our vision into a
                          reality,creating an experience that surpassed all
                          expectations
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:grid grid-cols-2 relative md:gap-5  p-16">
                  <div className="card bg-base-100 shadow-xl">
                    <figure>
                      <div className="avatar absolute">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                          <img src={image3} />
                        </div>
                      </div>
                    </figure>
                    <div className="card-body max-w-md">
                      <h2 className="card-title font-font1">Omor</h2>
                      <p className="font-font2">
                        Incredible professionalism, outstanding outcomes –
                        SuiteMinder transformed our vision into a
                        reality,creating an experience that surpassed all
                        expectations.
                      </p>
                    </div>
                  </div>
                  <div className="card bg-base-100 shadow-x mt-20 md:mt-0">
                    <figure>
                      <div className="avatar absolute">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                          <img src={image4} />
                        </div>
                      </div>
                    </figure>
                    <div className="card-body max-w-md">
                      <h2 className="card-title font-font1">Prince</h2>
                      <p className="font-font2">
                        Incredible professionalism, outstanding outcomes –
                        SuiteMinder transformed our vision into a
                        reality,creating an experience that surpassed all
                        expectations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}
              <div>
                <h1 className="text-5xl font-bold p-0 font-font1 text-yellow-300 mt-10 md:mt-0 text-center md:text-left">
                  what are our client say!!
                </h1>
                <p className="py-6 text-white text-center md:text-left">
                  See our Exceptional Service, Outstanding Results from our
                  Customer!
                </p>
              </div>
            </div>
          </div>
        </div>
      );
};

export default Testimonial;