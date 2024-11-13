import React, { useEffect, useState } from "react";
import { useApi } from "../service/useApi";
import { Card, Placeholder } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useFirebase } from "../context/firebase";

function SportsSeries() {
  const [sportsSeries, setSportsSeries] = useState([]);
  const navigate = useNavigate();
  const firebase = useFirebase();

  async function fetchSportsSeries() {
    const response = await fetch("https://your-api-endpoint.com/api/sports/view/");
    const data = await response.json();
    setSportsSeries(data);
  }

  const {
    data: featuredSportsData,
    callApi: fetchFeaturedSports,
    isLoading: sportsLoading,
  } = useApi(fetchSportsSeries);

  useEffect(() => {
    fetchFeaturedSports("/api/sports/featured");
  }, []);

  return (
    <div className="container">
      <h4 className="my-3" style={{ color: "white" }}>Sports Series</h4>
      <div className="row">
        {sportsLoading
          ? // Show placeholders while loading
            Array.from({ length: 6 }).map((_, index) => (
              <div className="col-md-4 col-6" key={index}>
                <Card className="sports-card shadow-lg rounded m-2" style={{ backgroundColor: "#333", color: "#eaeaea" }}>
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
            featuredSportsData?.data?.featured?.map((sport, index) => (
              <div className="col-md-4 col-6" key={index}>
                <Card
                  className="sports-card shadow-lg rounded"
                  style={{
                    overflow: "hidden",
                    backgroundColor: "#333", // Dark background color for the card
                    color: "#eaeaea", // Light text color for contrast
                    border: "none",
                    textAlign: "center",
                    margin: "10px",
                  }}
                  onClick={() => navigate(`/sports-detail/${sport?.id}`)}
                >
                  <Card.Img
                    variant="top"
                    style={{
                      height: "12rem",
                      objectFit: "cover",
                    }}
                    src={`${firebase.imageUrl}${sport?.image}`}
                    className="img-fluid"
                  />
                  <Card.Body>
                    <Card.Title
                      className="poppins-regular text-start"
                      style={{
                        fontWeight: "bold",
                        fontSize: "1.2rem",
                        color: "#eaeaea", // Light text color for title
                        padding: "0px",
                        marginBottom: "2px",
                      }}
                    >
                      {sport.title}
                    </Card.Title>
                    <Card.Text
                      className="poppins-regular text-start"
                      style={{
                        fontSize: "1rem",
                        color: "#cccccc", // Slightly lighter text for description
                        padding: "0px",
                        marginBottom: "2px",
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 2,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {sport.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))}
      </div>
    </div>
  );
}

export default SportsSeries;
