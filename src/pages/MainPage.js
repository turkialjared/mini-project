import React, { useState } from "react";
import { me } from "../api/auth";
import { useQuery } from "@tanstack/react-query";
import UserProfileCard from "../component.js/Userprofile";
import Transactions from "./Transactions";

const MainPage = () => {
  const { data } = useQuery({
    queryKey: ["user"],
    queryFn: me,
  });

  console.log(data?.image);
  return (
    <div>
      {data ? (
        <>
          <UserProfileCard
            username={data?.username}
            image={data?.image}
            balance={data?.balance}
          />
        </>
      ) : (
        <p>Loading user profile...</p>
      )}
    </div>
  );
};

export default MainPage;
