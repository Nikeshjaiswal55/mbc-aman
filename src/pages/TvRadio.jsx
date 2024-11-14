import React, { useEffect } from "react";
import { Card, Placeholder } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useFirebase } from "../context/firebase";
import { useApi } from "../service/useApi";
import { fetchData } from "../service/apiService";

function TvRadio() {
  const navigate = useNavigate();
  const firebase = useFirebase();

  const {
    data: tvRadioData,
    callApi: tvRadioDataCall,
    isLoading: tvRadioLoading,
  } = useApi(fetchData);

  console.log("tvRadioData", tvRadioData?.data);

  useEffect(() => {
    tvRadioDataCall("/api/search?category_id=1");
  }, []);

  return (
    <div className="container">
      <h4 className="my-3">TV & Radio Series</h4>
      <div className="row network-container" style={{ color: "black" }}>
        {tvRadioLoading ? (
          Array.from({ length: 6 }).map((_, index) => (
            <div className="col-md-4 col-6" key={index}>
              <Card className="show-card shadow-lg rounded m-2">
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
        ) : tvRadioData?.data?.items.data.length > 0 ? (
          tvRadioData?.data?.items.data?.map((item) => (
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
                  src={`${firebase.imageUrllandscape}/${
                    item.image?.landscape || ""
                  }`}
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
        ) : (
          <p className="text-center">No TV & Radio series available.</p>
        )}
      </div>
    </div>
  );
}

export default TvRadio;
