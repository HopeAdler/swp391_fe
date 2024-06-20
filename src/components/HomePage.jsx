import React from "react";

const courts = [
  {
    id: 1,
    name: "Court 1",
    location: "Main Hall",
    imageUrl: "https://example.com/court1.jpg",
    price: "$20/hr",
  },
  {
    id: 2,
    name: "Court 2",
    location: "Outdoor",
    imageUrl: "https://example.com/court2.jpg",
    price: "$15/hr",
  },
  {
    id: 3,
    name: "Court 3",
    location: "Practice Area",
    imageUrl: "https://example.com/court3.jpg",
    price: "$25/hr",
  },
  {
    id: 4,
    name: "Court 4",
    location: "VIP Section",
    imageUrl: "https://example.com/court4.jpg",
    price: "$30/hr",
  },
  {
    id: 5,
    name: "Court 5",
    location: "Training Room",
    imageUrl: "https://example.com/court5.jpg",
    price: "$18/hr",
  },
  {
    id: 6,
    name: "Court 6",
    location: "Indoor Stadium",
    imageUrl: "https://example.com/court6.jpg",
    price: "$22/hr",
  },
];

const HomePage = () => {
  const handleLogout = () => {
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Badminton Court Booking</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Book Now
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
              <li>
                <button onClick={handleLogout} className="hover:underline">
                  Log Out
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow bg-gray-100">
        <div
          className="hero bg-cover bg-center h-96"
          style={{
            backgroundImage: "url('https://example.com/hero-image.jpg')",
          }}
        >
          <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
            <h2 className="text-white text-4xl font-bold">
              Welcome to the Best Badminton Courts
            </h2>
          </div>
        </div>

        <section className="container mx-auto p-6">
          <h3 className="text-3xl font-bold mb-4">Book Your Court Easily</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {courts.map((court) => (
              <div
                key={court.id}
                className="bg-white shadow-md rounded-lg overflow-hidden"
              >
                <img
                  src={court.imageUrl}
                  alt={court.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="text-xl font-semibold">{court.name}</h4>
                  <p className="text-gray-600 mb-2">{court.location}</p>
                  <p className="text-gray-700">{court.price}</p>
                  <button className="mt-4 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Badminton Court Booking. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
