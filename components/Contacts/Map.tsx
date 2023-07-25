"use client";

import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import styles from "./Map.module.css";
import "leaflet/dist/leaflet.css";

import L from "leaflet";

const icon = L.icon({ iconUrl: "./assets/icons/marker-icon.png" });

const Map = () => {
  if (typeof window !== "undefined") {
    return (
      <MapContainer
        className={styles.map}
        center={[56.981, 24.118]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
        />

        <Marker position={[56.981, 24.118]} icon={icon}>
          <Popup>Ganibu dambis 24D, Riga, LV-1005, Latvia</Popup>
        </Marker>
      </MapContainer>
    );
  }

  return <></>;
};

export default Map;
