export const replaceMongoIdInArray = (array) => {
  const mappedArray = array
    .map((item) => {
      return {
        id: item._id.toString(),
        ...item,
      };
    })
    .map(({ _id, ...rest }) => rest);

  return mappedArray;
};

export const replaceMongoIdInObject = (obj) => {
  const { _id, ...updatedObj } = { ...obj, id: obj?._id.toString() };
  return updatedObj;
};

export const isDateInbetween = (date, from, to) => {
  return (
    new Date(date).getTime() >= new Date(from).getTime() &&
    new Date(date).getTime() <= new Date(to).getTime()
  );
};

export const isDateOverlapping = (start1, end1, start2, end2) => {
  return (
    new Date(start1).getTime() <= new Date(end2).getTime() &&
    new Date(end1).getTime() >= new Date(start2).getTime()
  );
};

export const getDayDifference = (from, to) => {
  return (
    (new Date(to).getTime() - new Date(from).getTime()) /
      (24 * 60 * 60 * 1000) +
    1
  );
};
