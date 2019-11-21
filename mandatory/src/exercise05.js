/**
 * Exercise 05 - SLOT MACHINE
 */

class SlotMachine {
    constructor(){
        this.coins=0;
    }

    play(){
        this.coins++;
        if(Math.round(Math.random()) && Math.round(Math.random()) && Math.round(Math.random())){
            console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
            this.coins=0;
            return true;
        } else {
            console.log("Good luck next time!!");
            return false;
        }
        
    }
}

const slotMachine = new SlotMachine();

while(!slotMachine.play()){};
