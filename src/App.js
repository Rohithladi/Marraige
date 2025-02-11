import React from "react";
import LandingPage from "./components/Landing";
// import RollingGallary from "./components/RollingGallary";
import './index.css';  // Make sure this line exists and imports the CSS


// import RollingGallery from "./components/RollingGallary" ;

function App() {
  return (
    <div>
      <LandingPage />
      {/* <RollingGallery autoplay={true} pauseOnHover={true} /> */}

    </div>
  );
}

export default App;
