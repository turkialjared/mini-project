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
      <div
        className="d-flex justify-content-center align-items-center "
        style={{ height: "100vh" }}
      >
        <div className="float-md-left ">
          <div
            className="d-inline-block row d-flex justify-content-space-between kk"
            style={{ width: "700px", height: "350px" }}
          >
            <h1> This Project Is Made By </h1>
            <h3>Amal Alzabi</h3>
            <h3>Turki Almutairi</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
