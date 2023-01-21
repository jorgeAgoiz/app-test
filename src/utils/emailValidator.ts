export const emailValidator = (value: string): boolean => {
  let regex: RegExp = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}')
  return regex.test(value)
}
