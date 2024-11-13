import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./footer.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <Container className="my-5">
      <h3 className="text-center mb-4">Contact Us</h3>
      <Row>
        {/* Left Section - Google Map */}
        <Col md={6} className="mb-4 mb-md-0">
          <div className="map-container rounded shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354341915175!2d-122.42067968468097!3d37.77851937975957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064a8c94b57%3A0x6f8c4c1bfea50837!2sTwitter%20HQ!5e0!3m2!1sen!2sus!4v1622586475864!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Map"
            ></iframe>
          </div>
        </Col>

        {/* Right Section - Contact Form */}
        <Col md={6}>
          <form onSubmit={handleSubmit} className="p-4 rounded shadow-sm bg-light">
            <div className="mb-3">
              <label htmlFor="name" className="form-label" id="labels">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label" id="labels">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="subject" className="form-label" id="labels">Subject</label>
              <input
                type="text"
                className="form-control"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label" id="labels">Message</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn w-100"
              style={{
                backgroundColor: '#808080', // Grey background color
                borderColor: '#808080', // Grey border color
                color: '#ffffff' // Optional: White text color for contrast
              }}
            >
              Submit
            </button>
          </form>
        </Col>
      </Row>za
    </Container>
  );
}

export default Contact;
