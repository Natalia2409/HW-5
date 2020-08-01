window.addEventListener('DOMContentLoaded', () => {


	// Function 1
	function getRandomArray(length, min, max) {
		let randomArray = [];
		if (max < min) {
			throw 'ВИ ввели неправильні дані';
		} else {
			for (let i = 0; i < length; i++) {
				randomArray[i] = Math.floor(Math.random() * (max - min + 1) + min);
			}
			return randomArray;
		}
	}

	// Function 2
	function getMode(...numbers) {
		let key, result = [ ],
	        count = { }, max = -Infinity,
	        nomodeMsg = "Масив не має моди.",
	        nomodeFlag = true;

	    numbers.forEach((item) => {
	        if (!(item in count)) count[item] = 0;
	        count[item]++;
	        max = max < count[item] ? count[item] : max;
	    });
	    if (max <= 1) return nomodeMsg;
	    for (key in count) {
	        if (count[key] === max ) {
	            result.push(key)
	        } else {
	            nomodeFlag = false;
	        }
	    }
	    return nomodeFlag ? nomodeMsg : result;
	} 

	// Function 3
	function getAverage(...numbers) {
		let averageArr = numbers.filter(num => Number(num));
		let count = 0;
		for (let i = 0; i < averageArr.length; i++) {
			count += averageArr[i];
		}
		let result = count / averageArr.length;
		return result;
	}

	// Function 4
	function getMedian(...numbers) {
		let medianaArr = numbers.filter(num => Number(num));
		medianaArr = medianaArr.sort(function(a,b) {
			return a - b;
		});
		let count = 0;
		if (medianaArr.length % 2 === 0) {
			count = (medianaArr[(medianaArr.length / 2) - 1] + medianaArr[medianaArr.length / 2]) / 2;
		} else {
			count = (medianaArr[Math.floor(medianaArr.length / 2)]);
		}
		return count;
	}

	// Function 5
	function filterEvenNumbers(...numbers) {
		let evenNum = numbers.filter(num => Number(num));
		return evenNum.filter(evenNum => evenNum % 2 !== 0);
	}

	// Function 6
	function countPositiveNumbers(...numbers) {
		let countPos = numbers.filter(num => Number(num));
		return countPos.filter(positive => positive > 0);
	}

	// Function 7
	function getDividedByFive(...numbers) {
		let divide = numbers.filter(num => Number(num));
		return divide.filter(five => five % 5 === 0);
	}

	// Function 8
	function replaceBadWords(string) {
		const badWords = ['fuck', 'shit'];
		let replaceWord = new RegExp(badWords.join('|'), 'gi');
		let withoutBadWords = string.map(element => element.replace(replaceWord, '****')).join(' ');
		return withoutBadWords;
	}

	// Function 9
	function divideByThree(word) {
		return word.match(new RegExp('.{1,3}', 'g'));
	}


	let btn1 = document.getElementById('func1_btn');
	let result1 = document.getElementById('func1_result');

	btn1.addEventListener('click', () => {
		let length1 = Number(document.getElementById('length').value);
		let min1 = Number(document.getElementById('min').value);
		let max1 = Number(document.getElementById('max').value);
		let array = getRandomArray(length1, min1, max1);
		result1.innerHTML = `Масив випадкових чисел: ${array}`
	}); 


	let btn2 = document.getElementById('func2_btn');
	let result2 = document.getElementById('func2_result');

	btn2.addEventListener('click', () => {
		let moda = document.getElementById('length1').value.split(',');
		let modaArray = moda.map(num => Number(num));
		let result = getMode(...modaArray);
		result2.innerHTML = `Мода масиву: ${result}`
	});


	let btn3 = document.getElementById('func3_btn');
	let result3 = document.getElementById('func3_result');

	btn3.addEventListener('click', () => {
		let average = document.getElementById('length2').value.split(',');
		let averageNum = average.map(num => Number(num));
		let result = getAverage(...averageNum);
		result3.innerHTML = `Середнє арифметичне масиву: ${result}`
	});


	let btn4 = document.getElementById('func4_btn');
	let result4 = document.getElementById('func4_result');

	btn4.addEventListener('click', () => {
		let mediana = document.getElementById('length3').value.split(',');
		let medianaArray = mediana.map(med => Number(med));
		let result = getMedian(...medianaArray);
		result4.innerHTML = `Медіана масиву: ${result}`
	});


	let btn5 = document.getElementById('func5_btn');
	let result5 = document.getElementById('func5_result');

	btn5.addEventListener('click', () => {
		let evenNumbers = document.getElementById('length4').value.split(',');
		let evenArr = evenNumbers.map(num => Number(num));
		let result = filterEvenNumbers(...evenArr);
		result5.innerHTML = `Масив без парних чисел: ${result}`
	});


	let btn6 = document.getElementById('func6_btn');
	let result6 = document.getElementById('func6_result');

	btn6.addEventListener('click', () => {
		let moreThanZero = document.getElementById('length5').value.split(',');
		let positiveNum = moreThanZero.map(pos => Number(pos));
		let result = countPositiveNumbers(...positiveNum);
		result6.innerHTML = `Кількість додатніх чисел: ${result.length}`
	});


	let btn7 = document.getElementById('func7_btn');
	let result7 = document.getElementById('func7_result');

	btn7.addEventListener('click', () => {
		let divisionFive = document.getElementById('length6').value.split(',');
		let fiveArray = divisionFive.map(division => Number(division));
		let result = getDividedByFive(...fiveArray);
		result7.innerHTML = `Числа, які діляться на 5: ${result}`
	});


	let btn8 = document.getElementById('func8_btn');
	let result8 = document.getElementById('func8_result');

	btn8.addEventListener('click', () => {
		let changeWord = document.getElementById('length7').value.split(' ');
		let result = replaceBadWords(changeWord);
		result8.innerHTML = `Без поганих слів: ${result}`
	});


	let btn9 = document.getElementById('func9_btn');
	let result9 = document.getElementById('func9_result');

	btn9.addEventListener('click', () => {
		let word = document.getElementById('length8').value;
		let result = divideByThree(word);
		result9.innerHTML = `Розділене слово: ${result}`
	});
});

