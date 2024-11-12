import { useEffect, useState } from "react";
import { Card, Col, Form, Row, Table } from "react-bootstrap";
import ContentFormModal from "../components/AddContentModal";
import { fetchData, postData } from "../service/apiService";
import { useApi } from "../service/useApi";

export function ContentList() {
  const { data, error, callApi } = useApi(postData);
  const { data: networkOptions, callApi: fetchNetwork } = useApi(fetchData);
  const { data: content, callApi: fetchContent } = useApi(fetchData);

  useEffect(() => {
    fetchContent("/content/view");
  }, []);

  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleFormSubmit = (values) => {
    console.log("Form data:", values);
    callApi("/content/add/", values);
    console.log("data", data);
    handleClose();
  };

  useEffect(() => {
    fetchNetwork("/network/view/");
  }, []);

  // const networkOptions = [
  //   { id: "network1", name: "Network 1" },
  //   { id: "network2", name: "Network 2" },
  // ];

  const movieCount = content?.data?.filter(
    (item) => item?.content_type === "movie"
  );

  const seriesCount = content?.data?.filter(
    (item) => item?.content_type === "series"
  );

  return (
    <div className="theme">
      <div className="row remove-margin">
        {[
          { title: "All", count: content?.data?.length },
          { title: "Movie", count: movieCount?.length },
          { title: "Series", count: seriesCount?.length },
        ]?.map((item) => (
          <div className="col-4">
            <Card className="p-2 dashboard-card m-3">
              <Card.Body className="p-0">
                <Row className="gap-2 justify-content-between align-items-center remove-margin">
                  {/* Left side with the square image */}
                  <Col xs={5}>
                    <Card.Text className="poppins-semibold dashboard-card-title">
                      {item?.title}
                    </Card.Text>
                  </Col>
                  {/* Right side with title and description */}
                  <Col xs={5} className="text-end">
                    <Card.Text className="text-danger poppins-semibold dashboard-card-text">
                      {item?.count}
                    </Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      <div className="p-3 content-header m-3 rounded-4 d-flex justify-content-between align-items-center">
        <h6 className="poppins-semibold p-0 m-0">Content list</h6>
        <button className="btn btn-danger" onClick={handleShow}>
          Add Content
        </button>
      </div>
      {/* <Table striped hover className="theme-table" borderless>
        <thead>
          <tr>
            <th>#</th>
            {[
              "title",
              "description",
              "content_type",
              "duration",
              "release_year",
              "ratings",
              "language",
              "trailer_url",
              "verticle_poster",
              "horizontol_poster",
              "slider",
              "genre",
              "is_featured",
              "is_trending",
            ].map((item) => (
              <th>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[{ firstName: "nikk", lastName: "jswl", username: "nikkk55" }].map(
            (user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.username}</td>
              </tr>
            )
          )}
        </tbody>
      </Table> */}
      <div className="">
        <Table striped className="theme-table table-responsive" borderless>
          <thead>
            <tr>
              <th>#</th>
              {[
                "title",
                "description",
                "content_type",
                "verticle poster",
                "horizontol_poster",
                "slider",
                "is_featured",
                "is_trending",
                "Action",
              ].map((item) => (
                <th className="text-center" key={item}>
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {content?.data?.map((user, index) => (
              <tr key={index}>
                <td className="text-center">{index + 1}</td>
                <td className="text-center"> {user.title}</td>
                <td className="text-center">{user.description}</td>
                <td className="text-center">{user.content_type}</td>
                <td className="text-center">
                  <img src={user.verticle_poster} alt="img" height={30} />
                </td>
                <td className="text-center">
                  <img src={user.horizontol_poster} alt="img" height={30} />
                </td>
                <td className="text-center">
                  <Form.Check
                    type="switch"
                    id="disabled-custom-switch"
                    disabled
                    checked={user?.slider}
                  />
                </td>
                <td className="text-center">
                  <Form.Check
                    type="switch"
                    id="disabled-custom-switch"
                    disabled
                    checked={user?.is_featured}
                  />
                </td>
                <td className="text-center">
                  <Form.Check
                    type="switch"
                    id="disabled-custom-switch"
                    disabled
                    checked={user?.is_trending}
                  />
                </td>
                <td className="text-center">
                  <button className="btn btn-primary ml-2">
                    {user.content_type} detail
                  </button>
                </td>
                <td className="text-center">
                  <button className="btn btn-secondary ml-2">edit</button>
                </td>
                <td className="text-center">
                  <button className="btn btn-danger">delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <ContentFormModal
        show={showModal}
        handleClose={handleClose}
        handleSubmit={handleFormSubmit}
        networkOptions={networkOptions?.data}
      />
    </div>
  );
}
