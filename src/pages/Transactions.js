import { useQuery } from "@tanstack/react-query";
import { my } from "../api/auth";
import Usertrans from "../component.js/Usertrans";
import { useState } from "react";

const Transactions = () => {
  const dayjs = require("dayjs");
  const [Type, setType] = useState("");
  const [query, setquery] = useState("");
  const { data: transactions, isLoading } = useQuery({
    queryKey: ["transactions"],
    queryFn: my,
  });
  const search = (e) => {
    setquery(e.target.value);
  };

  const search2 = (e) => {
    setType(e.target.value);
  };

  const mytransaction = transactions
    ?.filter((trans) => (Type ? trans.type === Type : true))
    ?.filter((trans) =>
      query
        ? trans.description.toLowerCase().includes(query.toLowerCase())
        : true
    )
    ?.map((trans) => (
      <Usertrans key={trans.id} amount={trans.amount} type={trans.type} />
    ));
  return (
    <>
      {isLoading ? (
        <>is Loading..</>
      ) : (
        <>
          <div style={{ height: "100px" }}>
            <h1 className="m-5">This is the transactions page</h1>
          </div>
          <h3
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
            }}
          >
            <div className="input-group rounded">
              <input
                onChange={search}
                type="search"
                className="form-control rounded"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
              />
            </div>
            <br />
            Type:
            <select className="form-select" onChange={search2}>
              <option value="" selected>
                All
              </option>
              <option value="deposit">deposit</option>
              <option value="withdraw">withdraw</option>
              <option value="transfer">transfer</option>
            </select>
            {mytransaction}
          </h3>
        </>
      )}
    </>
  );
};

export default Transactions;
