import Table from "react-bootstrap/Table";
import { useFirebase } from "../context/firebase";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore"; // Import Firestore functions

function Users() {
  const firebase = useFirebase();
  const [users, setUsers] = useState([]); // State to store fetched users

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersCollectionRef = collection(firebase.userDb, "users"); // Reference to users collection
        const usersSnapshot = await getDocs(usersCollectionRef); // Get all documents in the users collection
        const usersData = usersSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUsers(usersData); // Set users data into state
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="theme">
      <h5 className="poppins-bold my-2 py-2 rounded-4 text-center theme">
        Users
      </h5>
      <Table striped bordered hover className="theme-table">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.username}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Users;
