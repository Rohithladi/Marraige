import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const EventSlider = () => {
  const events = [
    {
      title: 'Haldi Ceremony',
      date: 'March 14, 2025, 10:00 AM',
      location: "Arun's Residence",
      details: 'A joyous celebration with turmeric and rituals!',
      themeIcon: '🌼',
      image: 'https://example.com/haldi-ceremony.jpg', // Replace with actual image URL
      icon: <FaMapMarkerAlt />,
    },
    {
      title: 'Wedding Ceremony',
      date: 'March 15, 2025, 6:00 PM',
      location: 'Grand Venue Hall',
      details: 'The main event with vows, blessings, and celebration!',
      themeIcon: '💒',
      image: 'https://example.com/wedding-ceremony.jpg', // Replace with actual image URL
      icon: <FaMapMarkerAlt />,
    },
    {
      title: 'Reception',
      date: 'March 16, 2025, 7:00 PM',
      location: 'Royal Banquet',
      details: 'An evening of festivities and warm wishes.',
      themeIcon: '🎉',
      image: 'https://example.com/reception.jpg', // Replace with actual image URL
      icon: <FaMapMarkerAlt />,
    },
  ];

  return (
    <div className="relative w-full h-screen bg-gradient-to-r from-pink-100 via-white to-pink-100">
      {/* Carousel Container */}
      <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center p-6">
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
          <h2 className="text-center text-3xl font-bold text-pink-700 mb-6">
            Wedding Events <span className="text-4xl">💍</span>
          </h2>

          {/* Carousel */}
          <div className="flex overflow-x-auto space-x-6 scrollbar-hide">
            {events.map((event, index) => (
              <div
                key={index}
                className="carousel-item flex flex-col items-center text-center bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-lg p-6 min-w-[250px] max-w-[300px] border-2 border-pink-200"
              >
                {/* Event Image */}
                <div className="w-full h-56 bg-cover bg-center rounded-lg mb-4" style={{ backgroundImage: `url(${event.image})` }}></div>

                {/* Event Icon and Title */}
                <div className="text-4xl mb-4 animate-bounce text-pink-500">{event.themeIcon}</div>
                <h3 className="text-lg font-semibold text-pink-700 mb-2">{event.title}</h3>

                {/* Event Details */}
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Date:</strong> {event.date}
                </p>
                <p className="text-sm text-gray-500 mb-2">
                  <strong>Location:</strong> {event.location} {event.icon}
                </p>
                <p className="text-sm text-gray-700">{event.details}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Optional: Add Background Effect */}
    </div>
  );
};

export default EventSlider;
