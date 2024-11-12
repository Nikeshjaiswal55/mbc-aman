import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { Formik, Field, Form as FormikForm, ErrorMessage } from "formik";
import * as Yup from "yup";

// Formik validation schema
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  description: Yup.string().required("Description is required"),
  network_image: Yup.mixed().required("Network image is required"),
});

const NetworkFormModal = ({ show, handleClose, handleSubmit }) => {
  const initialValues = {
    name: "",
    description: "",
    network_image: null,
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton className="formik-form">
        <Modal.Title>Network Form</Modal.Title>
      </Modal.Header>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log("valuessssss", values);
          const formData = new FormData();
          formData.append("name", values.name);
          formData.append("description", values.description);
          formData.append("network_image", values.network_image);
          console.log("formData", formData);
          // Pass FormData to the handleSubmit function
          handleSubmit(formData);
        }}
      >
        {({ setFieldValue }) => (
          <FormikForm className="formik-form">
            <Modal.Body>
              <Row className="mb-3">
                <Col md={12}>
                  <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Field name="name" className="form-control" />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-danger"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md={12}>
                  <Form.Group controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Field
                      as="textarea"
                      name="description"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="description"
                      component="div"
                      className="text-danger"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md={12}>
                  <Form.Group controlId="network_image">
                    <Form.Label>Network Image</Form.Label>
                    <input
                      type="file"
                      className="form-control"
                      // onChange={(event) => {
                      //   setFieldValue("network_image", event.target.files[0]);
                      // }}
                      onChange={(e) => {
                        const file = e.currentTarget.files[0];
                        setFieldValue("network_image", file); // If using Formik's setFieldValue
                      }}
                    />
                    <ErrorMessage
                      name="network_image"
                      component="div"
                      className="text-danger"
                    />
                  </Form.Group>
                </Col>
              </Row>
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

export default NetworkFormModal;
