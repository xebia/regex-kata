export default function match(regex, value){
  const regexp = new RegExp(regex)
  const result = value.match(regexp);
  if(!result){
    return '';
  } else {
    return result[0];
  }

}
