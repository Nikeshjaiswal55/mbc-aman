import { Carousel } from "react-bootstrap";
import { useFirebase } from "../context/firebase";

const Hero = ({ slider }) => {
  const firebase = useFirebase();
  console.log("slider", slider);
  return (
    <div>
      <Carousel style={{ height: "90vh" }}>
        {slider?.map((item) => (
          <Carousel.Item>
            <img
              className="d-block w-100 vignet"
              height={700}
              src={`${firebase.imageUrllandscape}${item?.item?.image?.landscape}`}
              alt="First slide"
            />
            {/* <Carousel.Caption>
            <h3>Featured Show 1</h3>
            <p>Description of featured show 1.</p>
          </Carousel.Caption> */}
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;
