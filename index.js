let countEl = document.getElementById('count-el')
let count2El = document.getElementById('count2-el')
let incrementBtn = document.getElementById('increment-btn')
let decrementBtn = document.getElementById('decrement-btn')
let saveBtn = document.getElementById('save-btn')
let tracker = 0

incrementBtn.addEventListener("click", function() {
	tracker += 1
	countEl.innerHTML = tracker
	console.log(tracker)
})

saveBtn.addEventListener("click", function() {
	const trackerSeparator = tracker + " - "
	count2El.innerHTML += trackerSeparator
	countEl.innerHTML = 0
	tracker = 0
})

decrementBtn.addEventListener("click", function() {
	tracker -= 1
	countEl.innerHTML = tracker
})

console.log(`LET'S COUNT PEOPLE ENTERING THE CLASS`)