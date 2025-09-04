'use client';

import { useState } from 'react';

export default function Crops() {
  const [cropInventory] = useState([
    { name: 'Tomatoes', quantity: 150, status: 'Ready for harvest', color: 'bg-red-500', field: 'Field A' },
    { name: 'Lettuce', quantity: 200, status: 'Growing well', color: 'bg-green-500', field: 'Field B' },
    { name: 'Carrots', quantity: 80, status: 'Needs watering', color: 'bg-orange-500', field: 'Field C' },
    { name: 'Peppers', quantity: 120, status: 'Flowering', color: 'bg-yellow-500', field: 'Field D' },
    { name: 'Spinach', quantity: 90, status: 'Seedling', color: 'bg-emerald-500', field: 'Field E' },
    { name: 'Cucumbers', quantity: 110, status: 'Growing well', color: 'bg-teal-500', field: 'Field F' }
  ]);

  const [newCrop, setNewCrop] = useState({ name: '', quantity: '', field: '' });

  const handleAddCrop = (e) => {
    e.preventDefault();
    if (newCrop.name && newCrop.quantity && newCrop.field) {
      // In a real app, this would add to the database
      console.log('Adding new crop:', newCrop);
      setNewCrop({ name: '', quantity: '', field: '' });
    }
  };

  return (
    <div className="space-y-6">
      {/* Add New Crop Form */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Add New Crop</h3>
        </div>
        <div className="p-6">
          <form onSubmit={handleAddCrop} className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Crop Name</label>
              <input
                type="text"
                value={newCrop.name}
                onChange={(e) => setNewCrop({...newCrop, name: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="e.g., Tomatoes"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
              <input
                type="number"
                value={newCrop.quantity}
                onChange={(e) => setNewCrop({...newCrop, quantity: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="e.g., 100"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Field</label>
              <select
                value={newCrop.field}
                onChange={(e) => setNewCrop({...newCrop, field: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              >
                <option value="">Select Field</option>
                <option value="Field A">Field A</option>
                <option value="Field B">Field B</option>
                <option value="Field C">Field C</option>
                <option value="Field D">Field D</option>
                <option value="Field E">Field E</option>
                <option value="Field F">Field F</option>
              </select>
            </div>
            <div className="flex items-end">
              <button
                type="submit"
                className="w-full px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors duration-200"
              >
                Add Crop
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Crop Inventory */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Crop Inventory</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cropInventory.map((crop, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center space-x-3 mb-3">
                  <div className={`w-4 h-4 rounded-full ${crop.color}`}></div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{crop.name}</h4>
                    <p className="text-sm text-gray-500">{crop.field}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Quantity:</span>
                    <span className="font-medium text-gray-900">{crop.quantity}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Status:</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      crop.status === 'Ready for harvest' ? 'bg-green-100 text-green-800' :
                      crop.status === 'Growing well' ? 'bg-blue-100 text-blue-800' :
                      crop.status === 'Needs watering' ? 'bg-yellow-100 text-yellow-800' :
                      crop.status === 'Flowering' ? 'bg-purple-100 text-purple-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {crop.status}
                    </span>
                  </div>
                </div>
                <div className="mt-4 flex space-x-2">
                  <button className="flex-1 px-3 py-2 text-sm bg-emerald-50 text-emerald-700 rounded-lg hover:bg-emerald-100 transition-colors duration-200">
                    Edit
                  </button>
                  <button className="flex-1 px-3 py-2 text-sm bg-red-50 text-red-700 rounded-lg hover:bg-red-100 transition-colors duration-200">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
