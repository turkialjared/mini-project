import { useQuery } from "@tanstack/react-query";
import { my } from "../api/auth";

const Transactions = () => {
  const { data: transactions, isLoading } = useQuery({
    queryKey: ["transactions"],
    queryFn: my,
  });

  const mytransactions = transactions?.map((trans) => trans.amount);
  console.log(mytransactions);
  return (
    <>
      {isLoading ? (
        <>is Loading..</>
      ) : (
        <h3>username={mytransactions} balance</h3>
      )}
    </>
  );
};

export default Transactions;
