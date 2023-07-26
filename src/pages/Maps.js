import React, { useEffect, useRef } from "react";

export default function Maps() {
  const googleMapRef = useRef(null);
  useEffect(() => {
    const mapOptions = {
      center: { lat: -34.397, lng: 150.644 }, // Specify initial map center
      zoom: 8, // Specify initial zoom level
      mapTypeId: "hybrid",
      isAdvancedMarkersAvailable: true,
    };

    // Create a new Google Map instance
    const map = new window.google.maps.Map(googleMapRef.current, mapOptions);

    // Add any additional map functionality here
    console.log(map);

    map.addListener("click", function (event) {
      console.log(event.latLng.lat());
      console.log(event.latLng.lng());
      console.log(window.google.maps);
      new window.google.maps.Marker({
        position: { lat: event.latLng.lat(), lng: event.latLng.lng() },
        map: map,
        title: event.latLng,
      });
    });

    return () => {
      // Clean up map instance when component unmounts
      map.data.forEach(function (feature) {
        map.data.remove(feature);
      });
    };
  }, []);

  return (
    <div
      id="map"
      ref={googleMapRef}
      style={{ width: "100%", height: "100%" }}
    ></div>
  );
}
