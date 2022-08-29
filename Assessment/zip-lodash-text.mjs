import { zip,flatMapDeep } from 'lodash-es'
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
defineTest('_.zip > works on primitive and special types', () => {

  const x =flatMapDeep(zip(['a', 'b'], [1, 2], [true, false]));
  const y = flatMapDeep([["a",1,true],["b",2,false]]) ;
  
  test(x, y)
  })
  
defineTest('_.zip > zipd object does not have the same reference as source object', () => {
  const source = { a: 1, b: 2 }
  const expected = { a: 1, b: 2 }
  const obtained = zip(source)
  assertNotEqual(obtained, expected, 'Should not have the same reference')
})


runTests()