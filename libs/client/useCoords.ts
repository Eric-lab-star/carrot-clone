import { useEffect, useState } from "react";

interface ICoords {
  lat: number | null;
  long: number | null;
}

export default function useCoords() {
  const [coords, setCoords] = useState<ICoords>({ lat: null, long: null });
  const onSuccess = ({
    coords: { latitude, longitude },
  }: GeolocationPosition) => {
    setCoords({ lat: latitude, long: longitude });
  };
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(onSuccess);
  }, []);
  return coords;
}
