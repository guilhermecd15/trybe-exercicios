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
  healthPoints: 700,
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
  const dmgMage = Math.floor(Math.random() * ((mage.intelligence * 2) - mage.intelligence) + mage.intelligence);
  return dmgMage;
}

const gameActions = {
  // Crie as HOFs neste objeto.
  warriorTurn: atkWarrior => {
    if (warrior.healthPoints > 0) {
      let dmgWarrior = atkWarrior(warrior);
      warrior.damage = dmgWarrior;
      dragon.healthPoints -= dmgWarrior;
    }
  },
  mageTurn: atkMage => {
    if (mage.healthPoints > 0) {
      if (mage.mana > 15) {
        let dmgMage = atkMage(mage);
        mage.damage = dmgMage;
        if (dmgMage > 0) {
          mage.mana -= 15;
        }
        dragon.healthPoints -= dmgMage;
      } else {
        console.log('Mage without mana');
      }
    }
  },
  dragonTurn: atkDragon => {
    if (dragon.healthPoints > 0) {
      let dmgDragon = atkDragon(dragon);
      dragon.damage = dmgDragon;
      warrior.healthPoints -= dmgDragon;
      mage.healthPoints -= dmgDragon;
    }
  },
  turnEnd: () => battleMembers
};

while (dragon.healthPoints > 0 && (warrior.healthPoints > 0 || mage.healthPoints > 0)) {
  gameActions.warriorTurn(atkWarrior);
  gameActions.mageTurn(atkMage);
  gameActions.dragonTurn(atkDragon);
  console.log(gameActions.turnEnd());
  console.log('_____________________________________');
}

if (dragon.healthPoints < 0) {
  console.log('Warrior & Mage WINSSS');
} else if (dragon.healthPoints > 0) {
  console.log('Dragon WINSSS');
}