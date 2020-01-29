import arrayToObjectKeys from "array-to-object-keys"

const array = ["a", "b"]
const result = arrayToObjectKeys(array, (key, index) => `value for ${key} #${index + 1}`)