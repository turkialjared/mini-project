import React from "react";

const Usertrans = ({ amount, type, key }) => {
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
            <blockquote class="blockquote mb-0">{amount}</blockquote>
          </div>
        </div>
      ) : type == "withdraw" ? (
        <div class="card zz">
          <div class="card-header bg-danger ">{type}</div>
          <div class="card-body">
            <blockquote class="blockquote mb-0">{amount}</blockquote>
          </div>
        </div>
      ) : (
        <div class="card zz">
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
