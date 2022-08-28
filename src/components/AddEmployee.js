import React from "react";

const AddEmployee = () => {
  return (
    <div className="mx-auto flex max-w-2xl border-b shadow">
      <div className="px-8 py-8">
        <div className="text-2xl font-thin tracking-wider">
          <h1>Add New Employee</h1>
        </div>
        <div>
          <div className="my-4 h-14 w-full items-center justify-center">
            <label className="block text-sm font-normal text-gray-600">
              First Name
            </label>
            <input type="text" className="mt-2 h-10 w-96 border px-2 py-2" />
          </div>
          <div className="my-4 h-14 w-full items-center justify-center">
            <label className="block text-sm font-normal text-gray-600">
              Last Name
            </label>
            <input type="text" className="mt-2 h-10 w-96 border px-2 py-2" />
          </div>
          <div className="my-4 h-14 w-full items-center justify-center">
            <label className="block text-sm font-normal text-gray-600">
              Email
            </label>
            <input type="email" className="mt-2 h-10 w-96 border px-2 py-2" />
          </div>
          <div className="my-4 h-14 w-full items-center justify-center space-x-4 pt-4">
            <button className="rounded bg-green-400 py-2 px-6 font-semibold text-white hover:bg-green-700">
              Save
            </button>
            <button className="rounded bg-red-400 py-2 px-6 font-semibold text-white hover:bg-red-700">
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
