var recipes = {chocolate: "1 c"}

function updateObjectWithKeyAndValue(object, key, value){
  var newRecipe = Object.assign({}, object, { [key]: value })
  return newRecipe
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}


function deleteFromObjectByKey(object, key) {
 object = { key: 'bar' }
 var newObj = Object.assign({}, object)
delete newObj.key
return newObj
}
