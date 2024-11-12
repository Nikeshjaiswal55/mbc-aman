import { Navigate, Outlet } from "react-router-dom";
import { useFirebase } from "../context/firebase";

function PrivateRoute({ children }) {
  const firebase = useFirebase();
  console.log(
    "firebase.getAdminFirebaseId === firebase.getAdminId",
    firebase.getAdminFirebaseId === firebase.getAdminId
  );
  if (firebase.isUserLogedIn) {
    return firebase.getAdminFirebaseId === firebase.getAdminId ? (
      <div>{children}</div>
    ) : (
      <Navigate to="/signin" />
    );
  } else {
    return <Navigate to="/signin" />;
  }
}

export default PrivateRoute;
