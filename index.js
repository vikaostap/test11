function formSubmit (e) {
	e.preventDefault();
	var number = Number(e.target.num.value);
	console.log('type:', typeof number);
	console.log(number);
	alert(factorial(number));
}

function factorial(num) {
   var res = 1;
   for(var i = 1; i < num; i++){
   	res *= i;
   }
  return res;
}

document.getElementById('my-form')
  .addEventListener('submit', formSubmit);