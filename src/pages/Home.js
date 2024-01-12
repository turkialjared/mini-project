import React from "react";

const Home = () => {
  const backgroundImageStyle = {
    backgroundImage: 'url("bank.jpeg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh", // Adjust the height as needed
  };
  return (
    <div style={backgroundImageStyle}>
      <div className="float-md-left ">
        <div className="w-25  d-inline-block row d-flex justify-content-space-between kk ">
          <h1> This Project Is Made By </h1>
          <h3>Amal Alzabi</h3>
          <h3>Turki Almutairi</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
