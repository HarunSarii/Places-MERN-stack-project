import React, { useRef, useEffect } from "react";
import "./Map.css";

const Map = (props) => {
  const mapRef = useRef();
  const { center, zoom } = props;

  useEffect(() => {
    const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
    script.async = true;
    script.defer = true;
    script.onload = initializeMap;
    document.head.appendChild(script);

    function initializeMap() {
      const map = new window.google.maps.Map(mapRef.current, {
        center: center,
        zoom: zoom
      });

      new window.google.maps.Marker({ position: center, map: map });
    }

    return () => {
      document.head.removeChild(script);
    };
  }, [center, zoom]);

  return (
    <div
      ref={mapRef}
      className={`map ${props.className}`}
      style={props.style}
    ></div>
  );
};

export default Map;
