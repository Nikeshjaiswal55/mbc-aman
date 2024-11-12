import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { Formik, Field, Form as FormikForm, ErrorMessage } from "formik";
import * as Yup from "yup";

const ContentFormModal = ({
  show,
  handleClose,
  handleSubmit,
  networkOptions,
}) => {
  const initialValues = {
    title: "",
    description: "",
    content_type: "",
    duration: "",
    release_year: "",
    ratings: 0,
    language: "",
    trailer_url: "",
    slider: false,
    genre: "",
    is_featured: false,
    is_trending: false,
    network: "",
    // image1: null,
    // image2: null,
  };

  console.log("networkOptionewerwrwrwrs", networkOptions);

  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
    content_type: Yup.string().required("Content type is required"),
    duration: Yup.string()
      .matches(
        /^([0-1]?[0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9](\.[0-9]{1,6})?)?$/,
        "Time has wrong format. Use hh:mm[:ss[.uuuuuu]] format."
      )
      .required("Duration is required"),
    release_year: Yup.date().required("Release year is required"),
    ratings: Yup.number().min(0).max(10).required("Ratings are required"),
    language: Yup.string().required("Language is required"),
    trailer_url: Yup.string()
      .url("Invalid URL")
      .required("Trailer URL is required"),
    genre: Yup.string().required("Genre is required"),
    network: Yup.string().required("Network selection is required"),
    // image1: Yup.mixed().required("First image is required"),
    // image2: Yup.mixed().required("Second image is required"),
  });

  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton className="formik-form">
        <Modal.Title>Content Form</Modal.Title>
      </Modal.Header>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        {({ setFieldValue }) => (
          <FormikForm className="formik-form">
            <Modal.Body>
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Field name="title" className="form-control" />
                    <ErrorMessage
                      name="title"
                      component="div"
                      className="text-danger"
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group controlId="content_type">
                    <Form.Label>Content Type</Form.Label>
                    <Field
                      as="select"
                      name="content_type"
                      className="form-control"
                    >
                      <option value="">Select Network</option>
                      {[
                        { id: "movie", name: "Movie" },
                        { id: "series", name: "Series" },
                      ].map((option) => (
                        <option key={option.id} value={option.id}>
                          {option.name}
                        </option>
                      ))}
                    </Field>
                    <ErrorMessage
                      name="content_type"
                      component="div"
                      className="text-danger"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group controlId="duration">
                    <Form.Label>Duration</Form.Label>
                    <Field
                      name="duration"
                      placeholder="hh:mm[:ss[.uuuuuu]]"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="duration"
                      component="div"
                      className="text-danger"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="release_year">
                    <Form.Label>Release Year</Form.Label>
                    <Field
                      name="release_year"
                      type="date"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="release_year"
                      component="div"
                      className="text-danger"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group controlId="ratings">
                    <Form.Label>Ratings</Form.Label>
                    <Field
                      name="ratings"
                      type="number"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="ratings"
                      component="div"
                      className="text-danger"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="language">
                    <Form.Label>Language</Form.Label>
                    <Field name="language" className="form-control" />
                    <ErrorMessage
                      name="language"
                      component="div"
                      className="text-danger"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group controlId="trailer_url">
                    <Form.Label>Trailer URL</Form.Label>
                    <Field name="trailer_url" className="form-control" />
                    <ErrorMessage
                      name="trailer_url"
                      component="div"
                      className="text-danger"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="genre">
                    <Form.Label>Genre</Form.Label>
                    <Field name="genre" className="form-control" />
                    <ErrorMessage
                      name="genre"
                      component="div"
                      className="text-danger"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Field
                      as="textarea"
                      name="description"
                      className="form-control"
                      rows="3"
                    />
                    <ErrorMessage
                      name="description"
                      component="div"
                      className="text-danger"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="network">
                    <Form.Label>Network</Form.Label>
                    <Field as="select" name="network" className="form-control">
                      <option value="">Select Network</option>
                      {networkOptions?.map((option) => (
                        <option
                          key={option?.network_id}
                          value={option?.network_id}
                        >
                          {option?.name}
                        </option>
                      ))}
                    </Field>
                    <ErrorMessage
                      name="network"
                      component="div"
                      className="text-danger"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={12}>
                  <Form.Group controlId="slider">
                    <Form.Check
                      type="checkbox"
                      label="Slider"
                      name="slider"
                      as={Field}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group controlId="is_featured">
                    <Form.Check
                      type="checkbox"
                      label="Featured"
                      name="is_featured"
                      as={Field}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="is_trending">
                    <Form.Check
                      type="checkbox"
                      label="Trending"
                      name="is_trending"
                      as={Field}
                    />
                  </Form.Group>
                </Col>
              </Row>

              {/* <Row className="mb-3">
                <Col md={6}>
                  <Form.Group controlId="image1">
                    <Form.Label>Image 1</Form.Label>
                    <input
                      type="file"
                      className="form-control"
                      onChange={(event) => {
                        setFieldValue("image1", event.currentTarget.files[0]);
                      }}
                    />
                    <ErrorMessage
                      name="image1"
                      component="div"
                      className="text-danger"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="image2">
                    <Form.Label>Image 2</Form.Label>
                    <input
                      type="file"
                      className="form-control"
                      onChange={(event) => {
                        setFieldValue("image2", event.currentTarget.files[0]);
                      }}
                    />
                    <ErrorMessage
                      name="image2"
                      component="div"
                      className="text-danger"
                    />
                  </Form.Group>
                </Col>
              </Row> */}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Modal.Footer>
          </FormikForm>
        )}
      </Formik>
    </Modal>
  );
};

export default ContentFormModal;
