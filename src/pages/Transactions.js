import { useQuery } from "@tanstack/react-query";
import { getAllUsers, my } from "../api/auth";
import Usertrans from "../component.js/Usertrans";
import { useEffect, useState } from "react";
import dayjs from "dayjs";

const Transactions = () => {
  const dayjs = require("dayjs");
  const [todate, settodate] = useState("");
  const [fromDate, setfromDate] = useState("");
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

  const search3 = (e) => {
    setfromDate(e.target.value);
  };
  const search4 = (e) => {
    settodate(e.target.value);
  };

  const mytransaction = transactions
    ?.filter((trans) => (Type ? trans.type === Type : true))
    ?.filter((trans) => (query ? trans.amount == query : true))
    ?.filter((trans) => trans.amount !== 0)

    ?.filter((trans) =>
      dayjs(trans.createdAt).format("DD/MM/YYYY").includes(fromDate)
    )
    ?.map((trans) => (
      <Usertrans
        key={trans.username}
        amount={trans.amount}
        type={trans.type}
        date={dayjs(trans.createdAt).format("DD/MM/YYYY")}
        from={trans.from}
        to={trans.to}
      />
    ));
  console.log(transactions);

  return (
    <>
      {isLoading ? (
        <>is Loading..</>
      ) : (
        <>
          <div>
            <div className="container mt-4">
              <h1 className="mb-4">Transactions Page</h1>
              <div className="row">
                <div className="col-md-4">
                  <div className="input-group mb-3">
                    <input
                      onChange={search}
                      type="search"
                      className="form-control rounded"
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="search-addon"
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="input-group mb-3">
                    <span className="input-group-text">Date from to</span>
                    <input
                      type="text"
                      aria-label="Date range"
                      className="form-control"
                      placeholder="DD/MM/YYYY"
                      onChange={search3}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="input-group mb-3">
                    <label className="input-group-text" htmlFor="selectType">
                      Type:
                    </label>
                    <select
                      id="selectType"
                      className="form-select"
                      onChange={search2}
                    >
                      <option value="">All</option>
                      <option value="deposit">Deposit</option>
                      <option value="withdraw">Withdraw</option>
                      <option value="transfer">Transfer</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="container mt-4 ">
              <div className="qq">
                {mytransaction.length > 0 ? (
                  mytransaction
                ) : (
                  <p>No transactions found.</p>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Transactions;
