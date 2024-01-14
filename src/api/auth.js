import instance from ".";
import { storeToken } from "../storage/storage";

const login = async (userInfo) => {
  const { data } = await instance.post(
    "/mini-project/api/auth/login",
    userInfo
  );
  storeToken(data.token);
  return data;
};
const register = async (userInfo) => {
  const formData = new FormData();
  for (const key in userInfo) formData.append(key, userInfo[key]);

  const { data } = await instance.post(
    "/mini-project/api/auth/register",
    formData
  );
  storeToken(data.token);
  return data;
};

const me = async () => {
  const { data } = await instance.get("/mini-project/api/auth/me");
  return data;
};
const my = async () => {
  const { data } = await instance.get("/mini-project/api/transactions/my");
  return data;
};

const deposit = async (amount) => {
  const { data } = await instance.put(
    "/mini-project/api/transactions/deposit",
    {
      amount,
    }
  );
  return data;
};

const withdraw = async (amount) => {
  const { data } = await instance.put(
    "/mini-project/api/transactions/withdraw",
    { amount }
  );
  return data;
};

const getAllUsers = async () => {
  const { data } = await instance.get("/mini-project/api/auth/users");
  return data;
};
const getUserById = async (id) => {
  const { data } = await instance.get(`/mini-project/api/auth/user/${id}`);
  return data;
};

const transferMoney = async (userInfo) => {
  const { data } = await instance.put(
    `/mini-project/api/transactions/transfer/${userInfo.username}`,
    userInfo
  );
  return data;
};

export {
  login,
  register,
  me,
  getAllUsers,
  my,
  transferMoney,
  withdraw,
  deposit,
  getUserById,
};
