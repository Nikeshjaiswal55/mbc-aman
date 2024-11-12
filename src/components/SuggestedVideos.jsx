// components/SuggestedVideos.js

import { useNavigate } from "react-router-dom";
import Slider from "react-slick";

function SuggestedVideos() {
  const suggestedVideos = [
    {
      id: 1,
      title: "Next Video 1",
      views: "500K views",
      thumbnail: "thumbnail1.jpg",
    },
    {
      id: 2,
      title: "Next Video 2",
      views: "200K views",
      thumbnail: "thumbnail2.jpg",
    },
    {
      id: 1,
      title: "Next Video 1",
      views: "500K views",
      thumbnail: "thumbnail1.jpg",
    },
    {
      id: 2,
      title: "Next Video 2",
      views: "200K views",
      thumbnail: "thumbnail2.jpg",
    },
    {
      id: 1,
      title: "Next Video 1",
      views: "500K views",
      thumbnail: "thumbnail1.jpg",
    },
    {
      id: 2,
      title: "Next Video 2",
      views: "200K views",
      thumbnail: "thumbnail2.jpg",
    },
    // More video items...
  ];

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
    <div className="suggested-videos episode-box">
      <div className="sugested-vedio-title">
        <h6 className="mb-3 pt-3">More Episodes</h6>
      </div>
      <Slider {...settings}>
        {suggestedVideos.map((video) => (
          <div
            key={video.id}
            className="d-flex align-items-center mb-3 border-suggested-vedio rounded-4 p-1"
          >
            <img
              src="https://img.freepik.com/premium-psd/movie-poster-design-template_841014-16988.jpg?w=360"
              alt={video.title}
              width="120"
              height="70"
              className="mr-3"
              style={{
                borderTopLeftRadius: "1rem",
                borderBottomLeftRadius: "1rem",
              }}
            />
            <div className="mx-2">
              <p
                className="mb-0 mt-2 p-0 poppins-medium"
                style={{ fontSize: "14px" }}
              >
                {video.title}
              </p>
              <p className="m-0 p-0" style={{ fontSize: "12px" }}>
                {video.views}
              </p>
              <p style={{ fontSize: "10px" }}>{video.views}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SuggestedVideos;
