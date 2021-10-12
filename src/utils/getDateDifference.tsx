const getDateDifference = (prev: Date, next: Date): number =>
  Math.abs(prev.getTime() - next.getTime());

export default getDateDifference;
