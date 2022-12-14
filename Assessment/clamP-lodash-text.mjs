import { clamp } from 'lodash-es'
import { defineTest, runTests, assertNotEqual, assertEqual } from './test-utils.mjs'

defineTest('_.clamp > works on primitive and special types', () => {
  assertEqual(clamp(Infinity), Infinity, 'Should clamp infinity')
  // assertEqual(clamp(undefined,undefined,undefined), NaN)
  assertEqual(clamp(null,null,null),0)
  assertEqual(clamp(10, -5, 5),5)
})

defineTest('_.clamp > clampd object does not have the same reference as source object', () => {
  const source = { a: 4, b: 2 ,c:5}
  const expected = { a: 4, b: 2,c:5 }
  const obtained = clamp(source)
  assertNotEqual(obtained, expected, 'Should not have the same reference')
})

defineTest('_.clamp > clampd object has same key-value pair as source object', () => {
  const source = { a: -10, b: -5 ,c:5}
  const expected =  {}
  const obtained = clamp(source)
  const keysInObtained = Object.keys(obtained)
 const keysInExpected = Object.keys(expected)
 assertEqual(keysInObtained.length, keysInExpected.length, 'Should have same number of keys')
  assertEqual(keysInObtained.every(argKey => keysInExpected.includes(argKey)), true)
  assertEqual(keysInObtained.every(key => obtained[key] === expected[key]), true, 'Each key should have the same values')
})

runTests()