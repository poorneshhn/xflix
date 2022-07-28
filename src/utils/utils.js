export const isEmptyJson = (obj) => {
  return typeof obj === "object" && Object.keys(obj).length < 1;
};

export const formatDate = (date) => {
  let dateObj;
  if (typeof date === "string") {
    dateObj = new Date(date);
  }
  // Thu Jan 17 2022
  let newDateFormat = dateObj.toDateString().split(" ");

  let newDateFormatString = `${newDateFormat[2]} ${newDateFormat[1]} ${newDateFormat[3]}`;
  return newDateFormatString;
};
