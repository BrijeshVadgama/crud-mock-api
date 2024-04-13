import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Faculty() {
  const api = "https://65d6d5fef6967ba8e3beadc1.mockapi.io/employee";
  const navigate = useNavigate();
  const goToFacDetails = (id) => {
    navigate(`/EmployeeDetails/${id}`);
  };
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((resp) => setData(resp));
  }, []);
  return (
    <div className="container-fluid mt-4">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-cols-xxl-6 g-4">
        {data.map((employee) => (
          <div className="col" key={employee.id}>
            <div className="card shadow bg-white rounded">
              <img
                src={employee.EmployeeImage}
                className="card-img-top"
                alt={employee.EmployeeName}
              />
              <div className="card-body text-center">
                <p className="card-title fname">{employee.EmployeeName}</p>
                <h6 className="card-text" style={{ color: "#D61B3C" }}>
                  {employee.EmployeeDesignation}
                </h6>
                <br />
              </div>
              <button
                className="btn btn-link text-secondary mb-3"
                onClick={() => goToFacDetails(employee.id)}
              >
                VIEW PROFILE
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faculty;
