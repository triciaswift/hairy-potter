let primaryKey = 1;

// creates an object out of the arguments passed in
export const makePottery = (shape, weight, height) => {
  const pottery = {
    shape: shape,
    weight: weight,
    height: height,
    id: primaryKey++,
  };
  return pottery;
};
