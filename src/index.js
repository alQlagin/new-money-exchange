// PLEASE DON'T change function name
const FACE_VALUES = [
  {key: 'H', value: 50},
  {key: 'Q', value: 25},
  {key: 'D', value: 10},
  {key: 'N', value: 5},
  {key: 'P', value: 1},
];

module.exports = function makeExchange(currency) {
  if (currency > 10000) {
    return {error: 'You are rich, my friend! We don\'t have so much coins for exchange'}
  }
  const result = FACE_VALUES.reduce(accumulator, {rest: currency});
  delete result.rest;
  return result;
};

function accumulator(accumulated, faceValue) {
  const value = Math.floor(accumulated.rest / faceValue.value);

  if (value > 0) {
    accumulated[faceValue.key] = value;
  }
  accumulated.rest = accumulated.rest % faceValue.value;

  return accumulated;
}
