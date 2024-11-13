import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ShowDetail } from "./pages/ShowDetail";
import { Layout } from "./components/Layout";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import AdminDashboard from "./pages/AdminDashboard";
import Users from "./pages/Users";
import { ContentList } from "./pages/ContentList";
import { AdminNetworkList } from "./pages/NetworkAdminList";
import NetworkList from "./pages/NetworkList";
import Browse from "./pages/Browse";
import PrivateRoute from "./components/PrivateRoute";
import LiveTvList from "./pages/LiveTvList";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PodcastSeries from "./pages/PostCastSeries";
import TVRadio from "./pages/TvRadio";
import CommunitySuccess from "./pages/Community";
import SupportUs from "./pages/SupportUs";

const App = () => (
  <>
    {/* <div className="position-fixed top-0" style={{ zIndex: 10, width: "100%" }}>
      <Header />
    </div> */}
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/live-tv"
          element={
            <Layout>
              <LiveTvList />
            </Layout>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Layout>
                <AdminDashboard />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/users"
          element={
            <PrivateRoute>
              <Layout>
                <Users />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/content-list"
          element={
            <PrivateRoute>
              <Layout>
                <ContentList />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/network-list"
          element={
            <PrivateRoute>
              <Layout>
                <AdminNetworkList />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="network"
          element={
            <Layout>
              <NetworkList />
            </Layout>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />

        <Route
          path="/video-detail/:content_id"
          element={
            <Layout>
              <ShowDetail />
            </Layout>
          }
        />
        <Route
          path="/browse"
          element={
            <Layout>
              <Browse />
            </Layout>
          }
        />
        <Route
          path="/about-us"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
         <Route
          path="/contact-us"
          element={
            <Layout>
              <Contact/>
            </Layout>
          }
        />
         <Route
          path="/podcast-series"
          element={
            <Layout>
              <PodcastSeries/>
            </Layout>
          }
        /> <Route
        path="/tv-radio"
        element={
          <Layout>
            <TVRadio/>
          </Layout>
        }
      />
      <Route
        path="/community"
        element={
          <Layout>
            <CommunitySuccess/>
          </Layout>
        }
      />
      <Route
        path="/support-us"
        element={
          <Layout>
            <SupportUs/>
          </Layout>
        }
      />
        <Route
          path="/sports"
          element={
            <Layout>
              <div
                className=" d-flex justify-content-center align-items-center"
                style={{ height: "100vh" }}
              >
                Coming soon...
              </div>
            </Layout>
          }
        />
        <Route
          path="*"
          element={
            <div
              className=" d-flex justify-content-center align-items-center"
              style={{ height: "100vh" }}
            >
              Not Found
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
    {/* <div
      className="position-fixed bottom-0 "
      style={{ zIndex: 10, width: "100%" }}
    >
      <Footer />
    </div> */}
  </>
);

export default App;
