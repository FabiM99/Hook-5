import { useState } from "react";

export function UseCurrentLocation() {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }

    setLoading(true); 
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
        setLoading(false); 
      },
      (error) => {
        setError("Error getting your location: " + error.message);
        setLoading(false); 
      }
    );
  };

  return {
    location,
    loading,
    error,
    getCurrentLocation: getLocation
  };
}

