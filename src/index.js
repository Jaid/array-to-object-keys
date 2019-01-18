export default (array, valueGenerator = null) => {
  if (!Array.isArray(array)) {
    return {}
  }
  const object = {}
  if (typeof valueGenerator === "function") {
    let index = 0
    for (const value of array) {
      object[value] = valueGenerator(value, index)
      index++
    }
  } else {
    for (const value of array) {
      object[value] = valueGenerator
    }
  }
  return object
}