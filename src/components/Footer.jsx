import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="footer bg-dark text-light py-5">
    <Container>
      <Row className="text-center text-md-left">
        <Col md={4}>
          <h5>Quick Links</h5>
          <ul className="list-unstyled">
            <li>
              <Link to="/contact-us" className="text-light footer-link">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/support-us" className="text-light footer-link">
                Support Us
              </Link>
            </li>
            <li>
              <Link to="/community" className="text-light footer-link">
                Community
              </Link>
            </li>
            <li>
              <Link to="/app-download" className="text-light footer-link">
                App Download
              </Link>
            </li>
            <li>
              <Link to="/closed-captioning" className="text-light footer-link">
                Closed Captioning
              </Link>
            </li>
            <li>
              <Link to="/shop" className="text-light footer-link">
                Shop
              </Link>
            </li>
            <li>
              <a
                href="https://share.hsforms.com/1JnEGpFXOSL2uwigAPGZwvwsnh76"
                className="text-light footer-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Advertise with Us
              </a>
            </li>
          </ul>
        </Col>
        <Col md={4}>
          <h5>Policies</h5>
          <ul className="list-unstyled">
            <li>Cookie Notice</li>
            <li>CA Notice</li>
          </ul>
        </Col>
        <Col md={4}>
          <h5>More Information</h5>
          <ul className="list-unstyled">
            <li>MBC App</li>
            <li>Peacock</li>
            <li>Closed Captioning</li>
            <li>Parental Guidelines and TV Ratings</li>
            <li>Video Viewing Policy</li>
            <li>Viewer Panel</li>
            <li>Shop</li>
          </ul>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col md={4} className="text-center text-md-left mb-3 mb-md-0">
          <h6 className="text-uppercase font-weight-bold">© MBC TV - 2024</h6>
        </Col>
        <Col md={4} className="text-center">
          <a href="#privacy" className="text-light mx-2 footer-link">
            Privacy Policy
          </a>
          |
          <a href="#terms" className="text-light mx-2 footer-link">
            Terms of Service
          </a>
        </Col>
        <Col md={4} className="text-center text-md-right">
          <span>Follow us on: </span>
          <a href="https://facebook.com" className="text-light mx-2">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" className="text-light mx-2">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" className="text-light mx-2">
            <FaInstagram />
          </a>
        </Col>
      </Row>
    </Container>

    <style jsx>{`
      .footer {
        background: linear-gradient(45deg, #111, #333);
        color: #ddd;
      }
      .footer-link {
        text-decoration: none; /* Remove underline */
        transition: color 0.3s ease; /* Smooth transition */
      }
      .footer-link:hover {
        text-decoration: none; /* Ensure underline stays off */
        color: #ffd700; /* Hover color effect */
      }
      h5 {
        font-weight: bold;
        margin-bottom: 1rem;
      }
      .text-light:hover {
        color: #ffd700;
      }
    `}</style>
  </footer>
);

export default Footer;
