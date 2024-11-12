import Spinner from "react-bootstrap/Spinner";

export function Loader() {
  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <Spinner animation="border" role="status">
        <span
          className="visually-hidden"
          style={{ height: "5rem", width: "5rem" }}
        ></span>
      </Spinner>
    </div>
  );
}
