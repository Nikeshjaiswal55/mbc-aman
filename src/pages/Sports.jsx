import React, { useEffect, useState } from "react";
import { Card, Placeholder } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useFirebase } from "../context/firebase";
import axios from "axios";

function SportsSeries() {
  const [sportsData, setSportsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const firebase = useFirebase();

  const fetchSportsData = async () => {
    try {
      const response = await axios.get(
        "https://script.viserlab.com/playlab/demo/api/search?category_id=3"
      );
      console.log("API response:", response.data);
      setSportsData(response.data.data || []);
    } catch (error) {
      console.error("Error fetching sports data:", error.message || error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSportsData();
  }, []);

  return (
    <div className="container" style={{ backgroundColor: "white" }}>
      <h4 className="my-3">Sports Series</h4>
      <div className="row network-container" style={{ color: "black" }}>
        {isLoading
          ? Array.from({ length: 6 }).map((_, index) => (
              <div className="col-md-4 col-6" key={index}>
                <Card className="show-card shadow-lg rounded m-2">
                  <Placeholder as={Card.Img} variant="top" style={{ height: "12rem" }} />
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
          : sportsData.length > 0
          ? sportsData.map((item) => (
              <div className="col-md-4 col-6" key={item.id}>
                <Card
                  className="show-card shadow-lg rounded"
                  style={{
                    overflow: "hidden",
                    border: "none",
                    textAlign: "center",
                    margin: "10px",
                    color: "black",
                  }}
                  onClick={() => navigate(`/video-detail/${item.id}`)}
                >
                  <Card.Img
                    variant="top"
                    style={{ height: "12rem", objectFit: "cover" }}
                    src={`${firebase.imageUrllandscape}/${item.image?.landscape || ""}`}
                    className="img-fluid"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
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
                      {item.title || "No title available"}
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
                      {item.description || "No description available"}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))
          : (
            <p className="text-center">No sports series available.</p>
          )}
      </div>
    </div>
  );
}

export default SportsSeries;
