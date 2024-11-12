import { Container, Row, Col } from "react-bootstrap";

const Footer = () => (
  <footer className="bg-dark text-light py-4">
    <Container>
      <Row className="mb-2">
        <Col md={4}>© MBC TV - 2024</Col>
        <Col md={4}>
          <a href="#privacy" className="text-light mx-2">
            Privacy Policy
          </a>
          |
          <a href="#terms" className="text-light mx-2">
            Terms of Service
          </a>
        </Col>
        <Col md={4}>Follow us on: Facebook, Twitter, Instagram</Col>
      </Row>
      <Row>
        <Col md={4}>
          <h5>Corporate Info</h5>
          <ul className="list-unstyled">
            <li>Accessibility</li>
            <li>Jobs</li>
            <li>Ad Choices</li>
          </ul>
        </Col>
        <Col md={4}>
          <h5>Policies</h5>
          <ul className="list-unstyled">
            <li>Privacy Policy</li>
            <li>Cookie Notice</li>
            <li>CA Notice</li>
            <li>Terms of Service - NEW</li>
          </ul>
        </Col>
        <Col md={4}>
          <h5>More Information</h5>
          <ul className="list-unstyled">
            <li>NBC App</li>
            <li>Peacock</li>
            <li>Advertise</li>
            <li>Closed Captioning</li>
            <li>Parental Guidelines and TV Ratings</li>
            <li>Video Viewing Policy</li>
            <li>Viewer Panel</li>
            <li>Shop</li>
          </ul>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
