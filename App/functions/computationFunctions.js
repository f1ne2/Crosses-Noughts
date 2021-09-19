export const generateId = (str) => {
  return '_' + Math.random().toString(36).substr(2, 9) + str;
}
