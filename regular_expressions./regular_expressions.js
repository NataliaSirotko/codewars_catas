# codewars_catas

function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin)
}

function validatePIN (pin) {
  //return true or false
  var regExp= new RegExp(/^(\d{4}|\d{6})$/);
  return regExp.test(pin);
  }
console.log(validatePIN(22222));
