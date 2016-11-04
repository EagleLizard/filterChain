
let _ = require('lodash');

module.exports = getFilter;

let filterFuns = {
  noEvens: noEvens,
  noEndsWith9: noEndsWith9,
  noLessThan5: noLessThan5,
  noVowels: noVowels,
  noCaps: noCaps
}

Object.keys(filterFuns).forEach(funKey=>{
  FilterChain.prototype[funKey] = function(){
    let me = this;
    me.filters.push(filterFuns[funKey]);
    return me;
  }
});

function getFilter(channels){
  return new FilterChain(channels);
}

function FilterChain(){
  let me = this;
  this.filters = [];
  this.doFilter = doFilter;
  
  function doFilter(values){
    return values.filter(val=>
      !me.filters.some(filter=>
        !filter(val)
      )
    )
  }

}

function noEvens(val) {
  return val%2;
};

function noEndsWith9(val){
  let str = ''+val;
  return str[str.length-1] !== '9';
}

function noLessThan5(val){
  return val >= 5;
}

function noVowels(str){
  return !/[aeiou]/.test(str);
}

function noCaps(str){
  return !/[A-Z]/.test(str);
}