import dayjs from "dayjs";

const sqmt = 10.76391042;

export const convertToSQMT = (size: number) => Math.floor(size * sqmt);

export const calculateNights = (
  endDate: Date | null,
  startDate: Date | null
) => {
  if (!endDate || !startDate) return 0;
  const day = 24 * 60 * 60 * 1000;
  return (endDate.getTime() - startDate.getTime()) / day;
};


export const extractDate = (date?: Date | string | null) => {
  if(!date) return "something wrong"
  return dayjs(date).format("MMM D, YYYY")
} 