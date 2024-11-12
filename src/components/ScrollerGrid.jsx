import { Card, Container } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { useFirebase } from "../context/firebase";

// const shows = [
//   {
//     title: "Show 1",
//     description: "Description of show 1",
//     image:
//       "https://img.freepik.com/premium-psd/movie-poster-design-template_841014-16988.jpg?w=360",
//   },
//   {
//     title: "Show 2",
//     description: "Description of show 4",
//     image:
//       "https://rukminim2.flixcart.com/image/850/1000/jf8khow0/poster/a/u/h/small-hollywood-movie-poster-blade-runner-2049-ridley-scott-original-imaf3qvx88xenydd.jpeg?q=20&crop=false",
//   },
//   {
//     title: "Show 3",
//     description: "Description of show 2",
//     image:
//       "https://m.media-amazon.com/images/I/61S+YHHA6xL._AC_UF1000,1000_QL80_.jpg",
//   },
//   {
//     title: "Show 4",
//     description: "Description of show 3",
//     image:
//       "https://m.media-amazon.com/images/I/61S+YHHA6xL._AC_UF1000,1000_QL80_.jpg",
//   },
//   {
//     title: "Show 5",
//     description: "Description of show 5",
//     image:
//       "https://i5.walmartimages.com/seo/The-Road-movie-POSTER-Style-D-11-x-17-2009_4049449d-790f-480d-90b9-89f6d4221d9e.2c3e8a4e9d9eb2db3fd69794a9447510.jpeg",
//   },
//   {
//     title: "Show 6",
//     description: "Description of show 6",
//     image:
//       "https://www.arthipo.com/image/cache/catalog/poster/movie/759-1554/pfilm1352-the-road_f64a1fd0-film-movie-posters-cinema-kanvas-tablo-canvas-1000x1000h.webp",
//   },
// ];

export const ShowCardGrid = ({ shows }) => {
  const firebase = useFirebase();
  const navigate = useNavigate();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024, // Large screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768, // Medium screens (Tablets)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576, // Small screens (Mobile)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container className="slider-container">
      <Slider {...settings}>
        {shows?.map((show, index) => (
          <Card
            key={index}
            className="show-card shadow-lg rounded"
            style={{
              overflow: "hidden",
              border: "none",
              textAlign: "center",
              margin: "10px",
            }}
            onClick={() => navigate(`/video-detail/${show?.id}`)}
          >
            <Card.Img
              variant="top"
              style={{
                height: "12rem",
                objectFit: "cover",
              }}
              src={`${firebase.imageUrllandscape}${show?.image?.landscape}`}
              className="img-fluid"
            />
            <Card.Body>
              <Card.Title
                className="poppins-regular"
                style={{
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                  padding: "0px",
                  marginBottom: "2px",
                }}
              >
                {show?.title}
              </Card.Title>
              <Card.Text
                className="poppins-regular "
                style={{
                  fontSize: "1rem",
                  padding: "0px",
                  marginBottom: "2px",
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 2,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {show?.description}
              </Card.Text>
              <Card.Text
                className="poppins-regular my-1"
                style={{ fontSize: "1rem", padding: "0px" }}
              >
                {show?.ratings} <FaStar color="yellow" className=" m-0 p-0" />
              </Card.Text>

              <Card.Text
                className="poppins-regular  my-1 "
                style={{ fontSize: "1rem", padding: "0px" }}
              >
                <FaEye className="me-2" />
                {show?.view} views
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Slider>
    </Container>
  );
};

export const ShowPosterGrid = ({ shows }) => {
  const firebase = useFirebase();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024, // Large screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768, // Medium screens (Tablets)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576, // Small screens (Mobile)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  const navigate = useNavigate();
  return (
    <Container className="slider-container">
      <Slider {...settings}>
        {shows?.map((show, index) => (
          <Card key={index}>
            <Card.Img
              variant="top"
              className="img-fluid card-img-top"
              src={`${firebase.imageUrlPortrait}${show?.image.portrait}`}
              onClick={() => navigate(`/video-detail/${show?.id}`)}
            />
            <Card.Body>
              <Card.Title>{show.title}</Card.Title>
              {/* <Card.Text>{show.description}</Card.Text> */}
            </Card.Body>
          </Card>
        ))}
      </Slider>
    </Container>
  );
};

export const NetworkScroller = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 8,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024, // Large screens
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 768, // Medium screens (Tablets)
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 576, // Small screens (Mobile)
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {data?.map((show, index) => (
        <div>
          <img
            variant="top"
            className="img-fluid network-img-top"
            // src={show.horizontol_poster}
            src="https://cdn.pixabay.com/photo/2014/06/03/19/38/board-361516_640.jpg"
          />
        </div>
      ))}
    </Slider>
  );
};
