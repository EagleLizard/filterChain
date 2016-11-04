module.exports = {
  noEvens: noEvens,
  noEndsWith9: noEndsWith9,
  noLessThan5: noLessThan5,
  noVowels: noVowels,
  noCaps: noCaps,
  noTylers: noTylers,
  noMiddleNames: noMiddleNames
};

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

function noTylers(str){
  return !str.includes('Tyler');
}

function noMiddleNames(str){
  let names = str.split(' ').filter(name=>name.trim().length>0);
  return names.length !== 3;
}