window.addEventListener('DOMContentLoaded', () => {


	// Function 1

	let func1Btn = document.getElementById('func1_btn');
	let result = document.getElementById('func1_result');

	func1Btn.addEventListener('click', () => {
		let func1Length = document.getElementById('length').value;
		let func1Min = document.getElementById('min').value;
		let func1Max = document.getElementById('max').value;
		let newArray = [];

		function getRandomArray(func1Length, func1Min, func1Max) {
			if (func1Min > func1Max)  {
				newArray.push('Друге число менше, ніж перше!');
				return newArray;
			} else if (func1Length === '' || func1Min === '' || func1Max === '') {
				newArray.push('Ви ввели неправильне значення!');
				return newArray;
			} else {
				for (let i = 0; i < func1Length; i++) {
					newArray.push(Math.floor(Math.random() * func1Max));
				}
			}
			return newArray;
		}

		getRandomArray(func1Length, func1Min, func1Max);
		result.innerHTML = `<p>${newArray}</p>`
	});


	// Function 2

	let arr = [];
		
	function gettingInput(element) {
	let newMass = [];
	for (let i = 0; i < element.length; i++) {
		if (!Number(element[i]) && (element[i] !== ',') && (element[i] !== '-')) {
			delete element[i];
		}
		else {
			newMass.push(element[i]);
		}
	}
	let ex = [];
	let newnewMass = [];
	for (let k = 0; k < newMass.length; k++) {
		if (newMass[k] !== ',') {
			ex.push(newMass[k]);
		} else {
			newnewMass.push(ex.join(''));
			ex = [];
		}
	}
	newnewMass.push(ex.join(''));
	for (let j = 0; j < newnewMass.length; j++) {
		if (Number(newnewMass[j])) {
			arr.push(newnewMass[j]);
		}
	}
	return arr;
	}

	func2_btn.addEventListener('click', () => {
		let func2Btn = document.getElementById('func2_btn');
		let result2 = document.getElementById('func2_result');
		let moda = document.getElementById('length1').value.split('');
		gettingInput(moda);

		function getMode(arr) {
    	let key, result = [ ],
	        count = { }, max = -Infinity,
	        nomodeMsg = "Масив не має моди.",
	        nomodeFlag = true;

	    arr.forEach( (item) => {
	        if (!(item in count)) count[item] = 0;
	        count[item]++;
	        max = max < count[item] ? count[item] : max;
	    });
	    if (max <= 1) return nomodeMsg;
	    for (key in count) {
	        if ( count[key] === max ) {
	            result.push(key)
	        } else {
	            nomodeFlag = false;
	        }
	    }
	    return nomodeFlag ? nomodeMsg : result;
		} 

	
		result2.innerHTML = `<p>Мода масиву: ${getMode(arr)}</p>`;
	});

	//Function 3

	func3_btn.addEventListener('click', () => {
		let func3Btn = document.getElementById('func3_btn');
		let result3 = document.getElementById('func3_result');
		let arrAverage = [];
		let average = document.getElementById('length2').value.split('');
		gettingInput(average);
		let count = 0;
		for (let k = 0; k < arr.length; k++) {
			arrAverage.push(parseInt(arr[k]));
		}
		for (let j = 0; j < arrAverage.length; j++) {
			count += arrAverage[j];
		}
		let result = count / arr.length;
		result3.innerHTML = `<p>Середнє арифметичне масиву: ${result}</p>`;
	});

	//Function 4

	func4_btn.addEventListener('click', () => {
		let func4Btn = document.getElementById('func4_btn');
		let result4 = document.getElementById('func4_result');
		let mediana = document.getElementById('length3').value.split('');
		gettingInput(mediana);
		let arrMediana = [];
		let count = 0;
		function Mediana() {
			for (let k = 0; k < arr.length; k++) {
			arrMediana.push(parseInt(arr[k]));
		}
			arrMediana = arrMediana.sort();
			if (arrMediana.length % 2 === 0) {
				count = (arrMediana[(arrMediana.length / 2) - 1] + arrMediana[arrMediana.length / 2]) / 2;
			} else {
				count = (arrMediana[Math.floor(arrMediana.length / 2)]);
			}
		}
		Mediana();
		result4.innerHTML = `<p>Медіана масиву: ${count}</p>`;
	});

	//Function 5

	func5_btn.addEventListener('click', () => {
		let func5Btn = document.getElementById('func5_btn');
		let result5 = document.getElementById('func5_result');
		let evenNumbers = document.getElementById('length4').value.split('');
		gettingInput(evenNumbers);
		let even = [];
		for (let k = 0; k < arr.length; k++) {
			even.push(parseInt(arr[k]));
		}
		const result = even.filter(evenNum => evenNum % 2 !== 0);
		result5.innerHTML = `<p>Масив без парних чисел: ${result}</p>`;
	});

	// Function 6

	func6_btn.addEventListener('click', () => {
		let func6Btn = document.getElementById('func6_btn');
		let result6 = document.getElementById('func6_result');
		let moreThanZero = document.getElementById('length5').value.split('');
		gettingInput(moreThanZero);
		let arrZero = [];
		for (let k = 0; k < arr.length; k++) {
			arrZero.push(parseInt(arr[k]));
		}
		const noZero = [];
		for (let i = 0; i < arrZero.length; i++) {
			if (arrZero[i] > 0) {
				noZero.push(arrZero[i]);
			}
		}
		result6.innerHTML = `<p>Кількість чисел, більших за 0: ${noZero.length}</p>`;
	});

	// Function 7

	func7_btn.addEventListener('click', () => {
		let func7Btn = document.getElementById('func7_btn');
		let result7 = document.getElementById('func7_result');
		let divisionFive = document.getElementById('length6').value;
		gettingInput(divisionFive);
		let arrFive = [];
		for (let k = 0; k < arr.length; k++) {
			arrFive.push(parseInt(arr[k]));
		}
		const onlyFive = [];
		for (let i = 0; i < arrFive.length; i++) {
			if (arrFive[i] % 5 === 0) {
				onlyFive.push(arrFive[i]);
			}
		}
		result7.innerHTML = `<p>Числа, які ділять на 5 без остачі: ${onlyFive}</p>`;
	});

	//Function 8

	func8_btn.addEventListener('click', () => {
		let func8Btn = document.getElementById('func8_btn');
		let result8 = document.getElementById('func8_result');
		let changeWord = document.getElementById('length7').value.split(' ');
		const badWords = ['fuck', 'shit'];
		let re = new RegExp(badWords.join('|'), 'gi');
		let withoutBadWords = changeWord.map(element => element.replace(re, '****')).join(' ');
		result8.innerHTML = `<p>Числа, які ділять на 5 без остачі: ${withoutBadWords}</p>`;
	});

	//Function 9

	func9_btn.addEventListener('click', () => {
		let func9Btn = document.getElementById('func9_btn');
		let result9 = document.getElementById('func9_result');
		let splitWord = document.getElementById('length8').value;
		console.log(splitWord);
		let newWord = splitWord.match(new RegExp('.{1,3}', 'g'));
		result9.innerHTML = `<p>Поділене слово: ${newWord}</p>`;
	});
});

