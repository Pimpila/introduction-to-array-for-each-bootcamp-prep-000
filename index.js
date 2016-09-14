var evens = [0 , 2, 4, 6, 8, 10]

evens.forEach(even => {
  console.log(`${even} is not odd!`)
})

function doToElementsInArray(array, callback){
  array.forEach(callback)
}

var animals = ["dog", "fish", "cat"]

function changeCompletely(element, index, array) {
  array[index] = (Math.random() * 100).toString()+ "!!!"
}

doToElementsInArray(animals, changeCompletely)
