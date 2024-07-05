export const setLoginStatus = (status) => {
  return {
    type: "SET_LOGIN_STATUS",
    payload: status,
  };
};

export const setUserInfo = (userDetail) => {
  return {
    type: "SET_USER_INFO",
    payload: userDetail,
  };
}