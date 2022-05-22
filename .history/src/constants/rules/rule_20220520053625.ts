const MESSAGE = {
  Required: 'không được để trống!',
  Within50Characters: 'tối đa 50 ký tự!',
  AtLeast8Characters: 'ít nhất 8 ký tự!',
  ComparePassword: 'không với mật khẩu',
}
const replaceMessage = (message: string, name: string) => `${name} ${message}`
export const RULE = {
  required(value: string, name: string) {
    if (!value) return replaceMessage(MESSAGE.Required, name)
    return true
  },
  within50Characters(value: string, name: string) {
    if (!value) return replaceMessage(MESSAGE.Required, name)
    if (value.length > 50) return replaceMessage(MESSAGE.Within50Characters, name)
    return true
  },
  atLeast8Characters(value: string, name: string) {
    if (!value) return replaceMessage(MESSAGE.Required, name)
    if (value.length < 8) return replaceMessage(MESSAGE.AtLeast8Characters, name)
    return true
  },
  ComparePassword(value,password,name:string)Ơ
}
