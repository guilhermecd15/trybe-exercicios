const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const atkDragon = dragon => {
  const dmgDragon = Math.floor(Math.random() * (dragon.strength - 15) + 15);
  return dmgDragon;
}

const atkWarrior = warrior => {
  const dmgWarrior = Math.floor(Math.random() * ((warrior.strength * warrior.weaponDmg) - warrior.strength) + warrior.strength);
  return dmgWarrior;
}

const atkMage = mage => {
  if (mage.mana > 15) {
    const dmgMage = Math.floor(Math.random() * ((mage.intelligence * 2) - mage.intelligence) + mage.intelligence);
    mage.mana -= 15;
    return dmgMage;
  }
  return 'faltou mana';
}

const gameActions = {
  // Crie as HOFs neste objeto.
  warriorTurn: atkWarrior => {
    let dmgWarrior = atkWarrior(warrior);
    warrior.damage = dmgWarrior;
    dragon.healthPoints -= dmgWarrior;
  },
  mageTurn: atkMage => {
    let dmgMage = atkMage(mage);
    mage.damage = dmgMage;
    if (dmgMage > 0) {
      mage.mana -= 15;
    }
    dragon.healthPoints -= dmgMage;
  },
  dragonTurn: atkDragon => {
    let dmgDragon = atkDragon(dragon);
    dragon.damage = dmgDragon;
    warrior.healthPoints -= dmgDragon;
    mage.healthPoints -= dmgDragon;
  },
  turnEnd: () => battleMembers
};

gameActions.warriorTurn(atkWarrior);
gameActions.mageTurn(atkMage);
gameActions.dragonTurn(atkDragon);
console.log(gameActions.turnEnd());
