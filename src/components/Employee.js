import React from "react";
import { useNavigate } from "react-router-dom";

const Employee = ({ employee, deleteEmployee }) => {
  const navigate = useNavigate();
  const editEmployee = (e, id) => {
    e.preventDefault();
    navigate(`/editEmployee/${id}`);
  };
  return (
    <tr key={employee.id}>
      <td className="whitespace-nowrap px-6 py-4 text-left">
        <div className="text-small text-gray-500">{employee.firstName}</div>
      </td>
      <td className="whitespace-nowrap px-6 py-4 text-left">
        <div className="text-small text-gray-500">{employee.lastName}</div>
      </td>
      <td className="whitespace-nowrap px-6 py-4 text-left">
        <div className="text-small text-gray-500">{employee.email}</div>
      </td>
      <td className="text-small whitespace-nowrap px-6 py-4 text-right font-medium">
        <a
          onClick={(e, id) => editEmployee(e, employee.id)}
          className="px-4 text-indigo-600 hover:cursor-pointer hover:text-indigo-800"
        >
          Edit
        </a>
        <a
          onClick={(e, id) => deleteEmployee(e, employee.id)}
          className="text-indigo-600 hover:cursor-pointer hover:text-indigo-800"
        >
          Delete
        </a>
      </td>
    </tr>
  );
};

export default Employee;
