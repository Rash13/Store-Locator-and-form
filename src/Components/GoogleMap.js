import React, { useEffect, useState } from "react";
import StoreMap from "./StoreMap";
import StoreList from "./StoreList";
import Select from "./Select";
import data from "../Data/re.json";

export default function GoogleMap() {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState("Delhi");
  const [selectedCity, setSelectedCity] = useState("New Delhi");
  const [stores, setStores] = useState([]);
  const [mapCenter, setMapCenter] = useState({ lat: 28.6139, lng: 77.209 });
  const [selectedStore, setSelectedStore] = useState(null);

  useEffect(() => {
    const stateList = Object.keys(data.cityStateMap);
    setStates(stateList);
  }, []);

  useEffect(() => {
    if (selectedState && data.cityStateMap[selectedState]) {
      const cityList = Object.keys(data.cityStateMap[selectedState]);
      setCities(cityList);
      if (cityList.includes("New Delhi")) {
        setSelectedCity("New Delhi");
      } else {
        setSelectedCity(cityList[0]);
      }
    }
  }, [selectedState]);

  useEffect(() => {
    if (selectedState && selectedCity) {
      const storeList = data.cityStateMap[selectedState][selectedCity] || [];
      setStores(storeList);
      if (storeList.length > 0) {
        setMapCenter({
          lat: parseFloat(storeList[0].latitude),
          lng: parseFloat(storeList[0].longitude),
        });
        setSelectedStore(storeList[0]);
      }
    }
  }, [selectedState, selectedCity]);

  const handleStoreClick = (lat, lng, store) => {
    setMapCenter({ lat: parseFloat(lat), lng: parseFloat(lng) });
    setSelectedStore(store);
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/3 p-4 overflow-y-auto bg-gray-100">
        <div className="mb-4">
          <label className="font-semibold">State</label>
          <Select
            options={states}
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="font-semibold">City</label>
          <Select
            options={cities}
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          />
        </div>
        <StoreList
          stores={stores}
          onStoreClick={(lat, lng) =>
            handleStoreClick(
              lat,
              lng,
              stores.find((s) => s.latitude === lat && s.longitude === lng)
            )
          }
        />
      </div>

      <div className="flex-1">
        <StoreMap
          stores={stores}
          center={mapCenter}
          selectedStore={selectedStore}
        />
      </div>
    </div>
  );
}
