var recipes = {chocolate: "1 c"}

function updateObjectWithKeyAndValue(object, key, value){
  var newRecipe = Object.assign({}, object, { [key]: value })
  return newRecipe
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

var object = { key: 'bar' }
function deleteFromObjectByKey(object, key) {
 var newObj = Object.assign({}, object)
delete newObj.key
}
