
let _ = require('lodash');

let filterFuns = require('./filters');

module.exports = getFilter;



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
    return _.filter(values, 
      val=> _.every(me.filters, 
        filter=> filter(val)
      )
    )
  }

}