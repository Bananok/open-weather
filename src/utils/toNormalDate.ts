export const toNormalDate = (date: number) => {
  const normDate = new Date(date * 1000);
  return [
    normDate.getDate(),
    normDate.getMonth() + 1,
    normDate.getFullYear(),
  ].join(".");
};
