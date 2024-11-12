import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { fetchData, postData } from "../service/apiService";
import { useApi } from "../service/useApi";
import NetworkFormModal from "../components/AddNetworkModal";
import axios from "axios";

export function AdminNetworkList() {
  // const { data, error, callApi } = useApi(postData);
  const { data: networkOptions, callApi: fetchNetwork } = useApi(fetchData);

  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleFormSubmit = async (values) => {
    try {
      console.log("values", values);
      const response = await axios.post(
        "https://mbc-eight.vercel.app/api/network/add/",
        values,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            //   "X-CSRFToken":
            //     "s3iIZKBW3LqgXeYOwskFWTZqlyG2089dQCkI2Y5n5PZzGdEMVCxa7r5uLtMW2ll0",
          },
        }
      );
      console.log("Response:", response.data);
      handleClose();
    } catch (error) {
      console.error("Error:", error);
    }
  };


  useEffect(() => {
    fetchNetwork("/network/view/");
  }, []);

  return (
    <div className="theme">
      <div className="p-3 content-header m-3 rounded-4 d-flex justify-content-between align-items-center">
        <h6 className="poppins-semibold p-0 m-0">Network list</h6>
        <button className="btn btn-danger" onClick={handleShow}>
          Add Network
        </button>
      </div>
      <Table striped hover className="theme-table" borderless>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Description</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {networkOptions?.data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>
                <img src={item.network_image} alt="image-network" height={30} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <NetworkFormModal
        show={showModal}
        handleClose={handleClose}
        handleSubmit={handleFormSubmit}
      />
    </div>
  );
}
