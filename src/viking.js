// Soldier
class Soldier {
  constructor(health,strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
      return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor (name,health,strength){
    super(health,strength);
    this.name = name;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
    if(this.health > 0) return `${this.name} has received ${damage} points of damage`;
    if(this.health <= 0) return `${this.name} has died in act of combat`;    
  }
  battleCry() {
    return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier {
  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
    if(this.health > 0) return `A Saxon has received ${damage} points of damage`;
    if(this.health <= 0) return `A Saxon has died in combat`;    
  }

}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking){
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon){
    this.saxonArmy.push(saxon);
  }

  //vikingAttack() method
  //Um Saxon (escolhido aleatoriamente) tem seu método receiveDamage() chamado com o dano igual à força de um Viking (também escolhido aleatoriamente). Isso deve realizar apenas um único ataque e o saxão não pode atacar de volta.
  
  getRandomViking(){
    const viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    return viking
  }
  getRandomSaxon(){
    const saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    return saxon
  }

  dealDamage(attacker, defender, attackerType){
    const message = defender.receiveDamage(attacker.attack());
    if(message.includes("died")){
      if (attackerType === 'viking'){
        this.saxonArmy.splice(this.saxonArmy.indexOf(defender), 1)
      } else if (attackerType === 'saxon'){
        this.vikingArmy.splice(this.vikingArmy.indexOf(defender), 1)
      }
    }
    return message
  }

  vikingAttack(){
    const viking = this.getRandomViking()
    const saxon  = this.getRandomSaxon()
    return this.dealDamage(viking, saxon, 'viking')
  }

  saxonAttack(){
    const viking = this.getRandomViking()
    const saxon  = this.getRandomSaxon()
    return this.dealDamage(saxon , viking , 'saxon')
  }

  showStatus(){
    if (this.saxonArmy.length === 0)
    {return `Vikings have won the war of the century!`}
    if (this.vikingArmy.length === 0) 
    {return `Saxons have fought for their lives and survived another day...`}
    if (this.saxonArmy.length === 1 && this.vikingArmy.length === 1)
    { return `Vikings and Saxons are still in the thick of battle.`}
  }


}
