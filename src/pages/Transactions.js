import { useQuery } from "@tanstack/react-query";
import { my } from "../api/auth";
import UserProfileCard from "../component.js/Userprofile";

const Transactions = () => {
  const { data: transactions, isLoading } = useQuery({
    queryKey: ["transactions"],
    queryFn: my,
  });

  const mytransactions = transactions?.filter((trans) =>
    trans.amount.toString()
  );
  console.log(mytransactions);
  return (
    <>
      {isLoading ? (
        <>is Loading..</>
      ) : (
        <h3>username={transactions.data} balanc</h3>
      )}
    </>
  );
};

export default Transactions;
