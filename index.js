var recipes = {};

function updateObjectWithKeyAndValue (obj, key, value) {
  return Object.assign({}, obj, { [key]: value });
};
const obj = { prop: 1};
updateObjectWithKeyAndValue (obj, 'prop2', 2);
