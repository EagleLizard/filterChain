
let assert = require('assert');

let filterChain = require('./filterChain');

main();

function main(){
  let filter = filterChain().noEvens().noEndsWith9();
  testHandle(filter, [1,2,3,4,5,6,7,8,9,10]);
  
  let filter2 = filterChain().noEvens().noLessThan5();
  testHandle(filter2, [10,9,8,7,6,5,4,3,2,1]);
  
  let stringFilter = filterChain().noVowels().noCaps();
  testHandle(stringFilter, 'abcdefgHiJkLMNOpqrstuv'.split(''));
  
  let stringFilter2 = filterChain().noTylers().noMiddleNames();
  testHandle(stringFilter2, [
    'Rand Paul',
    'Donald Duck Trump',
    'Hillary Rod Ham Clinton',
    'Tyler Whited'
  ]);
}

function testHandle(filter, arr){
  console.log('filters: ',filter.filters);
  console.log(filter.doFilter(arr));
  console.log();
}