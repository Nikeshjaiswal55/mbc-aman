import React, { useEffect, useState } from "react";
import { NetworkScroller } from "../components/ScrollerGrid";
import { fetchData } from "../service/apiService";
import { useApi } from "../service/useApi";
import { Card, Placeholder } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useFirebase } from "../context/firebase";

function Browse() {
  const [networkOptions, setNetworkOptions] = useState([]);

  async function fetchNetworks() {
    const response = await apiClient.get(
      "https://mbc-eight.vercel.app/api/network/view/"
    );
    setNetworkOptions(response.data);
    return {
      data: response.data,
      isLoading: false,
      isError: false,
      isSuccess: true,
    };
  }
  const navigate = useNavigate();

  useEffect(() => {
    fetchNetworks();
  }, []);
  const {
    data: featuredData,
    callApi: feturedApiCall,
    isLoading: featuredLoading,
  } = useApi(fetchData);

  useEffect(() => {
    feturedApiCall("/api/section/featured");
  }, []);

  const firebase = useFirebase();

  return (
    <div className="container">
      <h4 className="my-3">Show and Movies</h4>
      <h5 className="mt-2">Networks</h5>
      <div className="mb-3">
        <NetworkScroller data={networkOptions?.data} />
      </div>
      <div className="row network-container">
        {featuredLoading
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
          : // Show actual data once loaded
            featuredData?.data?.featured?.data?.map((item, index) => (
              <div className="col-md-4 col-6" key={index}>
                <Card
                  className="show-card shadow-lg rounded"
                  style={{
                    overflow: "hidden",
                    border: "none",
                    textAlign: "center",
                    margin: "10px",
                  }}
                  onClick={() => navigate(`/video-detail/${item?.id}`)}
                >
                  <Card.Img
                    variant="top"
                    style={{
                      height: "12rem",
                      objectFit: "cover",
                    }}
                    src={`${firebase.imageUrllandscape}${item?.image.landscape}`}
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
                      {item.title}
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
                      {item.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))}
      </div>
    </div>
  );
}

export default Browse;
