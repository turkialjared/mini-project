import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { transferMoney } from "../api/auth";

const UserCard = ({ image, username, addClass, profile }) => {
  const [amount, setAmount] = useState(0);
  const queryClient = useQueryClient();

  const { mutate: transfer } = useMutation({
    mutationFn: () =>
      transferMoney({
        amount,
        username,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries(["transfer"]);
      onclose();
    },
  });
  const handleFormSubmit = (e) => {
    e.preventDefault();
    transfer();
  };
  return (
    <div
      className={`card new-style ${profile && addClass}`}
      style={{ width: "500px" }}
    >
      <figure className="px-5 pt-5">
        <img
          src={image}
          alt="User Profile"
          className={profile ? addClass : "w-24 h-24 rounded-full mb-4"}
        />
      </figure>
      <div className="card-body m-4">
        <h5 className="card-title mb-1">{username}</h5>
        <div class="input-group mb-3">
          <button
            onClick={handleFormSubmit}
            class="btn btn-outline-secondary SS"
            type="button"
            id="button-addon1"
          >
            transfer
          </button>
          <input
            type="text"
            class="form-control"
            placeholder=""
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"
          />
        </div>
      </div>
    </div>
  );
};

export default UserCard;
