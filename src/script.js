//idea	Asynchronný JavaScript a JavaScript runtime
//	-	Asynchrónny JavaScript umožňuje vykonávať dlhšie operácie na pozadí bez toho, aby sa zastavilo vykonávanie zvyšného kódu.

// kód
// asynchronný kód
// kód

console.log(1);
setTimeout( () => { 
	console.log(2);
}, 0)
console.log(3);