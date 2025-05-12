const Navbar = () => {
    return (
      <nav className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">FlexRide</div>
          <div className="space-x-6">
            <a href="/" className="hover:text-gray-200 transition-colors duration-300">Home</a>
            <a href="/vehicles" className="hover:text-gray-200 transition-colors duration-300">Vehicles</a>
            <a href="/add" className="hover:text-gray-200 transition-colors duration-300">Add Vehicle</a>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  