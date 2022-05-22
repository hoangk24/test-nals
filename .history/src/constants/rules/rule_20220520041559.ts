const MESSAGE = {
  Required: 'không được để trống!',
  Within50Characters: 'tối đa 50 ký tự!',
  AtLeast8Characters: 'ít nhất 8 ký tự!',
}
const replaceMessage = (message:string,name:string)=>`${name} ${message}`
const RULE = {
  required (value:string,name:string)=>{
    if(!value) return replaceMessage(MESSAGE.Required,name)\
    return true
  }
}
