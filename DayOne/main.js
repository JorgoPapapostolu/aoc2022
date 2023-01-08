import { readFileSync } from "node:fs";

const elfs = readFileSync("irgendwie.txt", { encoding: "utf-8" })
  .replace(/\r/g, "")
  .trim()
  .split("\n\n");

// funktion
function elfchen() {
  const calories = elfs.map((elf) => {
    const caloriesTwo = elf.split("\n").map(Number);
    return caloriesTwo.reduce((a, b) => a + b, 0);
  });
console.log(Math.max(...calories));
}
// funktion ende

// Test
// Stefan bringt mir Sachen bei 123

//aufruf
elfchen();
