var recipes = {};

function updateObjectWithKeyAndValue (object, key, value) {
  Return Object.assign({}, obj, {[prop2]: 2});
};

function destructivelyUpdateObjectWithKeyAndValue (obj, key, value) {
  obj[key] = value;
  return obj;
}
const obj = { prop: 1};

destructivelyUpdateObjectWithKeyAndValue (obj, 'prop2', 2);
