/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */

function isValid(name) { 
  if(name != null && name.indexOf(" ") == -1 &&name != "" && name.length >= 4) {
return true
}else{
  return false
}
};
/**function isValid(name) {
  if(name != null && name != "" && name.length >= 4){
  for(let i of name){
  if (i == " "){
  return false
  }
  }
  return true;
  }
  else
  return false;
  }
  */
function sayHello() {
  const userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
};