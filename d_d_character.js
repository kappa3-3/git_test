class Character {
    constructor(strength, dexterity, constitution, intelligence, wisdom, charisma) {
        this.strength = strength;
        this.dexterity = dexterity;
        this.constitution = constitution;
        this.intelligence = intelligence;
        this.wisdom = wisdom;
        this.charisma = charisma;
    } 
    get result(){

        this.strength = this.perks();
        this.dexterity = this.perks();
        this.constitution = this.perks();
        this.intelligence = this.perks();
        this.wisdom = this.perks();
        this.charisma = this.perks();

        const result = [this.strength, this.dexterity, this.constitution, this.intelligence, this.wisdom, this.charisma];

        console.log(result);

    }
    perks(){
        const skill = this.rollDice()
        .sort().slice(1)
        .reduce((a,b) => a + b ); 
        return skill;
    }
    rollDice(){
            const turns = [1,2,3,4];
            const rolled = turns.map(() => {
                return Math.floor(Math.random()*6)+1
            })
            return rolled;
        }
}

const player = new Character;
player.result;