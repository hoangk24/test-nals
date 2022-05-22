const MESSAGE = {
  Required: 'không được để trống!',
  Within50Characters: 'tối đa 50 ký tự!',
  AtLeast8Characters: 'ít nhất 8 ký tự!',
}
const replaceMessage = (message: string, name: string) => `${name} ${message}`
export const RULE = {
  required(value: string, name: string) {
    if (!value) return replaceMessage(MESSAGE.Required, name)
    return true
  },
  within50Characters(value: string, name: string) {
    if (!value) return replaceMessage(MESSAGE.Required, name)
    if (value.length > 50) return replaceMessage(MESSAGE.Required, name)
    return true
  },
  atLeast8Characters(value: string, name: string) {
    if (!value) return replaceMessage(MESSAGE.Required, name)
    if (value.length < 8) return replaceMessage(MESSAGE.Required, name)
    return true
  },
}
