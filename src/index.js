/** @module array-to-object-keys */

/**
 * @typedef valueGenerator
 * @type {function}
 * @param {string} value Original array entry
 * @param {number} index Index of the array entry (starts at 0)
 * @returns {*} Anything that will be the object entry value
 */

/**
 * @typedef asyncValueGenerator
 * @type {function}
 * @async
 * @param {string} value Original array entry
 * @param {number} index Index of the array entry (starts at 0)
 * @returns {*} Anything that will be the object entry value
 */

const debug = require("debug")("array-to-object-keys")

const emptyReturn = {}

/**
 * Converts an array to an object with static keys and customizable values
 * @example
 * import arrayToObjectKeys from "array-to-object-keys"
 * let result = arrayToObjectKeys(["a", "b"])
 * result = {a: null, b: null}
 * @example
 * import arrayToObjectKeys from "array-to-object-keys"
 * let result = arrayToObjectKeys(["a", "b"], "value")
 * result = {a: "value", b: "value"}
 * @example
 * import arrayToObjectKeys from "array-to-object-keys"
 * let result = arrayToObjectKeys(["a", "b"], (key, index) => `value for ${key} #${index + 1}`)
 * result = {a: "value for a #1", b: "value for b #2"}
 * @function
 * @param {string[]} array Keys for the generated object
 * @param {valueGenerator|*} [valueGenerator=null] Optional function that sets the object values based on key and index
 * @returns {object<string, *>} A generated object based on the array input
 */
export default (array, valueGenerator = null) => {
  if (!Array.isArray(array) || !array.length) {
    return emptyReturn
  }
  const object = {}
  if (typeof valueGenerator === "function") {
    array.forEach((key, index) => {
      object[key] = valueGenerator(key, index)
    })
  } else {
    for (const value of array) {
      object[value] = valueGenerator
    }
  }
  return object
}

/**
 * Converts an array to an object with static keys and customizable values
 * @example
 * import fs from "fs"
 * import path from "path"
 * import {parallel} from "array-to-object-keys"
 * const keys = ["license", "readme", "package", ".travis", "not-here"]
 * const valueGenerator = async name => {
 *   const files = await fs.promises.readdir(path.resolve(__dirname, ".."))
 *   for (const file of files) {
 *     if (file.startsWith(`${name}.`)) {
 *       const stat = await fs.promises.stat(path.resolve(__dirname, "..", file), "utf8")
 *       return stat.size
 *     }
 *   }
 *   return null
 * }
 * let result = await parallel(keys, valueGenerator)
 * result = { ".travis": 1672, license: 1099, package: 1948, readme: 132, "not-here": null }
 * @function
 * @param {string[]} array Keys for the generated object
 * @param {asyncValueGenerator|*} [valueGenerator=null] Async function that sets the object values based on key and index
 * @returns {object<string, *>} A generated object based on the array input
 */
export const parallel = async (array, valueGenerator = null) => {
  if (!Array.isArray(array) || !array.length) {
    return emptyReturn
  }
  const object = {}
  if (typeof valueGenerator === "function") {
    for (const key of array) {
      object[key] = null // Setting object keys synchronously to ensure order
    }
    const jobs = array.map(async (key, index) => {
      const value = await valueGenerator(key, index)
      object[key] = value
    })
    await Promise.all(jobs)
  } else {
    for (const value of array) {
      object[value] = valueGenerator
    }
  }
  return object
}