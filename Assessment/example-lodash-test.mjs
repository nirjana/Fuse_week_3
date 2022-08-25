// import pkg from 'lodash';
// const { inrange } = pkg;
import { inrange  } from 'lodash-es'
import { defineTest, runTests, assertNotEqual, assertEqual } from './test-utils.mjs'

defineTest('_.inrange > work on numbers if it inrange or not ', () => {
//  function inrange(number, min, max) {
//      return (number >= min && number <= max)
// }
  // assertEqual(inrange(Infinity), Infinity, 'Should inrange infinity')
  // assertEqual(inrange(undefined), undefined, 'Should inrange undefined')
  // assertEqual(inrange(null), null, 'Should inrange null')
  // assertEqual(inrange(234), 234, 'Should inrange a number')
  // assertEqual(inrange(5,1,8),true)
  assertEqual (inrange(2, 3, 5),true);

  
})



defineTest('_.inrange > inranged object does not have the same reference as source object', () => {
  const source = { a: 1, b: 2 ,c:6}
  const expected = { a: 1, b: 2 ,c:6}
  const obtained = inrange(source)
  assertNotEqual(obtained, expected, 'Should not have the same reference')
})

defineTest('_.inrange > inranged object has same key-value pair as source object', () => {
  const source = { a: 1, b: 2 }
  const expected = { a: 1, b: 2 }
  const obtained = inrange(source)
  const keysInObtained = Object.keys(obtained)
  const keysInExpected = Object.keys(expected)
  assertEqual(keysInObtained.length, keysInExpected.length, 'Should have same number of keys')
  assertEqual(keysInObtained.every(argKey => keysInExpected.includes(argKey)), true, 'Should have same keys')
  assertEqual(keysInObtained.every(key => obtained[key] === expected[key]), true, 'Each key should have the same values')
})

runTests()
