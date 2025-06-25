
import React from 'react';

const StoreList = ({ stores, onStoreClick }) => (
  <div>
    <h2 className="font-bold text-lg mb-2">{stores.length} results</h2>
    {stores.map((store, index) => (
      <div key={index} className="bg-white p-3 mb-4 shadow rounded">
        <h3 className="mb-2 font-semibold text-md">{store.name}&nbsp;❯ </h3>
        <div className="flex text-sm text-green-600">⭐ {store.averageRating} &nbsp; |&nbsp;  Open: {store.dealerOperationHours?.mondayOpenTime} - {store.dealerOperationHours?.mondayCloseTime}<p className="text-sm text-gray-600">&nbsp;    | 📞 {store.phoneNumber}</p></div>
        <p className="text-sm">{store.address}, {store.city}, {store.state}, {store.pincode}</p>
        <button
          onClick={() => onStoreClick(store.latitude, store.longitude)}
          className="text-white bg-blue-500 hover:bg-blue-600 px-3 py-1 mt-3 rounded"
        >
          GET DIRECTIONS &nbsp;❯
        </button>
      </div>
    ))}
  </div>
);

export default StoreList;