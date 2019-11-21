/**
 * Exercise 05 - SLOT MACHINE con TYPESCRIPT
 */

class SlotMachine {
    coins:number = 0;

    play():boolean{
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
