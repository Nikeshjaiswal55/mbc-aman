import { useEffect } from "react";
// import { DashboardCard } from "../components/card";
import { useApi } from "../service/useApi";
import { fetchData } from "../service/apiService";

export default function AdminDashboard() {
  const { data: content, callApi: fetchContent } = useApi(fetchData);
  const { data: networkOptions, callApi: fetchNetwork } = useApi(fetchData);

  useEffect(() => {
    fetchNetwork("/network/view/");
  }, []);

  useEffect(() => {
    fetchContent("/content/view");
  }, []);

  return (
    <div style={{ height: "90vh" }}>
      <div className="row mt-4 mx-2">
        {[
          {
            numberCount: content?.data.length,
            title: "content",
            route: "/content-list",
            icon: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRGW8cbHyEPzam8pADoH71lK3Kn_hURnkRoDoneBFRstXDUKlSu",
          },
          {
            numberCount: networkOptions?.data.length,
            title: "network",
            route: "/network-list",
            icon: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRragqg8EWlZS3dH85hgK1OovjeBmoI46eZhTCRYnnRGHAz3p32",
          },
          {
            numberCount: 45,
            title: "user",
            route: "/user",
            icon: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg",
          },
        ].map((item) => (
          <div className="col-4">
            <DashboardCard
              numberCount={item.numberCount}
              title={item.title}
              route={item.route}
              icon={item.icon}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
