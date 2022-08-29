// 1. Test Pokemon::getAttackDamageWrtType.

// 1.a. Test normal moves
// When fire attacks fire, 100 damage
// When grass attacks grass, 100 damage
// When water attacks water, 100 damage

// 1.b. Test super effective attacks
// When fire attacks grass, 150 damage
// When water attacks fire, 150 damage
// When grass attacks water, 150 damage

// 1.c. Test not very effective attacks
// When grass attacks fire, 50 damage
// When fire attacks water, 50 damage
// When water attacks grass, 50 damage

// 2. Test Pokemon::attack
// 2.a Non existent attacks should throw an error
// 2.b Missed attacks should return { damage: 0, miss: true, critical: false }
// 2.c Critical attacks should return { damage: expected * 2, miss: false, critical: true }

// NOTE: these methods might be broken. You might need to fix them *evil laugh*

// //attack(attackName, receiverPokemon) 
// //getAttackDamageWrtType(receiverPokemon)



import  {Pokemon , TYPE_FIRE , TYPE_WATER, TYPE_GRASS, pokemon1, pokemon2, pokemon3, pokemon4} from './index.mjs'
import { defineTest, runTests, assertNotEqual, assertEqual } from './test-utils.mjs'






//pokemon1 = fire , pokemon2 pokemon3 =grass, pokemon4 = water)

defineTest('1.a. Test normal moves', () => {

assertEqual(pokemon2.getAttackDamageWrtType(pokemon2),100, ' When fire attacks fire, 100 damage')
assertEqual(pokemon2.getAttackDamageWrtType(pokemon2),100, 'When grass attacks grass, 100 damage')
assertEqual(pokemon4.getAttackDamageWrtType(pokemon4),100, 'When water attacks water, 100 damage')

 })

defineTest(' 1.b. Test super effective attacks', () => {

    assertEqual(pokemon1.getAttackDamageWrtType(pokemon3),150, ' When fire attacks grass, 150 damage')
    assertEqual(pokemon4.getAttackDamageWrtType(pokemon1),150, 'When water attacks fire, 150 damage')
    assertEqual(pokemon3.getAttackDamageWrtType(pokemon4),150, 'When grass attacks water, 150 damage')
    
     })
     defineTest(' 1.c. Test not very effective attacks', () => {

        assertEqual(pokemon3.getAttackDamageWrtType(pokemon1),50, '  When grass attacks fire, 50 damage')
        assertEqual(pokemon1.getAttackDamageWrtType(pokemon4),50, 'When fire attacks water, 50 damage')
        assertEqual(pokemon4.getAttackDamageWrtType(pokemon3),50, 'When water attacks grass, 50 damage')
        
         })
    

       // 2. Test Pokemon::attack
// 2.a Non existent attacks should throw an error
// 2.b Missed attacks should return { damage: 0, miss: true, critical: false }
// 2.c Critical attacks should return { damage: expected * 2, miss: false, critical: true }
defineTest(' 2.a Non existent attacks should throw an error', () => {

   assertEqual(pokemon3.attack('attack1','pickachu'),'Mega Drain doesnt know how to do that','error message' )
    
     }) 

runTests()