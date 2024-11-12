import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import { ShowCardGrid, ShowPosterGrid } from "../components/ScrollerGrid";
import { useFirebase } from "../context/firebase";
import { useEffect } from "react";
import { useApi } from "../service/useApi";
import { fetchData } from "../service/apiService";
import { Card, Placeholder } from "react-bootstrap";

const Home = () => {
  const firebase = useFirebase();
  const navigate = useNavigate();
  useEffect(() => {
    if (firebase.isUserLogedIn) {
      firebase.getAdminFirebaseId === firebase.getAdminId
        ? navigate("/dashboard")
        : navigate("/");
    }
  }, [firebase, navigate]);

  const {
    data: featuredData,
    callApi: feturedApiCall,
    isLoading: featuredLoading,
  } = useApi(fetchData);

  const {
    data: recentData,
    callApi: recentApiCall,
    isLoading: recentLoading,
  } = useApi(fetchData);

  const {
    data: latestData,
    callApi: latestApiCall,
    isLoading: latestLoading,
  } = useApi(fetchData);

  const {
    data: sliderData,
    callApi: sliderApiCall,
    isLoading: sliderLoading,
  } = useApi(fetchData);

  useEffect(() => {
    feturedApiCall("/api/section/featured");
  }, []);

  useEffect(() => {
    recentApiCall("/api/section/recent");
  }, []);

  useEffect(() => {
    latestApiCall("/api/section/latest");
  }, []);

  useEffect(() => {
    sliderApiCall("/api/sliders");
  }, []);

  console.log("featuredData", featuredData?.data?.featured?.data);
  // const featured = content?.data?.filter((item) => item?.is_featured === true);
  // const trending = content?.data?.filter((item) => item?.is_trending === true);
  // const slider = content?.data?.filter((item) => item?.slider === true);

  return (
    <>
      <Hero slider={sliderData?.data?.sliders} />
      <div
        className="container mt-5 horizontal-line"
        style={{ marginBottom: "5rem" }}
      >
        <h4 className="poppins-medium my-4 mx-4 my-4">Recent Spotlight</h4>
        {recentLoading ? (
          <div className="row">
            {
              // Show placeholders while loading
              Array.from({ length: 3 }).map((_, index) => (
                <div className="col-3" key={index}>
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
            }
          </div>
        ) : (
          <ShowCardGrid shows={recentData?.data?.recent?.data} />
        )}
      </div>
      <div
        className="container mt-5 horizontal-line"
        style={{ marginBottom: "5rem" }}
      >
        <h4 className="poppins-medium my-4 mx-4">Featured Episodes</h4>
        {featuredLoading ? (
          <div className="row">
            {
              // Show placeholders while loading
              Array.from({ length: 3 }).map((_, index) => (
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
            }
          </div>
        ) : (
          <ShowCardGrid shows={featuredData?.data?.featured?.data} />
        )}
      </div>
      <div
        className="container mt-5 horizontal-line"
        style={{ marginBottom: "5rem" }}
      >
        <h4 className="poppins-medium my-4 mx-4">Trending Episodes</h4>
        {latestLoading ? (
          <div className="row">
            {
              // Show placeholders while loading
              Array.from({ length: 3 }).map((_, index) => (
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
            }
          </div>
        ) : (
          <ShowPosterGrid shows={latestData?.data?.latest?.data} />
        )}
      </div>
    </>
  );
};

export default Home;
