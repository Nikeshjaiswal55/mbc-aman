import React, { useEffect, useState } from "react";
import { useApi } from "../service/useApi";
import { fetchData } from "../service/apiService";
import { Card, Placeholder } from "react-bootstrap";
import apiClient from "../service/apiClient";
import { useNavigate } from "react-router-dom";

export default function NetworkList() {
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
      "https://mbc-eight.vercel.app/api/network/view/"
    );
    setNetworkOptions(response.data);
    setLoading(false);
    return {
      data: response.data,
      isLoading: false,
      isError: false,
      isSuccess: true,
    };
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
          : networkOptions?.data?.map((item) => (
              <div className="col-md-4 col-6">
                <Card
                  key={item?.network_id}
                  className="show-card shadow-lg rounded"
                  style={{
                    backgroundColor: bgColor,
                    overflow: "hidden",
                    border: "none",
                    textAlign: "center",
                    margin: "10px",
                  }}
                  onClick={() => navigate("/browse")}
                >
                  <div
                    variant="top"
                    style={{
                      height: "12rem",
                    }}
                    src={item.network_image}
                    className=" d-flex justify-content-center align-items-center"
                  >
                    <h4 className="network-text poppins-semibold text-capitalize">
                      {item.name}
                    </h4>
                  </div>
                  {/* <Card.Body>
                    <Card.Title
                      className="poppins-regular text-start"
                      style={{
                        fontWeight: "bold",
                        fontSize: "1.2rem",
                        padding: "0px",
                        marginBottom: "2px",
                      }}
                    >
                      {item.name}
                    </Card.Title>
                  </Card.Body> */}
                </Card>
              </div>
            ))}
      </div>
    </div>
  );
}
