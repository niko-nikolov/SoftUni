function repainting(input) {
    const nylonPerSqMeter = 1.5;
    const paintperLiter = 14.5;
    const thinerPerLiter = 5;
    const extraPaintPercent = 0.1;
    const extraNylonPerSqMeter = 2;
    const bagPrice = 0.4;
    
    const nylon = Number(input[0]);
    const paint = Number(input[1]);
    const thinner = Number(input[2]);
    const workHours = Number(input[3]);


    const nylonCost = (nylon + extraNylonPerSqMeter) * nylonPerSqMeter;
    const paintCost = (paint + paint * extraPaintPercent) * paintperLiter;
    const thinerCost = thinner * thinerPerLiter;
    const materialCost = nylonCost + paintCost + thinerCost + bagPrice;
    const workerCostPerHour = materialCost * 0.3;
    const totalWorkCost = workHours * workerCostPerHour;
    const totalCost = totalWorkCost + materialCost;
    console.log(totalCost);
}
repainting(["10 ", "11 ", "4 ", "8 "]);