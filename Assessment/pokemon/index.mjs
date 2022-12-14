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



if (attackerStrongAgainstType !== receiverType && receiverStrongAgainstType !== attackerType) {
  return 100              //When fire attacks fire, 100 damage
} else if (receiverStrongAgainstType === attackerType) {
  return 50            // When grass attacks fire, 50 damage
} else {
  return 150  //When fire attacks grass, 150 damage
}}
// // strong : weak
// [TYPE_FIRE]: TYPE_GRASS,
// [TYPE_WATER]: TYPE_FIRE,
// [TYPE_GRASS]: TYPE_WATER

//const pokemon1 = new Pokemon (name,type,attacks)
//Pokemon (name,type,attacks)
export const pokemon1 = new Pokemon('pickachuA','fire',"Special_1");
export const pokemon1a = new Pokemon('pickachuB','fire',"Special_1a");

export const pokemon2 = new Pokemon('Arcanine','grass','Special_2');
export const pokemon3 = new Pokemon('Mega Drain','grass',"Physical");

export const pokemon4 = new Pokemon('Mega Drain','water',"Physical_2");

export const pokemon5 = new Pokemon('Mega Drain','cloud_type',"Cloud_attack");


console.log(pokemon4.getAttackDamageWrtType(pokemon5));









