import React from 'react';

const StoreMap = ({ center, selectedStore }) => {
  const storeLabel = selectedStore ? encodeURIComponent(selectedStore.name) : '';
  return (
    <div className="h-full w-full">
      <iframe
        title="store-map"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        src={`https://www.google.com/maps?q=${center.lat},${center.lng}&z=14&output=embed&label=${storeLabel}`}
        allowFullScreen
      />
    </div>
  );
};

export default StoreMap;

