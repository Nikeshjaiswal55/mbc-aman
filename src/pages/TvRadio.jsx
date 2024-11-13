import React, { useEffect, useState } from "react";
import { Card, Placeholder } from "react-bootstrap";
import apiClient from "../service/apiClient";
import { useNavigate } from "react-router-dom";

export default function TVRadioList() {
  const [networkOptions, setNetworkOptions] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [bgColor, setBgColor] = useState("");

  // Function to generate a random color
  const getRandomColor = () =>
    `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  const handleMouseEnter = () => {
    setBgColor(getRandomColor());
  };

  const handleMouseLeave = () => {
    setBgColor("");
  };

  async function fetchNetworks() {
    const response = await apiClient.get(
      "https://example.com/api/tvradio/view/" // Change this to your actual API endpoint
    );
    setNetworkOptions(response.data);
    setLoading(false);
  }

  useEffect(() => {
    fetchNetworks();
  }, []);

  const navigate = useNavigate();

  return (
    <div className="container network-container">
      <div className="row">
        {isLoading
          ? // Show placeholders while loading
            Array.from({ length: 6 }).map((_, index) => (
              <div className="col-4" key={index}>
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
          : networkOptions?.map((item) => (
              <div className="col-md-4 col-6" key={item?.network_id}>
                <Card
                  className="show-card shadow-lg rounded"
                  style={{
                    backgroundColor: bgColor,
                    overflow: "hidden",
                    border: "none",
                    textAlign: "center",
                    margin: "10px",
                  }}
                  onClick={() => navigate(`/details/${item?.network_id}`)} // You can change this path for each network's detailed page
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div
                    variant="top"
                    style={{
                      height: "12rem",
                      backgroundImage: `url(${item?.image_url})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    className="d-flex justify-content-center align-items-center"
                  >
                    <h4 className="network-text poppins-semibold text-capitalize">
                      {item?.name}
                    </h4>
                  </div>
                </Card>
              </div>
            ))}
      </div>
    </div>
  );
}
