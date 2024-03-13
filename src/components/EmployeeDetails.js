import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function FacultyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const api = "YOUR API URL";

  function backToHome() {
    navigate(-1);
  }

  function updateFac() {
    navigate(`/add/${id}`);
  }

  function deleteFac() {
    fetch(api + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((resp) => navigate(-1));
  }

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(api + "/" + id)
      .then((res) => res.json())
      .then((resp) => setData(resp));
  }, [id]);

  return (
    <>
      <div className="container mt-4">
        <img
          src={data.EmployeeImage}
          className="card-img-top"
          alt={data.EmployeeName}
          style={{ width: "200px" }}
        />

        <h1 className="fname">{data.EmployeeName}</h1>
        <h6 className="card-text" style={{ color: "#D61B3C" }}>
          {data.EmployeeDesignation}
        </h6>
        <br />
      </div>

      <button
        className="btn btn-info"
        style={{ marginLeft: "120px" }}
        onClick={backToHome}
      >
        BACK
      </button>
      <button className="btn btn-danger ms-5" onClick={deleteFac}>
        DELETE
      </button>
      <button className="btn btn-primary ms-5" onClick={updateFac}>
        UPDATE
      </button>
    </>
  );
}

export default FacultyDetails;
