// Signup.js
import { useEffect, useState } from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import { useFirebase } from "../context/firebase";
import google_logo from "../assets/google_logo.png";
import { Link, useNavigate } from "react-router-dom";

function Signin() {
  const navigate = useNavigate();
  const firebase = useFirebase();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (firebase.isUserLogedIn) {
      firebase.getAdminFirebaseId === firebase.getAdminId
        ? navigate("/dashboard")
        : navigate("/");
    }
  }, [firebase, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setError("Please fill out all fields correctly.");
    } else {
      // Handle form submission, e.g., send data to API
      console.log("Form data:", formData);
      try {
        const result = await firebase.signinuser(
          formData.email,
          formData.password
        );
        console.log("result", result);
        setError(""); // Clear any errors
      } catch (error) {
        alert(error.message);
      }
    }
    setValidated(true);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <div
        className="p-4 box shadow rounded bg-white"
        style={{ width: "21rem" }}
      >
        <h3 className="text-center mb-4">Sign In</h3>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid email.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formPassword" className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Enter your password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a password.
            </Form.Control.Feedback>
          </Form.Group>

          <p className=" text-end" style={{ fontSize: "10px" }}>
            <Link to={"/signup"}>create a account?</Link>
          </p>

          <Button variant="primary" type="submit" className="w-100">
            Sign In
          </Button>
          <h6 className="text-center py-2">or</h6>
          <Button
            style={{ background: "white", color: "black" }}
            className="w-100"
            onClick={() => firebase.signinwithgoogle()}
          >
            <img height={20} src={google_logo} className="mx-2" alt="google" />
            Sign in with Google
          </Button>
        </Form>
      </div>
    </Container>
  );
}

export default Signin;
