import React, { useState, useEffect, useRef } from "react";
import '../index.css';
import weddingVideo from '../components/videoplayback (2).mp4';
import { FaImage, FaHeart, } from 'react-icons/fa';
import engagementRing from '../components/file.png';  // Adjust the path as needed
// import ReceptionImage from '../components/wedding.png';

import A1 from '../components/images/1.jpg';
import A2 from '../components/images/2.jpg';
import A3 from '../components/images/3.jpg';
import A4 from '../components/images/4.jpg';
import A5 from '../components/images/5.jpg';
import A6 from '../components/images/6.jpg';
import A7 from '../components/images/7.jpg';
import A8 from '../components/images/8.jpg';
import A9 from '../components/images/9.jpg';
import A10 from '../components/images/10.jpg';
import A11 from '../components/images/11.jpg';
import A12 from '../components/images/12.jpg';
import A13 from '../components/images/13.jpg';
import A14 from '../components/images/14.jpg';
import A15 from '../components/images/15.jpg';
import A16 from '../components/images/16.jpg';
import A17 from '../components/images/17.jpg';
import A18 from '../components/images/18.jpg';
import A20 from '../components/images/20.jpg';
import A21 from '../components/images/21.jpg';
import A22 from '../components/images/22.jpg';
import A23 from '../components/images/23.jpg';
import A24 from '../components/images/24.jpg';
import A25 from '../components/images/25.jpg';
import A26 from '../components/images/26.jpg';
import A27 from '../components/images/27.jpg';
import A28 from '../components/images/28.jpg';
import A29 from '../components/images/29.jpg';
import A30 from '../components/images/30.jpg';
import A31 from '../components/images/31.jpg';
import A32 from '../components/images/32.jpg';
import A33 from '../components/images/33.jpg';
import A34 from '../components/images/34.jpg';
import A35 from '../components/images/35.jpg';
import A36 from '../components/images/36.jpg';
import Tejaswi from '../components/images/Tejaswis.jpg';
import Bride from '../components/images/Bride.jpg';
import Groom from '../components/images/Groom.jpg';

import Family from '../components/images/Family.jpg';
import Anand from '../components/images/Sangeet.jpg';





function LandingPage() {

  const images = [
    A1, A2, A3, A4, A5, A6, A7, A8, A9, A10,
    A11, A12, A13, A14, A15, A16, A17, A18, A20,
    A21, A22, A23, A24, A25, A26, A27, A28, A29, A30,
    A31, A32, A33, A34, A35, Family, A36,
  ];
  const scrollRef = useRef(null);

  const galleryRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);  // To track if the animation is paused

  const [textVisible, setTextVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState("");


  const [currentImage, setCurrentImage] = useState(null);


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    const endOfMarch15 = new Date(Date.UTC(2025, 2, 15, 0, 0, 0)); // March 15, 2025, 00:00 UTC

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = endOfMarch15.getTime() - now;

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

    updateCountdown(); // Initial call
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval); // Cleanup
  }, []);


  useEffect(() => {
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

  const handleImageClick = (imageSrc) => {
    setModalImage(imageSrc);
    setIsModalOpen(true);
  };

  useEffect(() => {
    const gallery = galleryRef.current;

    if (!gallery) return;

    const checkAndLoop = () => {
      if (gallery.scrollLeft + gallery.clientWidth >= gallery.scrollWidth - gallery.clientWidth / 2) {
        // If the last image is halfway through, reset to the beginning
        gallery.scrollLeft = 0;
      }
    };

    const interval = setInterval(checkAndLoop, 100); // Check every 100ms

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  useEffect(() => {
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
    setModalImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage("");
  };


  const openModals = (image) => {
    setCurrentImage(image);
  };

  const closeModals = () => {
    setCurrentImage(null);
  };



  useEffect(() => {
    const timer = setTimeout(() => setTextVisible(false), 15000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleInteraction = () => {
      setTextVisible(true);
      const hideTimer = setTimeout(() => setTextVisible(false), 15000);
      return () => clearTimeout(hideTimer);
    };

    window.addEventListener("mousemove", handleInteraction);
    window.addEventListener("touchstart", handleInteraction);
    window.addEventListener("scroll", handleInteraction); // Add this line for scroll interaction

    return () => {
      window.removeEventListener("mousemove", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
      window.removeEventListener("scroll", handleInteraction); // Add this line for scroll interaction

    };
  }, []);

  return (

    <div className="h-screen overflow-y-scroll snap-y snap-mandatory font-sans scroll-hidden">

      {/* Section 1: Hero Section */}
      <div
        id="hero"
        className="snap-start flex flex-col items-center justify-center h-screen relative bg-gray-600"
      >

        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src={weddingVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-40"></div>
        </div>



        {/* Hero Content */}


        <div className="fixed bottom-4 right-4 bg-pink-500 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-lg border-2 border-pink-300 ">
          💑 Wedding in: {timeLeft}
        </div>
        <div className="absolute bottom-20 left-5 text-pink-300 text-lg font-bold animate-bounce flex items-center gap-1">
          <p>Scroll Down 👇</p>
        </div>

        <div
          className={`z-10 text-center text-white px-4 flex flex-col items-center justify-center transition-all duration-1000 ${textVisible ? "opacity-100 blur-0" : "opacity-0 blur-md"
            }`}
          style={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            maxWidth: "80%",
          }}
        >
          <h1 className="text-4xl sm:text-6xl font-bold mb-4 flex flex-col sm:flex-row items-center justify-center relative font-[Dancing Script]">
            <span>Koushik & Sushma's Wedding</span>
            <FaHeart
              className="text-pink-500 animate-bounce sm:ml-2 sm:mt-0 sm:relative sm:top-[13px] mt-4"
            />
          </h1>

          <p className="text-lg sm:text-xl max-w-lg mx-auto">
            Together with their families, you're invited to celebrate their magical
            day!
          </p>
          <button
            onClick={() => {
              const galleryElement = document.getElementById("schedule");
              if (galleryElement) {
                galleryElement.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="mt-8 bg-pink-500 text-white font-semibold text-lg py-3 px-8 rounded-full shadow-lg hover:bg-pink-600 transition duration-300 flex items-center gap-3 justify-center mx-auto"
          >
            <FaImage className="text-white text-xl" />
            View Gallery
          </button>

        </div>
      </div>




      {/* Section 2: Schedule */}

      <div
        id="schedule"
        className="snap-start relative bg-gradient-to-r from-pink-100 via-white to-pink-100 py-16 px-4 sm:px-8 overflow-hidden"
      >
        {/* Background Animations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Animated Rings */}
          <div className="absolute bottom-10 right-10 animate-float-reverse">
            <img
              src={engagementRing}
              alt="Engagement Ring"
              className="w-14 h-14 object-contain"
            />
          </div>
          <div className=" inset-0 grid place-items-center"> {/* Centering container */}
            <div className="mt-auto bg-pink-500 text-white text-sm font-semibold px-6 py-4 rounded-lg shadow-lg border-2 border-pink-300">
              💑 Wedding in: {timeLeft}
            </div>
          </div>

          {/* Falling Hearts */}
          <div className="absolute top-0 left-1/4 text-pink-500 text-4xl animate-heart-fall">
            ❤️
          </div>
          <div className="absolute top-0 right-1/4 text-red-400 text-5xl animate-heart-fall delay-200">
            💖
          </div>
          <div className="absolute top-1/4 left-1/3 text-pink-300 text-6xl animate-heart-fall delay-400">
            💕
          </div>
          <div className="absolute top-1/2 left-2/5 text-purple-500 text-4xl animate-heart-fall">
            💝
          </div>
          <div className="absolute top-1/3 right-1/4 text-red-400 text-3xl animate-heart-fall delay-300">
            💘
          </div>
          <div className="absolute top-2/3 left-1/5 text-pink-300 text-5xl animate-heart-fall delay-500">
            💓
          </div>
          <div className="absolute top-1/4 right-1/5 text-red-600 text-6xl animate-heart-fall delay-600">
            💞
          </div>
          <div className="absolute top-3/4 left-2/3 text-purple-400 text-4xl animate-heart-fall delay-700">
            ❤️
          </div>
          <div className="absolute top-1/2 left-1/4 text-pink-400 text-5xl animate-heart-fall delay-800">
            💖
          </div>
          <div className="absolute top-2/3 right-1/5 text-red-500 text-4xl animate-heart-fall delay-900">
            💘
          </div>
        </div>

        <h2 className="text-3xl font-extrabold text-center text-pink-700 mb-12 flex items-center justify-center">
          Wedding Photos Gallery
        </h2>

        {/* Carousel Layout */}
        <div className="gallery-container w-full max-w-4xl mx-auto border-4 border-pink-300 rounded-lg   border-solid">
          <div className={`gallery-items ${isPaused ? 'paused' : ''}`}> {/* Conditionally add 'paused' class */}
            {[
              { image: A1 },
              { image: A2 },
              { image: A3 },
              { image: A4 },
              { image: A5 },
              { image: A6 },
              { image: A7 },
              { image: A8 },
              { image: A9 },
              { image: A10 },
              { image: A11 },
              { image: A12 },
              { image: A13 },
              { image: A14 },
              { image: A15 },
              { image: A16 },
              { image: A17 },
              { image: A18 },
              { image: A20 },
              { image: A21 },
              { image: A22 },
              { image: A23 },
              { image: A24 },
              { image: A25 },
              { image: A26 },
              { image: A27 },
              { image: A28 },
              { image: A29 },
              { image: A30 },
              { image: A31 },
              { image: A32 },
              { image: A33 },
              { image: A34 },
              { image: A35 },


            ].map((photo, index) => (
              <div
                key={index}
                className={`gallery-item flex items-center justify-center bg-white-100 rounded-lg overflow-hidden ${photo.image === A6 ? "col-span-2 md:col-span-3" : ""
                  }`}
              >                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full rounded-lg shadow-lg"
                  onClick={() => handleImageClick(photo.image)}
                  onMouseEnter={() => setIsPaused(true)} // Pause on hover
                  onMouseLeave={() => setIsPaused(false)} // Resume on hover out
                />

              </div>
            ))}
          </div>

        </div>
        {isModalOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            onClick={closeModal} // Close modal when clicking outside the image
          >
            <div className="relative bg-white p-5 rounded-lg max-w-3xl">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-xl font-bold text-gray-800 bg-gray-200 rounded-full px-3 py-1 hover:bg-gray-400"
              >
                ✕
              </button>
              <img
                src={modalImage}
                alt="Expanded view"
                className="w-full max-h-[90vh] object-contain rounded-lg"
              />
            </div>
          </div>
        )}
        <div className="quote-container">
          <p className="quote-text">"Love is a journey we create, one memory at a time."</p>
        </div>
        <div class="flex justify-center relative top-8">
          <button
            onClick={() => {
              const footerElement = document.getElementById("footer");
              if (footerElement) {
                footerElement.scrollIntoView({ behavior: "smooth" });
              }
            }}
            class="bg-pink-500 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-pink-600 hover:scale-110 transform transition-all duration-300 ease-in-out border-2 border-pink-700"
          >
            Click Me
          </button>
        </div>
        <div className="absolute bottom-20 left-5 text-pink-800 text-sm font-semibold animate-bounce flex items-center gap-1">
          <p>Scroll Down 👇</p>
        </div>






      </div>


      {/* Section 3: Footer */}
      <div
        id="footer"
        className="snap-start bg-gradient-to-t from-pink-600 via-pink-400 to-pink-300 w-full h-full py-12 text-white text-center relative"
      >
        {/* Title */}
        <p className="text-2xl sm:text-2xl font-bold font-serif text-pink-900 tracking-wider">
          ❤️ Koushik & Sushma's Wedding
        </p>
        <p className="text-lg mt-2 text-pink-50">
          Celebrating Love on March 15, 2025
        </p>

        {/* Divider */}
        <div className="w-20 h-1 bg-pink-800 mx-auto my-6 rounded-full"></div>

        {/* Bride's and Groom's Family Photos */}
        <div className="flex flex-wrap justify-center items-center gap-6 mt-8 px-4">
          <div className="flex-1 max-w-[45%] sm:max-w-[30%] cursor-pointer">
            <img
              src={Bride}
              alt="Bride's Family"
              className="rounded-xl shadow-lg w-full h-auto border-4 border-pink-700"
              onClick={() => openModal(Bride)}
            />
            <p className="mt-3 text-base font-medium text-pink-900">
              Bride's Family
            </p>
          </div>
          <div className="flex-1 max-w-[45%] sm:max-w-[30%] cursor-pointer">
            <img
              src={Groom}
              alt="Groom's Family"
              className="rounded-xl shadow-lg w-full h-auto border-4 border-pink-700"
              onClick={() => openModal(Groom)}
            />
            <p className="mt-3 text-base font-medium text-pink-900">
              Groom's Family
            </p>
          </div>
        </div>

        {/* Romantic Quote */}
        <p className="italic text-lg mt-8 px-6 text-pink-50 mb-10">
          "A successful marriage requires falling in love many times, always with
          the same person."
        </p>
        <div className="absolute bottom-20 left-5 text-white text-sm font-semibold animate-bounce flex items-center gap-1">
          <p>Scroll Down 👇</p>
        </div>

        {/* Modal */}
        {showModal && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={closeModal}
          >
            <div
              className="bg-white rounded-lg overflow-hidden shadow-lg"
              onClick={(e) => e.stopPropagation()} // Prevent close on image click
            >
              <img
                src={modalImage}
                alt="Modal"
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <button
                className="absolute top-4 right-4 text-white text-xl bg-pink-600 rounded-full px-4 py-2 hover:bg-pink-800"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Footer Decoration */}
        <div className="relative">
          {/* Sliding Gallery */}
          <div
            ref={scrollRef}
            className="flex overflow-x-hidden whitespace-nowrap items-center gap-2"
          >
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-40 h-40 object-cover rounded-xl shadow-lg cursor-pointer"
                onClick={() => openModals(image)}
              />
            ))}
          </div>

          {/* Modal */}
          {currentImage && (
            <div
              className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
              onClick={closeModals}
            >
              <div
                className="relative max-w-4xl w-full"
                onClick={(e) => e.stopPropagation()} // Prevent close on modal content click
              >
                <button
                  className="absolute top-4 right-4 bg-white rounded-full p-2 text-pink-600 z-50"
                  onClick={closeModals}
                >
                  ✖
                </button>
                <img
                  src={currentImage}
                  alt="Full View"
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>
            </div>
          )}
        </div>


      </div>

      {/* Locations Section */}
      <div
        id="locations"
        className="snap-start bg-gradient-to-t from-pink-600 via-pink-400 to-pink-300 w-full h-full py-12 text-white text-center relative"
      >
        {/* Title */}
        <p className="text-2xl sm:text-2xl font-bold font-serif text-pink-900 tracking-wider">
          🗺️ Locations
        </p>



        {/* Divider */}
        <div className="w-20 h-1 bg-pink-800 mx-auto my-6 rounded-full"></div>
        <p className="text-lg mt-4 text-pink-800 font-extrabold tracking-wide">
          Wedding Date: March 15, 2025 💖
        </p>


        {/* Locations */}
        <div className="flex flex-wrap justify-center items-center gap-6 mt-8 px-4">
          {/* Location 1 */}
          <div className="flex-1 max-w-[38%] sm:max-w-[40%] cursor-pointer">
            <img
              src={Tejaswi}
              alt="Wedding Ceremony Venue"
              className="rounded-xl shadow-lg w-full h-auto border-4 border-pink-700"
              onClick={() => openModal(Tejaswi)}
            />
            <p className="mt-3 text-base font-medium text-pink-900">Hotel Tejaswi Grounds</p>

            <a
              href="https://maps.app.goo.gl/vv6stV4A4W2de2q56"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-200 mt-2 block hover:underline"
            >
              View on Map
            </a>
          </div>

          {/* Location 2 */}
          <div className="flex-1 max-w-[45%] sm:max-w-[30%] cursor-pointer">
            <img
              src={Anand}
              alt="Sangeet Night"
              className="rounded-xl shadow-lg w-full h-auto border-4 border-pink-700"
              onClick={() => openModal(Anand)}
            />
            <p className="mt-3 text-base font-medium text-pink-900">Sangeet Night(At Wedding Venue)</p>
            <a
              href="https://maps.app.goo.gl/vv6stV4A4W2de2q56"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-200 mt-2 block hover:underline"
            >
              View on Map
            </a>
          </div>


          <p className="text-md mt-2 text-pink-200 italic">
            Come with your family and bless the couple with your love and best wishes.
          </p>
          <p className="text-sm mt-2 text-white-400 font-semibold">
            For any queries, call
            <a href="tel:+917008482968" className="bg-pink-600 text-white px-2 py-1 rounded-lg shadow-lg hover:bg-pink-700 transition">
              7008482968
            </a>
          </p>

        </div>



        {/* Location Modal */}
        {showModal && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={closeModal}
          >
            <div
              className="bg-white rounded-lg overflow-hidden shadow-lg"
              onClick={(e) => e.stopPropagation()} // Prevent close on image click
            >
              <img
                src={modalImage}
                alt="Modal"
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <button
                className="absolute top-4 right-4 text-white text-xl bg-pink-600 rounded-full px-4 py-2 hover:bg-pink-800"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>

    </div>
  );
}

export default LandingPage;
