import React from "react";
import { getAllUsers, getUserById } from "../api/auth";
import { useQuery } from "@tanstack/react-query";

const Usertrans = ({ amount, type, date, from, to }) => {
  const { data: user } = useQuery({
    queryKey: ["user"],
    queryFn: () => getUserById(from),
  });
  const { data: user1 } = useQuery({
    queryKey: ["user1"],
    queryFn: () => getUserById(to),
  });
  console.log(to);
  console.log(from);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        flexDirection: "row",
      }}
    >
      {type == "deposit" ? (
        <div class="card zz">
          <div class="card-header bg-success">{type}</div>
          <div class="card-body">
            <blockquote class="blockquote mb-0">
              {amount}
              <h5> {date}</h5>
              <h5>{user?.username}</h5>
            </blockquote>
          </div>
        </div>
      ) : type == "withdraw" ? (
        <div class="card zz">
          <div class="card-header bg-danger ">{type}</div>
          <div class="card-body">
            <blockquote class="blockquote mb-0">
              {amount}
              <h5> {date}</h5>
              <h5>{user?.username}</h5>
            </blockquote>
          </div>
        </div>
      ) : (
        <div class="card zz">
          <div class="card-header bg-danger-subtle ">{type}</div>
          <div class="card-body">
            <blockquote class="blockquote mb-0">
              {amount}
              <h5> {date}</h5>
              <h5>from: {user?.username}</h5>
              <h5>to: {user1?.username}</h5>
            </blockquote>
          </div>
        </div>
      )}
    </div>
  );
};

export default Usertrans;
