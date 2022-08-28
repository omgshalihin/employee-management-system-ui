import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const UpdateEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    id: id,
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({ ...employee, [e.target.name]: value });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await EmployeeService.getEmployee(id);
        setEmployee(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const updateEmployee = (e) => {
    e.preventDefault();
    EmployeeService.updateEmployee(id, employee)
      .then((res) => {
        navigate("/employeeList");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="mx-auto flex max-w-2xl border-b shadow">
      <div className="px-8 py-8">
        <div className="text-2xl font-thin tracking-wider">
          <h1>Update Employee</h1>
        </div>
        <div>
          <div className="my-4 h-14 w-full items-center justify-center">
            <label className="block text-sm font-normal text-gray-600">
              First Name
            </label>
            <input
              type="text"
              className="mt-2 h-10 w-96 border px-2 py-2"
              name="firstName"
              value={employee.firstName}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className="my-4 h-14 w-full items-center justify-center">
            <label className="block text-sm font-normal text-gray-600">
              Last Name
            </label>
            <input
              type="text"
              className="mt-2 h-10 w-96 border px-2 py-2"
              name="lastName"
              value={employee.lastName}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className="my-4 h-14 w-full items-center justify-center">
            <label className="block text-sm font-normal text-gray-600">
              Email
            </label>
            <input
              type="email"
              className="mt-2 h-10 w-96 border px-2 py-2"
              name="email"
              value={employee.email}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className="my-4 h-14 w-full items-center justify-center space-x-4 pt-4">
            <button
              className="rounded bg-green-400 py-2 px-6 font-semibold text-white hover:bg-green-700"
              onClick={updateEmployee}
            >
              Update
            </button>
            <button
              onClick={() => navigate("/employeeList")}
              className="rounded bg-red-400 py-2 px-6 font-semibold text-white hover:bg-red-700"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateEmployee;
