import { UseCurrentLocation } from "./useCurrentLocation";

export function App() {
  const { location, loading, error, getCurrentLocation } = UseCurrentLocation(); 

  const handleGetCurrentLocation = () => {
    getCurrentLocation();
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div>
          <p>Latitude: {location ? location.latitude : "Please allow you location..."}</p>
          <p>Longitude: {location ? location.longitude : "Please allow you location..."}</p>
        </div>
      )}
      <button onClick={handleGetCurrentLocation}>Get Current Location</button> 
    </div>
  );
}
