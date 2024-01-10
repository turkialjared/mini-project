import React, { useState } from "react";
import { me } from "../api/auth";
import { useQuery } from "@tanstack/react-query";

const MainPage = () => {
  const { data: users } = useQuery({
    queryKey: ["user"],
    queryFn: me,
  });
  return (
    <>
      <h1></h1>
    </>
  );
};

export default MainPage;
