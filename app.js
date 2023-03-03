for (let i = 100; i >= 1; i--) {
  let bottle = i === 1 ? "bottle" : "bottles";
  console.log(`${i} ${bottle} of beer on the wall, ${i} ${bottle} of beer.`);
  console.log(`Take one down and pass it around, ${i - 1} ${i - 1 === 1 ? "bottle" : "bottles"} of beer on the wall.\n`);
}
