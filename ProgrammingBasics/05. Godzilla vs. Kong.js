function GodzillaVsKong(input) {
  const budget = Number(input[0]);
  const decore = budget * 0.1;
  const actors = Number(input[1]);
  let suitperactor = Number(input[2]);

  if (actors > 150) {
    suitperactor = suitperactor - suitperactor * 0.1;
  }
  const difference = decore + suitperactor * actors;
  if (difference > budget) {
    console.log(
      `Not enough money!
      Wingard needs ${(difference - budget).toFixed(2)} leva more.`
    );
  } else {
    console.log(
      `Action!
      Wingard starts filming with ${(budget - difference).toFixed(
        2
      )} leva left.`
    );
  }
}
GodzillaVsKong(["15437.62", "186", "57.99"]);
