const Home = () => {
    return (
      <div className="p-6 bg-blue-50">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-4">Welcome to FlexRide!</h1>
        <p className="text-center text-lg text-gray-600 mb-6">
          Find the best vehicles available for rent or share your own!
        </p>
        <div className="flex justify-center">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Browse Vehicles
          </button>
        </div>
      </div>
    );
  };
  
  export default Home;
  