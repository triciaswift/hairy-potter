const toBeSold = [];

/* 
Uses the objects created in the Kiln and adds a price to those not
cracked and then pushes them to the toBeSold array
*/
export const toSellOrNotToSell = (pottery) => {
  if (pottery.cracked === false) {
    if (pottery.weight >= 6) {
      pottery.price = 40;
    } else {
      pottery.price = 20;
    }
    toBeSold.push(pottery);
  }
  return pottery;
};

// makes a copy of the toBeSold array
export const usePottery = () => {
  return toBeSold.map((item) => ({ ...item }));
};
