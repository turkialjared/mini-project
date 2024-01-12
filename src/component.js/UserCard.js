import React, { useState } from "react";

const UserCard = ({ image, username, addClass, profile }) => {
  const [show, setShow] = useState(false);
  const onClose = () => setShow(false);
  const onOpen = () => setShow(true);

  return (
    <div
      className={`card w-96 bg-base-100 shadow-xl SS ${profile && addClass}`}
    >
      <figure className="px-5 pt-5">
        <img
          src={image}
          alt="User Profile"
          className={profile ? addClass : "w-24 h-24 rounded-full mb-4"}
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{username}</h2>
        {!profile && (
          <div className="card-actions">
            <button
              className="btn btn-ghost hover:bg-green-500 hover:text-white"
              onClick={onOpen}
            >
              Transfer
            </button>
          </div>
        )}
      </div>
      {!profile && (
        <div
          className={`fixed inset-0 flex items-center justify-center z-50 ${
            show ? "" : "hidden"
          }`}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="z-10 bg-white rounded-lg p-5">
            <h2 className="text-xl font-semibold mb-4">Transfer Money</h2>
            <form onSubmit={() => {}}>
              <div className="mb-4">
                <label htmlFor="amount" className="block text-gray-700">
                  Amount
                </label>
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-400"
                  required
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-primary hover:bg-blue-600"
                >
                  Send
                </button>
                <button
                  type="button"
                  className="btn btn-ghost ml-2 hover:bg-gray-400"
                  onClick={onClose}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserCard;
