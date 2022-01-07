const board = document.querySelector('#board')
const colors = ['#093800', '#136803', '#1aa300', '#27e304', '#8dfd78', '#d4fbcc']
const SQUARES_NUMBER = 100

let arr = [2,3,4,5,6,7,11,18,20,30,40,50,60,70,18,29,33,36,39,49,59,62,67,69,73,74,75,76,79,81,88,92,93,94,95,96,97];

for (let i = 0; i < SQUARES_NUMBER; i++){
	const square = document.createElement('div')
	square.classList.add('square')
	square.classList.add('square_'+ i)

		if (arr.includes(i)) {
			square.classList.add('nonmarked')
		}

	// square.addEventListener('mouseover', () => setColor(square))
	square.addEventListener('mouseover', setColor)
	
	// square.addEventListener('mouseleave', () => removeColor(square))
	square.addEventListener('mouseleave', removeColor)

	board.append(square)
}

function setColor(event) {
	const element = event.target
	const color = getRandomColor()
	element.style.backgroundColor = color
	element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(event) {
	const element = event.target
	if (element.classList.contains("nonmarked")) {
		element.style.backgroundColor = '#FFFF00'
		element.style.boxShadow = `0 0 2px #000`
	} else {
		element.style.backgroundColor = '#1d1d1d'
		element.style.boxShadow = `0 0 2px #000`
	}
}

// function setColor(element) {
// 	const color = getRandomColor()
// 	element.style.backgroundColor = color
// 	element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
// }

// function removeColor(element) {
// 	if (element.classList.contains("nonmarked")) {
// 		element.style.backgroundColor = '#FFFF00'
// 		element.style.boxShadow = `0 0 2px #000`
// 	} else {
// 		element.style.backgroundColor = '#1d1d1d'
// 		element.style.boxShadow = `0 0 2px #000`
// 	}
// }

function getRandomColor() {
	// const index = Math.floor(Math.random() * colors.length)
	return colors[Math.floor(Math.random() * colors.length)]
}