// tests whether each pottery piece is cracked or not
export const firePottery = (potteryPiece, temp) => {
  potteryPiece.fired = true;
  if (temp > 2200) {
    potteryPiece.cracked = true;
  } else {
    potteryPiece.cracked = false;
  }
  return potteryPiece;
};
