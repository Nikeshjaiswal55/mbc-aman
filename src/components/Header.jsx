import { useEffect, useState } from "react";
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import logo from "../assets/mbc_logo.jpeg";
import peackokPreview from "../assets/peacock_preview.png";
import { useFirebase } from "../context/firebase";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  // State for theme (light or dark)
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  // Toggle theme between light and dark
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // Store in localStorage
  };

  // Apply theme class to body when theme changes
  useEffect(() => {
    document.body.className = theme; // Set body class for theme
  }, [theme]);

  const userNavigation = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/browse",
      title: "Browse",
    },
    {
      path: "/sports",
      title: "Sports",
    },
    {
      path: "/live-tv",
      title: "Live",
    },
    {
      path: "/network",
      title: "Networks",
    },
    {
      path: "#mbc-insider",
      title: "MBC Insider",
    },
    {
      path: "/about-us",
      title: "About us",
    },
  ];

  const adminNavigation = [
    {
      path: "/dashboard",
      title: "Dashboard",
    },
    {
      path: "/users",
      title: "Users",
    },
    {
      path: "/network-list",
      title: "Networks",
    },
    {
      path: "/content-list",
      title: "Content",
    },
  ];

  const firebase = useFirebase();
  const navigate = useNavigate();
  const navItems =
    firebase.getAdminFirebaseId === firebase.getAdminId
      ? adminNavigation
      : userNavigation;

  console.log("firebase.getAdminId", firebase.getAdminId);

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="50"
            height="50"
            className="d-inline-block align-top rounded-5"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {navItems.map((item, index) => (
              <Nav.Link
                as={Link}
                key={index}
                to={item.path}
                className="poppins-medium"
              >
                {item.title}
              </Nav.Link>
            ))}
            {/* <Nav.Link as={Link} href="" className="poppins-medium">
              <img
                src={peackokPreview}
                width="80"
                height="80"
                className="d-inline-block align-top img-fluid"
                alt="peackokPreview"
              />
            </Nav.Link> */}
          </Nav>
          <Button
            className="rounded rounded-pill py-1 px-3 mx-3"
            variant={theme === "light" ? "secondary" : "light"}
            onClick={toggleTheme}
          >
            <p className="p-0 m-0 poppins-regular">
              {theme === "light" ? "Dark" : "Light"} Mode
            </p>
          </Button>
          {firebase.isUserLogedIn ? (
            <Button
              className="rounded rounded-pill py-1 px-3"
              style={{ background: "#f1f1f1", color: "black" }}
              onClick={async () => {
                const som = await firebase.signout();
                console.log("som", som);
                navigate("/signin");
              }}
            >
              <p className="p-0 m-0 poppins-regular">Sign Out</p>
            </Button>
          ) : (
            <Button
              className="rounded rounded-pill py-1 px-3"
              style={{ background: "#f1f1f1", color: "black" }}
              onClick={() => navigate("/signin")}
            >
              <p className="p-0 m-0 poppins-regular">Sign In</p>
            </Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
