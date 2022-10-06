function WSR(input) {
    const WR = Number(input[0]);
    const meters = Number(input[1]);
    const mps = Number(input[2]);

    let time = meters * mps;
    const waterDurability = Math.floor(meters / 15) * 12.5;
    time += waterDurability;

    if (time < WR) {
        console.log(`Yes, he succeeded! The new world record is ${time.toFixed(2)} seconds.`)
    }

}
  WSR(["55555.67","3017","5.03"])
