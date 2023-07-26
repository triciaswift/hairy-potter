import { usePottery } from "./PotteryCatalog.js";

/* 
Invokes the array from PotteryCatalog and then iterates through
each object to take everything needed for the html string
*/
export const PotteryList = () => {
  const potteryToBeSold = usePottery();
  let HTMLString = "";
  for (const piece of potteryToBeSold) {
    HTMLString += `<section class="pottery" id="pottery--${piece.id}">
            <h2 class="pottery__shape">${piece.shape}</h2>
            <div class="pottery__properties">
              Item weighs ${piece.weight} grams and is ${piece.height} cm in height
            </div>
            <div class="pottery__price">Price is $${piece.price}</div>
        </section>`;
  }
  return HTMLString;
};
