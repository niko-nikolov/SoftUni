function lunchBreak(input) {
    const serial = input[0];
    const episodelong = Number(input[1]);
    const breaktime = Number(input[2]);
    
    
     
     const timecost = episodelong + breaktime/8 + breaktime/4;
      
     if (timecost <= breaktime) {
         console.log(`You have enough time to watch ${serial} and left with ${Math.ceil(breaktime-timecost)} minutes free time.`)
     } else {
         console.log(`You don't have enough time to watch ${serial}, you need ${Math.ceil(timecost-breaktime)} more minutes.`)
     }
}
     lunchBreak(["Teen Wolf","48","60"])

   lunchBreak(["Game of Thrones",

   "60",
   
   "96"])

   console.log(60/8);