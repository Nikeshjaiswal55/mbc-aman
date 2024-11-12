import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";

export const DashboardCard = ({ numberCount, title, route, icon }) => {
  const navigate = useNavigate();
  return (
    <Card
      style={{ padding: "1rem", cursor: "pointer" }}
      className="dashboard-card"
      onClick={() => navigate(route)}
    >
      <Card.Body className="p-0">
        <Row className="gap-2 justify-content-between align-items-center">
          {/* Left side with the square image */}
          <Col xs={4}>
            <Card.Img
              src={icon}
              alt="Image"
              style={{ width: "80px", height: "80px", objectFit: "cover" }}
            />
          </Col>
          {/* Right side with title and description */}
          <Col xs={6} className="text-end">
            <Card.Title className="poppins-semibold dashboard-card-title">
              {numberCount}
            </Card.Title>
            <Card.Text className="text-danger dashboard-card-text">
              {title}
            </Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};
