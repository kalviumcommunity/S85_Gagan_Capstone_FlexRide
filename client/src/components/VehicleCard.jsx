const VehicleCard = ({ vehicle }) => {
    return (
      <div className="max-w-xs bg-white rounded-lg shadow-2xl hover:shadow-xl transition-shadow duration-300 overflow-hidden">
        <img
          src={vehicle.image}
          alt={vehicle.title}
          className="w-full h-56 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-primary">{vehicle.title}</h3>
          <p className="text-secondary mt-2">{vehicle.type}</p>
          <p className="text-gray-500 mt-2">{vehicle.location}</p>
          <p className="text-xl font-bold text-accent mt-2">{vehicle.price}</p>
        </div>
      </div>
    );
  };
  
  export default VehicleCard;
  