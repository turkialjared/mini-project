import { useQuery } from "@tanstack/react-query";
import { my } from "../api/auth";
import Usertrans from "../component.js/Usertrans";

const Transactions = () => {
  const { data: transactions, isLoading } = useQuery({
    queryKey: ["transactions"],
    queryFn: my,
  });

  const mytransaction = transactions
    ?.filter((trans) => trans.type)
    .map((trans) => <Usertrans amount={trans.amount} type={trans.type} />);
  console.log(transactions);
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
            {mytransaction}
          </h3>
        </>
      )}
    </>
  );
};

export default Transactions;
