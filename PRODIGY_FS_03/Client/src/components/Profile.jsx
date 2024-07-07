import React from 'react';

const Profile = ({ user }) => {
  if (!user) {
    return <p className="text-center text-red-500">Please log in to view your profile.</p>;
  }

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-blue-600 p-6">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-grow">
              <h1 className="text-2xl font-semibold text-white">{user.username}</h1>
              <p className="text-white">{user.email}</p>
              <p className="text-white">{user.phone}</p>
              {user.role === 'admin' && (
                <>
                  <p className="text-white">{user.businessName}</p>
                  <p className="text-white">{user.businessAddress}</p>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="px-6 py-4 border-b">
          <h2 className="text-xl font-semibold text-gray-900">Statistics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            <div className="bg-blue-100 p-4 rounded shadow">
              <h3 className="text-lg font-medium text-gray-900">Orders</h3>
              <p className="text-gray-700">0</p>
            </div>
            <div className="bg-blue-100 p-4 rounded shadow">
              <h3 className="text-lg font-medium text-gray-900">Reviews</h3>
              <p className="text-gray-700">0</p>
            </div>
            <div className="bg-blue-100 p-4 rounded shadow">
              <h3 className="text-lg font-medium text-gray-900">Favorites</h3>
              <p className="text-gray-700">0</p>
            </div>
          </div>
        </div>

        <div className="px-6 py-4 border-b">
          <h2 className="text-xl font-semibold text-gray-900">Order History</h2>
          <div className="mt-4">
            <p className="text-gray-600">No orders found.</p>
          </div>
        </div>

        <div className="px-6 py-4 border-b">
          <h2 className="text-xl font-semibold text-gray-900">Recent Activities</h2>
          <div className="mt-4">
            <p className="text-gray-600">No recent activities found.</p>
          </div>
        </div>

        <div className="px-6 py-4">
          <h2 className="text-xl font-semibold text-gray-900">Settings</h2>
          <div className="mt-4 flex flex-col gap-4">
            {/* Settings options can be added here if needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

