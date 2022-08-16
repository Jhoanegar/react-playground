export const isAMultipleOfFive = (number: number): boolean => {
  if (number === 0) {
    return false
  }
  return number % 5 == 0
}
