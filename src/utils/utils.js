import moment from "moment";

export const addDaysToDate = (date, days) =>
  moment(date).add(days, "days").toDate();
