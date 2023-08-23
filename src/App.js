import React from "react";
import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    // Function to open a new webpage after 5 seconds
    const openNewPage = () => {
      window.location.href = 'https://nkv-portfolio-1.netlify.app/'; // Replace with your desired URL
    };

    // Set a timeout for 3 seconds
    const timeoutId = setTimeout(openNewPage, 3000); // Change the delay time as per your requirement

    // Clear the timeout if the component is unmounted before the timeout completes
    return () => clearTimeout(timeoutId);
  },[]);
  return (
    <>
      <div id="image">
          <h1>WELCOME TO MY PORTFOLIO</h1>
      </div>
    </>
  );
}

export default App;
