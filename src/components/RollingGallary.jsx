import React, { useState, useEffect, useRef } from "react";
import A7 from "../components/images/7.jpg";
import A8 from "../components/images/8.jpg";
import A9 from "../components/images/9.jpg";
import A10 from "../components/images/10.jpg";
import A11 from "../components/images/Family.jpg";

const SlidingGallery = () => {
  const images = [A7, A8, A9, A10, A11, A7, A8, A9, A10, A11]; // Duplicate images for seamless looping
  const scrollRef = useRef(null);
  const [currentImage, setCurrentImage] = useState(null);
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const targetDate = new Date(Date.UTC(2025, 2, 16, 3, 40, 0)).getTime(); // Ensure correct UTC time
  
    const updateCountdown = () => {
      const now = new Date().getTime(); // Ensure now is in UTC
      const difference = targetDate - now;
  
      if (difference <= 0) {
        setTimeLeft("💖 It's Wedding Time! 🎉");
        return;
      }
  
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };
  
    const interval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Run once immediately
  
    return () => clearInterval(interval);
  }, []);
  

  useEffect(() => {
    // Scrolling logic
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;

    const scrollInterval = setInterval(() => {
      scrollAmount += 1; // Speed of scrolling
      scrollContainer.scrollLeft = scrollAmount;

      // Reset scroll to create seamless loop
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }
    }, 16); // Smooth scrolling at ~60fps

    return () => clearInterval(scrollInterval);
  }, []);

  const openModal = (image) => {
    setCurrentImage(image);
  };

  const closeModal = () => {
    setCurrentImage(null);
  };

  return (
    <div className="relative flex flex-col items-center">
      {/* Countdown Timer */}
      <div className="text-2xl font-bold text-white bg-black px-4 py-2 rounded-lg mb-4">
        Countdown: {timeLeft}
      </div>

      {/* Sliding Gallery */}
      <div ref={scrollRef} className="flex overflow-x-hidden whitespace-nowrap items-center gap-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery ${index + 1}`}
            className="w-64 h-64 object-cover rounded-xl shadow-lg cursor-pointer"
            onClick={() => openModal(image)}
          />
        ))}
      </div>

      {/* Modal */}
      {currentImage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50" onClick={closeModal}>
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-4 right-4 bg-white rounded-full p-2 text-pink-600 z-50" onClick={closeModal}>
              ✖
            </button>
            <img src={currentImage} alt="Full View" className="w-full h-auto object-contain rounded-lg" />
          </div>
        </div>
      )}
    </div>
  );
};

export default SlidingGallery;
