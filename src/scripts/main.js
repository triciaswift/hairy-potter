// Imports go first
import { makePottery } from "./PotteryWheel.js";
import { firePottery } from "./Kiln.js";

// Make 5 pieces of pottery at the wheel
const bowl = makePottery("Bowl", 2, 5);
const mug = makePottery("Mug", 1, 4);
const plate = makePottery("Plate", 3, 1);
const sculpture = makePottery("Sculpture", 5, 8);
const vase = makePottery("Vase", 4, 10);
// Fire each piece of pottery in the kiln
const fireBowl = firePottery(bowl, 2000);
const fireMug = firePottery(mug, 2200);
const firePlate = firePottery(plate, 2500);
const fireSculpture = firePottery(sculpture, 2050);
const fireVase = firePottery(vase, 1800);
// Determine which ones should be sold, and their price

// Invoke the component function that renders the HTML list
