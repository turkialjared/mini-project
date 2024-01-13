import React from "react";

const UserProfileCard = ({ username, image, balance }) => {
  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <div className="d-flex row justify-content-center ">
        <div className="col-md-6 justify-content-between">
          <div
            className="card mt-5 justify-content-between SS"
            style={{ height: "325px" }}
          >
            <img
              src={image}
              alt="User Profile"
              className="card-img-top img-fluid rounded-circle mb-5"
            />
            <div className="card-body text-center">
              <h2 className="card-title mb-5">Welcome {username}</h2>
              <p className="card-text mb-5">Your Balance is : ${balance}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
