//console.log(this);

function newFunc() {
	console.log(this);
}

//newFunc();
var a = {
	f:newFunc
}

a.f();
var b = a.f.bind(a);
b();