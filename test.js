import { Character } from "./character";

describe('Character', () => {
  let character;

  beforeEach(() => {
    character = new Character('John', 100, 10, 10, 1);
  });

  describe('levelUp', () => {
    test('should increase level by 1', () => {
      character.levelUp();
      expect(character.level).toBe(2);
    });

    test('should increase attack by 20%', () => {
      character.levelUp();
      expect(character.attack).toBe(12);
    });

    test('should increase defence by 20%', () => {
      character.levelUp();
      expect(character.defence).toBe(12);
    });

    test('should set health to 100', () => {
      character.health = 50;
      character.levelUp();
      expect(character.health).toBe(100);
    });

    test('should throw an error if health is 0', () => {
      character.health = 0;
      expect(() => character.levelUp()).toThrow('Нельзя повысить левел умершего');
    });
  });

  describe('damage', () => {
    test('should decrease health by 50', () => {
      character.damage(50);
      expect(character.health).toBe(55);
    });

    test('should decrease health by 50 with defence of 50%', () => {
      character.defence = 50;
      character.damage(50);
      expect(character.health).toBe(75);
    });

    test('should not decrease health below 0', () => {
      character.damage(200);
      expect(character.health).toBe(0);
    });
  });
});