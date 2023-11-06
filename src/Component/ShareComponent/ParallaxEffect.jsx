import image from "../../assets/Image/pexels-josh-sorenson-59924.jpg"
const ParallaxEffect = () => {
      return (
        <div>
          <div
            className="h-[60vh] bg-fixed bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        </div>
      );
};

export default ParallaxEffect;
