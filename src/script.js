//idea	Memory leak a prax

	//note	1.	Globálne premenné
	//!	-	písať len ak je to nevyhnutné, kvôli memory leaku

	let a = 10; // globálna premenná
	//bug		a = 10;	takto sa zvykne naznačovať, že sa jedná o globálnu premennú

	console.log(a);

	const myFunction = () => {
		console.log(a);
	}

	myFunction();

	console.log(a)
	
	//note	2.	Event listener
	//!	-	pokiaľ ďalej nie je treba, treba ho odstrániť kvôli memory leaku
	
	const button = document.querySelector("button");
	const onClick = () => {
		console.log("Kliknutie")
	}
	button.addEventListener("click", onClick);

	button.removeEventListener("click", onClick);

	//note	3.	SetInterval
	//!	-	pokiaľ nie je treba, taktiež treba vymazať pre memory leak
	//		-	každý interval má svoje ID
	let intervalID = setInterval(() => {
		console.log("Test");
	}, 3000);

	console.log(intervalID);
	clearInterval(intervalID);