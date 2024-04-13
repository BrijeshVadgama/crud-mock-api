import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Addemployees = () => {
  const apiURL = "https://65d6d5fef6967ba8e3beadc1.mockapi.io/employee";
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id !== undefined) {
          const response = await fetch(`${apiURL}/${id}`);
          if (response.ok) {
            const data = await response.json();
            setData(data);
          } else {
            throw new Error("Error fetching employee");
          }
        } else {
          setData({});
        }
      } catch (error) {
        console.error("Error fetching employee:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    // start div
    <div className="container">
      {/* conditio for heading */}
      {id === undefined && <h1 className="text-center">Add Employee</h1>}
      {id !== undefined && <h1 className="text-center">Edit Employee</h1>}
      {/* start form */}
      <div className="shadow p-3 mb-5 bg-body rounded">
        {/* employee name */}
        <div class="mb-3">
          <label for="employeeName" class="form-label">
            Employee Name
          </label>
          <input
            type="text"
            class="form-control"
            id="employeeName"
            value={data.EmployeeName || ""}
            onChange={(e) => {
              setData({ ...data, EmployeeName: e.target.value });
            }}
            autoComplete="off"
            autoFocus
            placeholder="Enter employee Name"
          />
        </div>
        {/* employee image */}
        <div class="mb-3">
          <label for="employeeName" class="form-label">
            Employee Image
          </label>
          <input
            type="text"
            class="form-control"
            id="employeeName"
            value={data.EmployeeImage || ""}
            onChange={(e) => {
              setData({ ...data, EmployeeImage: e.target.value });
            }}
            autoComplete="off"
            autoFocus
            placeholder="Enter employee Image URL"
          />
        </div>

        {/* add button with condition */}
        {id === undefined && (
          <button
            className="btn btn-primary"
            onClick={() => {
              fetch(apiURL, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                  "Content-Type": "application/json",
                },
              })
                .then((res) => {
                  if (res.ok) {
                    window.alert("Employee added successfully..!");
                    navigate("/employee");
                  }
                })
                .catch((error) => {
                  console.error("Error adding employee:", error);
                });
            }}
          >
            Add
          </button>
        )}
        {/* update button with condition */}
        {id !== undefined && (
          <button
            className="btn btn-primary"
            onClick={() => {
              fetch(`${apiURL}/${id}`, {
                method: "PUT",
                body: JSON.stringify(data),
                headers: {
                  "Content-Type": "application/json",
                },
              })
                .then((res) => {
                  if (res.ok) {
                    window.alert("Employee updated successfully..!");
                    navigate("/employee");
                  }
                })
                .catch((error) => {
                  console.error("Error updating employee:", error);
                });
            }}
          >
            Update
          </button>
        )}
        {/* end form */}
      </div>
    </div>
    // end div
  );
};

export default Addemployees;
