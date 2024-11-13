import React, { useEffect, useState } from "react";
import { useApi } from "../service/useApi";
import { Card, Placeholder } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useFirebase } from "../context/firebase";

function PodcastSeries() {
  const [podcastSeries, setPodcastSeries] = useState([]);
  const navigate = useNavigate();
  const firebase = useFirebase();

  async function fetchPodcastSeries() {
    const response = await fetch("https://mbc-eight.vercel.app/api/podcast/view/");
    const data = await response.json();
    setPodcastSeries(data);
  }

  const {
    data: featuredPodcastData,
    callApi: fetchFeaturedPodcast,
    isLoading: podcastLoading,
  } = useApi(fetchPodcastSeries);

  useEffect(() => {
    fetchFeaturedPodcast("/api/podcast/featured");
  }, []);

  return (
    <div className="container">
      <h4 className="my-3">Podcast Series</h4>
      <div className="row">
        {podcastLoading
          ? // Show placeholders while loading
            Array.from({ length: 6 }).map((_, index) => (
              <div className="col-md-4 col-6" key={index}>
                <Card className="podcast-card shadow-lg rounded m-2">
                  <Placeholder
                    as={Card.Img}
                    variant="top"
                    style={{ height: "12rem" }}
                  />
                  <Card.Body>
                    <Placeholder as={Card.Title} animation="glow">
                      <Placeholder xs={6} />
                    </Placeholder>
                    <Placeholder as={Card.Text} animation="glow">
                      <Placeholder xs={7} /> <Placeholder xs={4} />
                      <Placeholder xs={4} /> <Placeholder xs={6} />
                    </Placeholder>
                  </Card.Body>
                </Card>
              </div>
            ))
          : // Show actual data once loaded
            featuredPodcastData?.data?.featured?.map((podcast, index) => (
              <div className="col-md-4 col-6" key={index}>
                <Card
                  className="podcast-card shadow-lg rounded"
                  style={{
                    overflow: "hidden",
                    border: "none",
                    textAlign: "center",
                    margin: "10px",
                  }}
                  onClick={() => navigate(`/podcast-detail/${podcast?.id}`)}
                >
                  <Card.Img
                    variant="top"
                    style={{
                      height: "12rem",
                      objectFit: "cover",
                    }}
                    src={`${firebase.imageUrl}${podcast?.image}`}
                    className="img-fluid"
                  />
                  <Card.Body>
                    <Card.Title
                      className="poppins-regular text-start"
                      style={{
                        fontWeight: "bold",
                        fontSize: "1.2rem",
                        padding: "0px",
                        marginBottom: "2px",
                      }}
                    >
                      {podcast.title}
                    </Card.Title>
                    <Card.Text
                      className="poppins-regular text-start"
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
                      {podcast.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))}
      </div>
    </div>
  );
}

export default PodcastSeries;
