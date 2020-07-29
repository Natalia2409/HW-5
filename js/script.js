window.addEventListener('DOMContentLoaded', () => {


	// Function 1

	let func1Btn = document.getElementById('func1_btn');
	func1Btn.addEventListener('click', () => {
		let result = document.getElementById('func1_result');
		let func1Length = document.getElementById('length').value;
		let func1Min = document.getElementById('min').value;
		let func1Max = document.getElementById('max').value;
		func1Length = Number(func1Length);
		func1Min = Number(func1Min);
		func1Max = Number(func1Max);
		let newArray = [];
		if (func1Min > func1Max)  {
			newArray.push('Друге число менше, ніж перше!');
		} else if (func1Length === '' || func1Min === '' || func1Max === '') {
			newArray.push('Ви ввели неправильне значення!');
		} else {
			for (let i = 0; i < func1Length; i++) {
				const randomNum = Math.floor(Math.random() * (func1Max - func1Min + 1) + func1Min);
				newArray.push(randomNum);
			}
		}
		result.innerHTML = `<p>${newArray}</p>`
	});


	// Function 2

	func2_btn.addEventListener('click', () => {
		let func2Btn = document.getElementById('func2_btn');
		let result2 = document.getElementById('func2_result');
		let moda = document.getElementById('length1').value.split(',');
		let newMass = [];
		for (let i = 0; i < moda.length; i++) {
			if (Number(moda[i])) {
				newMass.push(moda[i]);
			}
		}
		let arr1 = [];
		for (let i = 0; i < newMass.length; i++) {
			arr1.push(parseInt(newMass[i]));
		}

		function getMode(arr1) {
    	let key, result = [ ],
	        count = { }, max = -Infinity,
	        nomodeMsg = "Масив не має моди.",
	        nomodeFlag = true;

	    arr1.forEach( (item) => {
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

	
		result2.innerHTML = `<p>Мода масиву: ${getMode(arr1)}</p>`;
	});

	//Function 3

	func3_btn.addEventListener('click', () => {
		let func3Btn = document.getElementById('func3_btn');
		let result3 = document.getElementById('func3_result');
		let arrAverage = [];
		let average = document.getElementById('length2').value.split(',');
		let count = 0;
		let last = [];
		for (let i = 0; i < average.length; i++) {
			last.push(parseInt(average[i]));
		}
		for (let j = 0; j < last.length; j++) {
			count += last[j]
		}
		console.log(count);
		let result = count / last.length;
		result3.innerHTML = `<p>Середнє арифметичне масиву: ${result}</p>`;
	});

	//Function 4

	func4_btn.addEventListener('click', () => {
		let func4Btn = document.getElementById('func4_btn');
		let result4 = document.getElementById('func4_result');
		let mediana = document.getElementById('length3').value.split(',');
		let newMed = [];
		for (let i = 0; i < mediana.length; i++) {
			if (Number(mediana[i])) {
				newMed.push(mediana[i]);
			}
		}
		let medLast = [];
		for (let i = 0; i < newMed.length; i++) {
			medLast.push(parseInt(newMed[i]));
		}
		medLast = medLast.sort(function(a,b) {
			return a - b;
		});
		let count = 0;
		if (medLast.length % 2 === 0) {
			count = (medLast[(medLast.length / 2) - 1] + medLast[medLast.length / 2]) / 2;
		} else {
			count = (medLast[Math.floor(medLast.length / 2)]);
		}
		result4.innerHTML = `<p>Медіана масиву: ${count}</p>`;
	});

	//Function 5

	func5_btn.addEventListener('click', () => {
		let func5Btn = document.getElementById('func5_btn');
		let result5 = document.getElementById('func5_result');
		let evenNumbers = document.getElementById('length4').value.split(',');
		let newEven = [];
		for (let i = 0; i < evenNumbers.length; i++) {
			if (Number(evenNumbers[i])) {
				newEven.push(evenNumbers[i]);
			}
		}
		let even = [];
		for (let k = 0; k < newEven.length; k++) {
			even.push(parseInt(newEven[k]));
		}
		const result = even.filter(evenNum => evenNum % 2 !== 0);
		result5.innerHTML = `<p>Масив без парних чисел: ${result}</p>`;
	});

	// Function 6

	func6_btn.addEventListener('click', () => {
		let func6Btn = document.getElementById('func6_btn');
		let result6 = document.getElementById('func6_result');
		let moreThanZero = document.getElementById('length5').value.split(',');
		let newZero = [];
		for (let i = 0; i < moreThanZero.length; i++) {
			if (Number(moreThanZero[i])) {
				newZero.push(moreThanZero[i]);
			}
		}
		const noZero = [];
		for (let i = 0; i < newZero.length; i++) {
			if (newZero[i] > 0) {
				noZero.push(newZero[i]);
			}
		}
		result6.innerHTML = `<p>Кількість чисел, більших за 0: ${noZero.length}</p>`;
	});

	// Function 7

	func7_btn.addEventListener('click', () => {
		let func7Btn = document.getElementById('func7_btn');
		let result7 = document.getElementById('func7_result');
		let divisionFive = document.getElementById('length6').value.split(',');
		let newFive = [];
		for (let i = 0; i < divisionFive.length; i++) {
			if (Number(divisionFive[i])) {
				newFive.push(divisionFive[i]);
			}
		}
		const onlyFive = [];
		for (let i = 0; i < newFive.length; i++) {
			if (newFive[i] % 5 === 0) {
				onlyFive.push(newFive[i]);
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
		result8.innerHTML = `<p>Фраза без поганих слів: ${withoutBadWords}</p>`;
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

