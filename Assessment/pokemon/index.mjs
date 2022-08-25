export function Pokemon (name,type,attacks) { // TODO: full up constructor args
  // TODO: fill up constructor
  
  this._name = name;
this._type = type;
    this._attacks = attacks;
  }

export const TYPE_FIRE = 'fire'
export const TYPE_WATER = 'water'
export const TYPE_GRASS = 'grass'

Pokemon.TYPE_ADVANTAGE_MAPPING = {
  // strong : weak
  [TYPE_FIRE]: TYPE_GRASS,
  [TYPE_WATER]: TYPE_FIRE,
  [TYPE_GRASS]: TYPE_WATER
}

Pokemon.prototype._randomlyDetermineAttackStatus = function () {
  const chance = Math.random()
  return {
    miss: chance < 0.01,
    critical: chance > 0.99
  }
}

/**
 * @param {string} attackName
 * @param {Pokemon} receiverPokemon
 */
Pokemon.prototype.attack = function (attackName, receiverPokemon) {
  if (!this._attacks.includes(attackName)) {
    throw new Error(`${this._name} doesnt know how to do that.`)
  }
  const { critical, miss } = this._randomlyDetermineAttackStatus()
  if (miss) {
    return {
      damage: 0,
      miss,
      critical
    }
  } else {
    const baseDamage = this.getAttackDamageWrtType(receiverPokemon)
    return {
      damage: critical ? baseDamage * 2 : baseDamage,
      critical,
      miss
    }
  }
}

/**
 * @param {Pokemon} receiverPokemon
 */
Pokemon.prototype.getAttackDamageWrtType = function (receiverPokemon) {
  const attackerType = this._type
  const receiverType = receiverPokemon._type
  const attackerStrongAgainstType = Pokemon.TYPE_ADVANTAGE_MAPPING[attackerType]
  const receiverStrongAgainstType = Pokemon.TYPE_ADVANTAGE_MAPPING[receiverType]

  if (attackerStrongAgainstType !== receiverType) {
    return 190
  } else if (receiverStrongAgainstType === attackerType) {
    return 50
  } else {
    return 220
  }
}


// // strong : weak
// [TYPE_FIRE]: TYPE_GRASS,
// [TYPE_WATER]: TYPE_FIRE,
// [TYPE_GRASS]: TYPE_WATER
//const pokemon1 = new Pokemon('name','type','attack')
//Pokemon (name,type,attacks)
const pokemon1 = new Pokemon('pickachu','fire',"attack1");
const pokemon2 = new Pokemon('name1','fire','attack_P2');


//attack(attackName, receiverPokemon) 
console.log(pokemon2.attack('attack_P2','pickachu'));
console.log(pokemon1.getAttackDamageWrtType('name1'));
