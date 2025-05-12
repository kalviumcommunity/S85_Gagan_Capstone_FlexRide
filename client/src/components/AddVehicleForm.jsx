const AddVehicleForm = () => {
    return (
      <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Add a New Vehicle</h2>
        <form>
          <input
            type="text"
            placeholder="Vehicle Title"
            className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            placeholder="Vehicle Type"
            className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            placeholder="Location"
            className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="number"
            placeholder="Price"
            className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Add Vehicle
          </button>
        </form>
      </div>
    );
  };
  
  export default AddVehicleForm;
  