function formSubmit (e) {
	e.preventDefault();
	var number = Number(e.target.num.value);
	alert(factorial(number));
}

function factorial(num) {
   return num > 1 ? num = factorial(num - 1) : 1;
}

document.getElementById('my-form')
  .addEventListener('submit', formSubmit);