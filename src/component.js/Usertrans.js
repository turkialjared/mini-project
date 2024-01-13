import React from "react";

const Usertrans = ({ amount, type }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      {type == "deposit" ? (
        <div class="card jj">
          <div class="card-header bg-success">{type}</div>
          <div class="card-body">
            <blockquote class="blockquote mb-0">{amount}</blockquote>
          </div>
        </div>
      ) : type == "withdraw" ? (
        <div class="card jj">
          <div class="card-header bg-danger ">{type}</div>
          <div class="card-body">
            <blockquote class="blockquote mb-0">{amount}</blockquote>
          </div>
        </div>
      ) : (
        <div class="card jj">
          <div class="card-header bg-danger-subtle ">{type}</div>
          <div class="card-body">
            <blockquote class="blockquote mb-0">{amount}</blockquote>
          </div>
        </div>
      )}
    </div>
  );
};

export default Usertrans;
