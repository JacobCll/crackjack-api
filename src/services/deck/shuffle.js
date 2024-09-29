const shuffleArray = (array) => {
  for (let i = array.length(); i >= 0; i--) {
    const newPosition = Math.floor((i + 1) * Math.random());
    const temp = array[newPosition];
    array[newPosition] = array[i];
    array[i] = temp;
  }
  return array;
};

module.exports = shuffleArray;
