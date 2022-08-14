import { useEffect, useMemo, useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import "./Relation.css";
import Header from "./Header";
import Footer from "./Footer";
import { database } from "../firebase";
import { getDatabase, ref, child, get, onValue } from "firebase/database";

function Relation() {
  const dataLat = ref(database, "test/lat");
  const dataLng = ref(database, "test/lng");
  const [Lat, setLat] = useState();
  const [Lng, setLng] = useState();
  const [center, setCenter] = useState({
    lat: 13.87,
    lng: 100.55,
  });

  onValue(dataLat, (snapshot) => {
    console.log(snapshot.val());
    document.getElementById("Lat").innerHTML = "Lat:" + snapshot.val();
    // Lat = snapshot.val();
    // setStatus(true);
  });

  onValue(dataLng, (snapshot) => {
    console.log(snapshot.val());
    document.getElementById("Lng").innerHTML = "Lng:" + snapshot.val();
    // Lng = snapshot.val();
    // setStatus(true);
  });

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (document.getElementById("Lat").innerHTML != null) {
        var lat1 = document.getElementById("Lat").innerHTML;
        lat1 = lat1.substring(4, 9);
        setLat(lat1);
      }
      if (document.getElementById("Lng").innerHTML != null) {
        var lng1 = document.getElementById("Lng").innerHTML;
        lng1 = lng1.substring(4, 9);
        setLng(lng1);
      }
      setCenter({ lat: Lat, lng: Lng });
    }, 500);
    return () => clearInterval(interval);
  });

  // const center = useMemo(() => ({ lat: Lat, lng: Lng }), []);

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <>
      <Header />
      <div className="LatLng">
        <h5 id="Lat"></h5>
        <h5 id="Lng"></h5>
      </div>
      <div>
        <GoogleMap
          zoom={10}
          center={center}
          mapContainerClassName="map-container"
        >
          <Marker position={center} />
        </GoogleMap>
      </div>
      <Footer />
    </>
  );
}

export default Relation;
