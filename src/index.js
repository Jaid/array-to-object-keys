/** @module array-to-object-keys */

/**
 * Converts an array to an object with static keys and customizable values
 * @example
 * arrayToObjectKeys(["a", "b"])
 * // {a: null, b: null}
 * @example
 * arrayToObjectKeys(["a", "b"], "value")
 * // {a: "value", b: "value"}
 * @example
 * arrayToObjectKeys(["a", "b"], (key, index) => `value for ${key} #${index + 1}`)
 * // {a: "value for a #1", b: "value for b #2"}
 * @param {string[]} array Keys for the generated object
 * @param {function(value, index)|*} [valueGenerator] Optional function that sets the object values based on key and index
 * @returns {Object<string, *>} A generated object based on the array input
 */
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