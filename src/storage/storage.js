const storeToken = (token) => {
  localStorage.setItem("token", token);
};

const getToken = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return true;
  }
  return false;
};

const deleteToken = () => {
  localStorage.removeItem("token");
};

export { storeToken, getToken, deleteToken };
