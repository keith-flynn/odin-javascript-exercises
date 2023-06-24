const removeFromArray = function(array, ...elements) {
  for (let element of elements) {
    const index = array.indexOf(element);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
