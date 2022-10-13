function shopping(input) {
    const budget = Number(input[0]);
    const videoCardsCount = Number(input[1]);
    const processorsCount = Number(input[2]);
    const ramcount = Number(input[3]);

    let videocardsPrice = videoCardsCount * 250;
    let processorPrice = processorsCount * (videocardsPrice * 0.35);
    let ramprice = ramcount * (videocardsPrice * 0.1);
    let price = videocardsPrice + processorPrice + ramprice;

    if (videoCardsCount > processorsCount) {
        price = price - (price * 0.15);
    }

    if (budget >= price) {
        console.log(`You have ${(budget - price).toFixed(2)} leva left!`)
    } else {
        console.log(`Not enough money! You need ${(price - budget).toFixed(2)} leva more!`)
    }
}
  shopping(["900","2","1","3"])