import { useMutation, useQuery } from "@tanstack/react-query";
import { getAllUsers, transferMoney } from "../api/auth";
import UserCard from "../component.js/UserCard";

const Users = () => {
  const { data: users, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: () => getAllUsers(),
  });
  const { data: amount } = useMutation({
    mutationKey: ["amount"],
    mutationFn: transferMoney,
  });

  const usersCard = users?.map((user) => (
    <UserCard
      key={user.id}
      image={user.image}
      username={user.username}
      balance={user.balance}
    />
  ));

  return (
    <div className=" mx-10 SS">
      {isLoading ? (
        <>is Loading..</>
      ) : (
        <div
          className="grid grid-cols-3 gap-3 "
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          {usersCard}
        </div>
      )}
    </div>
  );
};

export default Users;
