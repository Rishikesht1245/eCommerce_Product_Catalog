export const saveLocally = (data: boolean) => {
  localStorage.setItem("auth", JSON.stringify(data));
};

export const removeLocalData = () => {
  localStorage.clear();
};

export const getLocalData = () => {
  return JSON.parse(localStorage.getItem("auth")!);
};
