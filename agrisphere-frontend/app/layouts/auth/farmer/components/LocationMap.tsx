"use client";

import { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import dynamic from "next/dynamic";

interface LocationMapProps {
  selectedLocation?: string;
  onLocationChange: (location: string) => void;
}

// Dynamically import MapContainer and TileLayer with no SSR
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);

export default function LocationMap({
  selectedLocation = "",
  onLocationChange,
}: LocationMapProps) {
  const [coords, setCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [input, setInput] = useState("");
  const [, setAddress] = useState("");

  useEffect(() => {
    if (selectedLocation) {
      const coordsArray = selectedLocation
        .split(",")
        .map((coord) => parseFloat(coord.trim()));
      if (
        coordsArray.length === 2 &&
        !isNaN(coordsArray[0]) &&
        !isNaN(coordsArray[1])
      ) {
        setCoords({ lat: coordsArray[0], lng: coordsArray[1] });
        setInput(selectedLocation);
      }
    }

    const setUserLocation = (position: GeolocationPosition) => {
      const { latitude, longitude } = position.coords;
      const userCoords = `${latitude},${longitude}`;
      setCoords({ lat: latitude, lng: longitude });
      setInput(userCoords);
      onLocationChange(userCoords);
      fetchAddress(latitude, longitude);
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        setUserLocation,
        (error) => console.error("Geolocation error:", error),
        { enableHighAccuracy: true }
      );
    }
  }, [onLocationChange, selectedLocation]);

  // Fetch address from coordinates (Reverse Geocoding)
  const fetchAddress = async (lat: number, lng: number) => {
    try {
      const res = await axios.get(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
      );
      if (res.data?.display_name) {
        setAddress(res.data.display_name);
      } else {
        setAddress("Address not found");
      }
    } catch {
      setAddress("Failed to fetch address");
    }
  };

  const updateLocation = (value: string) => {
    setInput(value);
    const coordsArray = value
      .split(",")
      .map((coord) => parseFloat(coord.trim()));
    if (
      coordsArray.length === 2 &&
      !isNaN(coordsArray[0]) &&
      !isNaN(coordsArray[1])
    ) {
      setCoords({ lat: coordsArray[0], lng: coordsArray[1] });
      fetchAddress(coordsArray[0], coordsArray[1]);
      onLocationChange(value);
      console.log("Coordinates:", coordsArray[0], coordsArray[1]);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="w-[700px] relative bg-[#D9F3E8]">
        {coords && (
          <MapContainer
            center={[coords.lat, coords.lng]}
            zoom={13}
            style={{
              height: "250px",
              width: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 10, // Corrected: zIndex should be a number
              borderRadius: "24px",
            }}
            key={coords ? `${coords.lat}-${coords.lng}` : "default"}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
          </MapContainer>
        )}
        <div className="absolute flex mx-auto">
          <input
            type="text"
            placeholder="Enter Farm Address Coordinate"
            className="bg-white border p-2 w-64 h-11 rounded-md transform translate-x-[90%] mt-10 absolute z-20 font-instrument text-sm font-normal text-black"
            value={input}
            onChange={(e) => updateLocation(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
