import React, { useEffect } from "react";
import { useApi } from "../service/useApi";
import { fetchData } from "../service/apiService";
import { Card, Placeholder } from "react-bootstrap";
import { useFirebase } from "../context/firebase";

export default function LiveTvList() {
  const {
    data: liveTvData,
    callApi: fetchLiveData,
    isLoading,
  } = useApi(fetchData);

  useEffect(() => {
    fetchLiveData("/api/live-television");
  }, []);

  const firebase = useFirebase();
  console.log(
    "liveTvData?.data?.televisions?.data",
    liveTvData?.data?.televisions?.data
  );
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
          : liveTvData?.data?.televisions?.data?.map((item) => (
              <div className="col-4">
                <Card
                  key={item?.network_id}
                  className="show-card shadow-lg rounded"
                  style={{
                    overflow: "hidden",
                    border: "none",
                    textAlign: "center",
                    margin: "10px",
                  }}
                >
                  <Card.Img
                    variant="top"
                    style={{
                      height: "12rem",
                      objectFit: "cover",
                    }}
                    src={`${firebase.globalImage}${item?.image}`}
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
                      {item?.title}
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
                      {item?.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))}
      </div>
    </div>
  );
}
