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
  console.log(mytransaction);
  return (
    <>
      {isLoading ? (
        <>is Loading..</>
      ) : (
        <>
          <h3>{mytransaction}</h3>
        </>
      )}
    </>
  );
};

export default Transactions;
