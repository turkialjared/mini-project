import { useQuery } from "@tanstack/react-query";
import { my } from "../api/auth";

const Transactions = () => {
  const { data: transactions, isLoading } = useQuery({
    queryKey: ["transactions"],
    queryFn: my,
  });
  const mytransactions = transactions?.filter((trans) =>
    trans.amount.toString()
  );
  console.log(mytransactions);
  return;
};

export default Transactions;
