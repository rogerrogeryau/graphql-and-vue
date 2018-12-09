let rps = (rounds) =>{
    let res = [];
    let possibilities = ['r','p','s'];

    let play = (playedSoFar, rounds) =>{
        if (rounds === 0) {
            res.push(playedSoFar)
            // console.log();
            return;
        };
        
        for (let i = 0; i < possibilities.length; i++) {
            // console.log(possibilities[i]);
            // rounds-=1
            // console.log(rounds)
            play(playedSoFar + possibilities[i],rounds-1)   //
            
        };
        
        
    }
    play('',rounds);
    return res;
}
let result = rps(2)
console.log(result)