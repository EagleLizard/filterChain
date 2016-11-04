
let filterChain = require('./filterChain');

main();

function main(){
  let filter = filterChain()
    .noEvens()
    .noEndsWith9();
  console.log(filter);
  console.log(filter.doFilter([1,2,3,4,5,6,7,8,9,10]));
  let filter2 = filterChain()
    .noEvens()
    .noLessThan5();
  console.log(filter2);
  console.log(filter2.doFilter([10,9,8,7,6,5,4,3,2,1]));
  let stringFilter = filterChain()
    .noVowels()
    .noCaps();
  console.log(stringFilter);
  console.log(stringFilter.doFilter('abcdefgHiJkLMNOpqrstuv'.split('')))
}