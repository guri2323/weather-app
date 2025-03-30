export const getCurrentDate = () => {
  return new Date().toLocaleDateString("en-ca", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};
