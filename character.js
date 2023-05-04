export class Character {
    constructor(name, health, attack, defence, level) {
      this.name = name;
      this.health = health;
      this.attack = attack;
      this.defence = defence;
      this.level = level;
    }
  
    levelUp() {
      if (this.health === 0) {
        throw new Error('Нельзя повысить левел умершего');
      }
  
      this.level += 1;
      this.attack += this.attack * 0.2;
      this.defence += this.defence * 0.2;
      this.health = 100;
    }
  
    damage(points) {
      this.health = Math.max(this.health - points * (1 - this.defence / 100), 0);
    }
  }