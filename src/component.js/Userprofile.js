import React from "react";

const UserProfileCard = ({ username, image, balance }) => {
  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <div className="d-flex row justify-content-center ">
        <div className="col-md-6 d-flex justify-content-center">
          <div
            className="card mt-5 justify-content-space-between SS text-center w-50"
            style={{ height: "325px" }}
          >
            <img
              src={`https://react-bank-project.eapi.joincoded.com/${image}`}
              alt="User Profile"
              className="rounded d-block mx-auto mb-5 mt-5"
              style={{ width: "100px" }}
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
