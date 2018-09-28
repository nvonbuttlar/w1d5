var list = [];

var addToList = function(number) {
    for (var i = 0; i < number.length; i++) {
    list.push(number[i]);
  }
  return list;
}

var sortedList = function() {
  list.sort(function(a, b){
    return a - b;
  });
  return list;
}

module.exports = {
  addToList,
  sortedList
}