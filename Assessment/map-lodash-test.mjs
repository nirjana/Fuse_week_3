import { map } from 'lodash-es'
import { defineTest, runTests, assertNotEqual, assertEqual } from './test-utils.mjs'


function test(obtained,expected){
  if(obtained==expected){
    console.log('Test Pass')

  }
  else 
  {
    console.log('Test fail')
  }
  
}

function square(n) {
    return n * n;
  }
defineTest('_.map > works on primitive and special types', () => {
//   assertEqual(map(Infinity), Infinity, 'Should map infinity')
//   assertEqual(map(undefined), undefined, 'Should map undefined')
   test(map[null], null, 'Should map null')
  test(map([4, 8], square), [16, 69], 'Should map a number')
 
})


defineTest('_.map > mapd object does not have the same reference as source object', () => {
  const source = { a: 1, b: 2 }
  const expected = { a: 1, b: 2 }
  const obtained = map(source)
  assertNotEqual(obtained, expected, 'Should not have the same reference')
})


defineTest('_.map > mapd object has same key-value pair as source object', () => {
  const source = ([4,8],square)
  const expected = ([4,8],square)
  const obtained = map(source)
  const keysInObtained = Object.keys(obtained)
  const keysInExpected = Object.keys(expected)
  assertEqual(keysInObtained.length, keysInExpected.length, 'Should have same number of keys')
  assertEqual(keysInObtained.every(argKey => keysInExpected.includes(argKey)), true, 'Should have same keys')
  assertEqual(keysInObtained.every(key => obtained[key] === expected[key]), true, 'Each key should have the same values')
})

runTests()