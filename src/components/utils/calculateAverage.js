export const calculateAverage = (comments) => {
  const totalRates = comments.reduce((acc, cur) => {
    return acc + cur.rating;
  }, 0);
  return comments.length === 0
    ? 0
    : Math.round((totalRates / comments.length) * 10) / 10;
};
